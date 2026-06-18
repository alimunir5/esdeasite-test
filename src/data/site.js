// ============================================
// Contenu du site - centralisé ici.
// Modifiez ce fichier pour mettre à jour les services,
// l'équipe ou les stats sans toucher aux composants.
// ============================================

export const SITE = {
  name: "ESDEA Consulting",
  domain: "esdeaconsulting.fr",
  email: "contact@esdeaconsulting.fr",
  baseline: "Cabinet de conseil Data, Cybersécurité et IT",
  location: "Île-de-France",
};

export const STATS = [
  { num: "3", label: "Associés" },
  { num: "24h", label: "Délai de réponse" },
];

export const SERVICES = [
  {
    id: "data-ia",
    num: "01",
    cat: "Data & IA",
    title: "De la donnée à l'intelligence",
    short: "Gouvernance, ingénierie data, BI, machine learning et IA générative.",
    description:
      "Nous intervenons sur l'ensemble du cycle de vie de vos données (collecte, structuration, gouvernance, analyse et visualisation) et y greffons l'intelligence artificielle là où elle crée de la valeur : modèles prédictifs, détection d'anomalies, traitement du langage naturel, agents autonomes et LLM. Une seule équipe, du pipeline brut à la décision augmentée.",
    skills: ["BigQuery", "GCP / AWS", "Power BI", "Machine Learning", "LLM / RAG", "Agents", "Data Governance"],
  },
  {
    id: "infra-cyber",
    num: "02",
    cat: "Infrastructure & Cybersécurité",
    title: "Des systèmes robustes et défendus",
    short: "Architecture réseau, cloud hybride, audit sécurité et conformité RGPD.",
    description:
      "Nous concevons des infrastructures réseau performantes et évolutives (LAN/WAN, VPN, cloud hybride, supervision) et les sécurisons de bout en bout : audits techniques, tests d'intrusion, gestion des accès et conformité réglementaire. La solidité de vos systèmes et leur protection, traités comme un tout.",
    skills: ["LAN / WAN", "Cloud hybride", "Audit sécurité", "Pentest", "RGPD", "IAM", "SIEM"],
  },
  {
    id: "conseil",
    num: "03",
    cat: "Conseil",
    title: "Conseil & Stratégie",
    short: "Audit, roadmap technique, accompagnement décision.",
    description:
      "Nous structurons votre transformation numérique étape par étape : audit de l'existant, roadmap technique, choix technologiques, accompagnement à la décision. On éclaire avant d'écrire la première ligne de code.",
    skills: ["Audit", "Roadmap", "Architecture", "Stratégie", "Transformation"],
  },
];

export const APPROACH = [
  {
    num: "01",
    title: "Comprendre",
    text: "Immersion dans votre métier, vos contraintes, vos ambitions. Pas de solution générique.",
  },
  {
    num: "02",
    title: "Concevoir",
    text: "Architecture, design produit, choix technologiques. Toujours en cohérence avec vos enjeux.",
  },
  {
    num: "03",
    title: "Construire",
    text: "Développement itératif, livraisons régulières, tests rigoureux. La qualité comme standard.",
  },
  {
    num: "04",
    title: "Pérenniser",
    text: "Documentation, formation, transfert. Pour que la solution vive après notre intervention.",
  },
];

// Mettez à jour les membres de l'équipe ici.
export const TEAM = [
  {
    initial: "D",
    name: "Diaby Diakité",
    role: "Data Engineering & IA",
    bio: "Data engineer spécialisé GCP/BigQuery. Expérience en construction de datalakes et intégration de modèles de langage.",
    skills: [
      "Data Engineering",
      "GCP / BigQuery",
      "Intégration LLM",
      "Data Visualisation",
      "Cloud",
    ],
  },
  {
    initial: "S",
    name: "Sidy Doucoure",
    role: "Data & Machine Learning",
    bio: "Analyste data et ML. Conception de modèles prédictifs et gestion de bases de données.",
    skills: [
      "Analyse de données",
      "Machine Learning",
      "Gestion BDD",
      "Modèles prédictifs",
      "Rédaction",
    ],
  },
  {
    initial: "A",
    name: "Ali Munir",
    role: "Infrastructure & Sécurité",
    bio: "Expert infrastructure et cybersécurité. Architecture réseau sécurisée et conformité.",
    skills: [
      "Infrastructure Réseaux",
      "Cybersécurité",
      "Cloud",
      "Architecture",
      "Organisation",
    ],
  },
];
