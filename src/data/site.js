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
    id: "data",
    num: "01",
    cat: "Data",
    title: "Valorisation de la donnée",
    short:
      "Collecte, structuration, exploitation et valorisation de la donnée.",
    description:
      "La donnée est au cœur de toute décision éclairée. Nous intervenons sur l'ensemble du cycle de vie de vos données : gouvernance, ingénierie (ETL, datalakes, entrepôts cloud), analyse, visualisation et reporting. Que ce soit pour structurer un premier entrepôt ou industrialiser une plateforme data existante, nous adaptons notre intervention à votre maturité et vos enjeux.",
    skills: [
      "BigQuery",
      "GCP / AWS",
      "Power BI",
      "Data Governance",
      "Reporting",
    ],
  },
  {
    id: "ia",
    num: "02",
    cat: "IA",
    title: "Intelligence Artificielle",
    short: "Machine learning, modèles prédictifs, agents et LLM.",
    description:
      "De la modélisation statistique classique aux architectures d'IA générative, nous concevons des solutions adaptées à votre problématique : modèles prédictifs, classification, détection d'anomalies, traitement du langage naturel, intégration de modèles de langage (LLM) et agents autonomes. L'IA mise en production, pas en démonstration.",
    skills: [
      "Machine Learning",
      "Modèles prédictifs",
      "NLP",
      "LLM / RAG",
      "Agents",
    ],
  },
  {
    id: "reseau",
    num: "03",
    cat: "Réseau",
    title: "Infrastructure & Réseaux",
    short: "Architecture réseau, déploiement cloud, haute disponibilité.",
    description:
      "Nous concevons et déployons des infrastructures réseau robustes adaptées à vos besoins : architecture LAN/WAN, VPN, segmentation, supervision. Sur site ou en cloud hybride, nous garantissons performance, disponibilité et évolutivité.",
    skills: [
      "LAN / WAN",
      "VPN",
      "Cloud hybride",
      "Supervision",
      "Virtualisation",
    ],
  },
  {
    id: "cyber",
    num: "04",
    cat: "Cybersécurité",
    title: "Cybersécurité & Résilience numérique",
    short: "Audit de sécurité, conformité RGPD, protection des systèmes.",
    description:
      "Nous évaluons et renforçons la posture de sécurité de votre organisation : audits techniques, tests d'intrusion, conformité RGPD, gestion des accès et des identités. Anticiper les menaces plutôt que les subir.",
    skills: ["Audit sécurité", "Pentest", "RGPD", "IAM", "SIEM"],
  },
  {
    id: "conseil",
    num: "05",
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
