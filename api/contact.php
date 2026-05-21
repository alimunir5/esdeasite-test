<?php
header('Content-Type: application/json; charset=utf-8');

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, ['https://esdeaconsulting.fr', 'https://www.esdeaconsulting.fr'], true)) {
    header("Access-Control-Allow-Origin: $origin");
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Méthode non autorisée.']);
    exit;
}

require __DIR__ . '/config.php';

$data    = json_decode(file_get_contents('php://input'), true) ?? [];
$name    = trim($data['name']    ?? '');
$email   = trim($data['email']   ?? '');
$company = trim($data['company'] ?? '');
$message = trim($data['message'] ?? '');

if (!$name || !$email || !$message) {
    http_response_code(400);
    echo json_encode(['error' => 'Nom, email et message sont obligatoires.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Adresse email invalide.']);
    exit;
}

$subject = "Nouveau message de $name" . ($company ? " — $company" : '');
$html = '<div style="font-family:sans-serif;max-width:560px;margin:0 auto">'
    . '<h2 style="color:#0a0a0a">Nouveau message — site ESDEA</h2>'
    . '<table style="width:100%;border-collapse:collapse">'
    . '<tr><td style="padding:6px 0;color:#888">Nom</td><td style="padding:6px 0"><strong>' . htmlspecialchars($name) . '</strong></td></tr>'
    . '<tr><td style="padding:6px 0;color:#888">Email</td><td style="padding:6px 0"><a href="mailto:' . htmlspecialchars($email) . '">' . htmlspecialchars($email) . '</a></td></tr>'
    . '<tr><td style="padding:6px 0;color:#888">Entreprise</td><td style="padding:6px 0">' . htmlspecialchars($company ?: '—') . '</td></tr>'
    . '</table>'
    . '<hr style="border:none;border-top:1px solid #eee;margin:16px 0"/>'
    . '<p style="white-space:pre-wrap;line-height:1.6">' . nl2br(htmlspecialchars($message)) . '</p>'
    . '</div>';

$payload = json_encode([
    'from'    => 'Site ESDEA <' . CONTACT_FROM_EMAIL . '>',
    'to'      => [CONTACT_TO_EMAIL],
    'replyTo' => $email,
    'subject' => $subject,
    'html'    => $html,
    'text'    => "Nom : $name\nEmail : $email\nEntreprise : " . ($company ?: '—') . "\n\nMessage :\n$message",
]);

$ch = curl_init('https://api.resend.com/emails');
curl_setopt_array($ch, [
    CURLOPT_POST           => true,
    CURLOPT_POSTFIELDS     => $payload,
    CURLOPT_HTTPHEADER     => [
        'Authorization: Bearer ' . RESEND_API_KEY,
        'Content-Type: application/json',
    ],
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT        => 10,
    CURLOPT_SSL_VERIFYPEER => true,
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($httpCode >= 200 && $httpCode < 300) {
    echo json_encode(['ok' => true]);
} else {
    http_response_code(500);
    echo json_encode(['error' => "L'envoi a échoué. Réessayez ou écrivez-nous directement."]);
}
