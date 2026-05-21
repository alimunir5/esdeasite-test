// ============================================
// Contenu du site — centralisé ici.
// Modifiez ce fichier pour mettre à jour les services,
// l'équipe ou les stats sans toucher aux composants.
// ============================================

export const SITE = {
  name: 'ESDEA Consulting',
  domain: 'esdeaconsulting.fr',
  email: 'contact@esdeaconsulting.fr',
  baseline: 'Cabinet de conseil IT & Data',
  location: 'Île-de-France',
}

export const STATS = [
  { num: '12+', label: 'Projets livrés' },
  { num: '100%', label: 'Clients satisfaits' },
  { num: '3', label: 'Experts associés' },
  { num: '24h', label: 'Délai de réponse' },
]

export const SERVICES = [
  {
    id: 'data',
    num: '01',
    cat: 'Data',
    title: 'Ingénierie Data & Cloud',
    short: 'Pipelines ETL, datalakes, BigQuery, GCP/AWS.',
    description:
      "Nous construisons des infrastructures de données robustes et scalables. De la collecte à l'exploitation : pipelines ETL, datalakes, entrepôts BigQuery ou Snowflake, orchestration. Vos données deviennent un actif exploitable.",
    skills: ['BigQuery', 'GCP / AWS', 'Airflow', 'dbt', 'ETL'],
  },
  {
    id: 'ia',
    num: '02',
    cat: 'IA',
    title: 'IA & Modèles de langage',
    short: 'Intégration LLM, classification, agents conversationnels.',
    description:
      "Nous opérationnalisons l'intelligence artificielle au cœur de vos processus métier : intégration de modèles de langage, RAG, classification automatisée, agents. L'IA mise en production, pas en démonstration.",
    skills: ['LLM', 'RAG', 'Classification', 'Agents', 'OpenAI / Claude'],
  },
  {
    id: 'web',
    num: '03',
    cat: 'Web',
    title: 'Développement web sur mesure',
    short: 'Sites, e-commerce, ERP, dashboards applicatifs.',
    description:
      "Une approche produit, du design à la maintenance. Sites vitrines performants, plateformes e-commerce, ERP métier, tableaux de bord applicatifs. Code propre, maintenable, documenté.",
    skills: ['React', 'Node.js', 'Vite', 'PostgreSQL', 'API REST'],
  },
  {
    id: 'bi',
    num: '04',
    cat: 'BI',
    title: 'Business Intelligence',
    short: 'Power BI, Spotfire, tableaux de bord stratégiques.',
    description:
      "Donnez à vos équipes les outils pour piloter la performance. Tableaux de bord Power BI ou Spotfire, reporting stratégique, indicateurs temps réel. La donnée enfin lisible et actionnable.",
    skills: ['Power BI', 'Spotfire', 'Looker', 'KPIs', 'Reporting'],
  },
  {
    id: 'conseil',
    num: '05',
    cat: 'Conseil',
    title: 'Conseil & Stratégie',
    short: 'Audit, roadmap technique, accompagnement décision.',
    description:
      "Nous structurons votre transformation numérique étape par étape : audit de l'existant, roadmap technique, choix technologiques, accompagnement à la décision. On éclaire avant d'écrire la première ligne de code.",
    skills: ['Audit', 'Roadmap', 'RGPD', 'Architecture', 'Stratégie'],
  },
  {
    id: 'formation',
    num: '06',
    cat: 'Formation',
    title: 'Formation & Transfert',
    short: 'Montée en compétences sur data, cloud et IA.',
    description:
      "Pour que vos équipes deviennent autonomes. Sessions de formation sur les technologies data, cloud et IA modernes. Pédagogie ancrée dans la pratique, supports sur mesure, transfert de compétences réel.",
    skills: ['Python', 'SQL', 'GenAI', 'Cloud', 'Pédagogie'],
  },
]

export const APPROACH = [
  {
    num: '01',
    title: 'Comprendre',
    text: 'Immersion dans votre métier, vos contraintes, vos ambitions. Pas de solution générique.',
  },
  {
    num: '02',
    title: 'Concevoir',
    text: 'Architecture, design produit, choix technologiques. Toujours en cohérence avec vos enjeux.',
  },
  {
    num: '03',
    title: 'Construire',
    text: 'Développement itératif, livraisons régulières, tests rigoureux. La qualité comme standard.',
  },
  {
    num: '04',
    title: 'Pérenniser',
    text: 'Documentation, formation, transfert. Pour que la solution vive après notre intervention.',
  },
]

// Mettez à jour les membres de l'équipe ici.
export const TEAM = [
  {
    initial: 'D',
    name: 'Diaby Diakité',
    role: 'Data Engineering & IA',
    bio: "Data engineer spécialisé GCP/BigQuery. Expérience en construction de datalakes et intégration de modèles de langage.",
    skills: ['Data Engineering', 'GCP / BigQuery', 'Intégration LLM', 'Data Visualisation', 'Cloud'],
  },
  {
    initial: 'S',
    name: 'Sidy Doucoure',
    role: 'Data & Machine Learning',
    bio: "Analyste data et ML. Conception de modèles prédictifs et gestion de bases de données.",
    skills: ['Analyse de données', 'Machine Learning', 'Gestion BDD', 'Modèles prédictifs', 'Rédaction'],
  },
  {
    initial: 'A',
    name: 'Ali Munir',
    role: 'Infrastructure & Sécurité',
    bio: "Expert infrastructure et cybersécurité. Architecture réseau sécurisée et conformité.",
    skills: ['Infrastructure Réseaux', 'Cybersécurité', 'Cloud', 'Architecture', 'Organisation'],
  },
]
