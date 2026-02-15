export interface Module {
  id: string
  title: string
  description: string
  content: string[]
}

export interface Category {
  id: string
  label: string
  icon: string
  emoji: string
  modules: Module[]
}

export const categories: Category[] = [
  {
    id: "econometrie",
    label: "Econometrie",
    icon: "TrendingUp",
    emoji: "📈",
    modules: [
      {
        id: "intro-econometrie",
        title: "Introduction a l'Econometrie",
        description: "Les fondamentaux de l'analyse econometrique",
        content: [
          "L'econometrie est la branche de l'economie qui utilise des methodes statistiques et mathematiques pour analyser des donnees economiques. Elle permet de tester des hypotheses theoriques, d'estimer des relations entre variables et de faire des previsions quantitatives.",
          "Le modele de regression lineaire simple constitue le point de depart de toute analyse econometrique. Il s'ecrit sous la forme Y = a + bX + e, ou Y represente la variable dependante, X la variable explicative, a l'ordonnee a l'origine, b le coefficient de pente, et e le terme d'erreur aleatoire.",
          "Les hypotheses classiques du theoreme de Gauss-Markov garantissent que l'estimateur des Moindres Carres Ordinaires (MCO) est le meilleur estimateur lineaire non biaise (BLUE). Ces hypotheses incluent : la linearite du modele, l'exogeneite stricte des regresseurs, l'homoscedasticite des erreurs, l'absence d'autocorrelation, et la normalite des residus.",
          "Les tests fondamentaux en econometrie comprennent le test de Student pour la significativite individuelle des coefficients, le test de Fisher pour la significativite globale du modele, le coefficient de determination R-carre pour mesurer la qualite de l'ajustement, ainsi que l'analyse approfondie des residus pour verifier les hypotheses du modele.",
          "En pratique, l'econometricien doit egalement se soucier de problemes tels que la multicolinearite (correlation entre variables explicatives), l'endogeneite (correlation entre regresseurs et terme d'erreur), et la specification du modele (choix des variables, forme fonctionnelle).",
        ],
      },
      {
        id: "donnees-panels",
        title: "Donnees de Panels",
        description: "Modeles a effets fixes et aleatoires",
        content: [
          "Les donnees de panel combinent une dimension individuelle (i = 1, ..., N) et une dimension temporelle (t = 1, ..., T). On observe ainsi N individus (entreprises, pays, menages) sur T periodes, ce qui produit N x T observations au total.",
          "Le modele a effets fixes suppose que l'heterogeneite individuelle non observee est correlee avec les variables explicatives. L'estimateur Within (ou intra-individuel) elimine ces effets fixes par une transformation de demeaning : on soustrait a chaque variable sa moyenne individuelle.",
          "Le modele a effets aleatoires suppose au contraire que l'heterogeneite individuelle est non correlee avec les regresseurs. L'estimateur des Moindres Carres Generalises (MCG) est alors plus efficace que l'estimateur Within.",
          "Le test de Hausman permet de choisir entre effets fixes et effets aleatoires. Sous l'hypothese nulle (effets aleatoires preferes), les deux estimateurs sont convergents mais seul le MCG est efficient. Sous l'hypothese alternative, seul l'estimateur Within reste convergent.",
          "Applications courantes : etude de la croissance economique entre pays, analyse de la productivite des entreprises, evaluation de l'impact de politiques publiques sur les territoires.",
        ],
      },
      {
        id: "econometrie-spatiale",
        title: "Econometrie Spatiale",
        description: "Analyse des dependances geographiques",
        content: [
          "L'econometrie spatiale etudie les interactions et dependances entre unites geographiques. La premiere loi de la geographie de Tobler (1970) postule que 'tout est relie a tout, mais les choses proches sont plus reliees que les choses lointaines'.",
          "La matrice de poids spatiaux W definit formellement la structure de voisinage entre les observations. Elle peut etre construite selon plusieurs criteres : contiguite physique (reine ou tour), distance euclidienne, ou k plus proches voisins. Elle est generalement normalisee en ligne.",
          "Le modele SAR (Spatial AutoRegressive) s'ecrit Y = rho * W * Y + X * beta + e, ou le parametre rho capture l'effet de retombee spatiale directe. Le modele SEM (Spatial Error Model) s'ecrit Y = X * beta + u, avec u = lambda * W * u + e, capturant la dependance spatiale dans les erreurs.",
          "Les tests de Moran (statistique I de Moran) permettent de detecter la presence d'autocorrelation spatiale dans les residus. Les tests LM (Lagrange Multiplier) developpes par Anselin permettent de choisir entre les specifications SAR et SEM.",
        ],
      },
    ],
  },
  {
    id: "data",
    label: "Data Science",
    icon: "Database",
    emoji: "💾",
    modules: [
      {
        id: "data-analyst",
        title: "Data Analyst & Storytelling",
        description: "Raconter des histoires avec les donnees",
        content: [
          "Le Data Analyst transforme des donnees brutes en insights actionnables pour l'entreprise. Le Data Storytelling est l'art de communiquer ces insights de maniere engageante, persuasive et memorisable pour les decideurs.",
          "Le processus analytique se decompose en quatre etapes : (1) Collecte et nettoyage des donnees via SQL et Python/Pandas, (2) Analyse exploratoire avec statistiques descriptives et correlations, (3) Visualisation au travers de tableaux de bord et graphiques, (4) Communication claire des resultats et recommandations.",
          "Outils cles du metier : SQL pour l'extraction de donnees, Python ou R pour l'analyse statistique, Power BI ou Tableau pour la creation de dashboards interactifs, et Excel pour les analyses rapides.",
          "Principes du Storytelling efficace : definir precisement son audience, structurer le recit (contexte, tension, resolution), choisir les bons types de graphiques (barres pour les comparaisons, lignes pour les tendances temporelles, nuages de points pour les correlations), et toujours conclure par des recommandations claires et actionnables.",
        ],
      },
      {
        id: "data-science-ml",
        title: "Machine Learning",
        description: "Algorithmes d'apprentissage automatique",
        content: [
          "Le Machine Learning est une branche de l'intelligence artificielle qui permet aux systemes informatiques d'apprendre automatiquement a partir de donnees, sans etre explicitement programmes pour chaque tache.",
          "L'apprentissage supervise dispose de donnees etiquetees. Pour la regression (prediction de valeurs continues), on utilise la regression lineaire, Ridge, Lasso, ou les Random Forests. Pour la classification (prediction de categories), on emploie la regression logistique, les SVM, les arbres de decision, Random Forest et XGBoost.",
          "L'apprentissage non supervise ne dispose d'aucune etiquette. Le clustering regroupe les observations similaires (K-Means, DBSCAN, clustering hierarchique). La reduction de dimension simplifie les donnees tout en preservant l'information essentielle (ACP, t-SNE, UMAP).",
          "Le pipeline ML standard comprend : (1) Feature engineering et preparation des donnees, (2) Separation train/test, (3) Entrainement du modele, (4) Validation croisee, (5) Optimisation des hyperparametres via Grid Search ou Random Search, (6) Evaluation finale avec les metriques appropriees (accuracy, precision, recall, F1-score, AUC-ROC).",
          "Le Deep Learning utilise des reseaux de neurones profonds : CNN pour le traitement d'images, RNN/LSTM pour les donnees sequentielles, et les Transformers pour le traitement du langage naturel. Frameworks principaux : TensorFlow, PyTorch et scikit-learn.",
        ],
      },
      {
        id: "data-engineer",
        title: "Data Engineering",
        description: "Architecture et pipelines de donnees",
        content: [
          "Le Data Engineer concoit et maintient l'infrastructure de donnees d'une organisation. Son role est de rendre les donnees fiables, accessibles et exploitables par les equipes d'analyse et de data science.",
          "Architectures modernes : Data Warehouse (Snowflake, BigQuery, Redshift), Data Lake (S3, ADLS, GCS), Lakehouse (Delta Lake, Apache Iceberg), et Data Mesh pour les organisations decentralisees avec des domaines metier autonomes.",
          "ETL vs ELT : Extract-Transform-Load est l'approche classique, tandis que Extract-Load-Transform est l'approche moderne privilegiant la transformation directement dans le warehouse. Outils : Apache Spark, dbt, Airflow, Dagster.",
          "Bonnes pratiques : versionner les pipelines avec Git, documenter les schemas de donnees, monitorer les jobs en continu, implementer des alertes sur les anomalies, et suivre le principe DRY (Don't Repeat Yourself).",
        ],
      },
    ],
  },
  {
    id: "maths",
    label: "Mathematiques",
    icon: "Calculator",
    emoji: "🧮",
    modules: [
      {
        id: "algebre-lineaire",
        title: "Algebre Lineaire",
        description: "Espaces vectoriels, matrices et transformations",
        content: [
          "L'algebre lineaire est le socle mathematique de la data science et du machine learning. Elle etudie les espaces vectoriels, les applications lineaires, et les proprietes des matrices.",
          "Concepts fondamentaux : vecteurs et operations vectorielles, matrices (produit, inverse, transposee), determinants, rang d'une matrice, valeurs propres et vecteurs propres. La decomposition en valeurs singulieres (SVD) est essentielle en reduction de dimension.",
          "Applications pratiques : resolution de systemes d'equations lineaires par la methode de Gauss, estimation par moindres carres en regression, Analyse en Composantes Principales (ACP), et calcul dans les couches de reseaux de neurones.",
        ],
      },
      {
        id: "analyse",
        title: "Analyse Mathematique",
        description: "Calcul differentiel, integral et optimisation",
        content: [
          "L'analyse mathematique fournit les outils fondamentaux de l'optimisation : derivees partielles, gradient, matrice hessienne, integrales multiples et series de Taylor pour l'approximation locale de fonctions.",
          "Optimisation : les conditions du premier ordre (gradient nul) identifient les points critiques. Les conditions du second ordre (hessien defini positif ou negatif) determinent leur nature. Methodes numeriques : descente de gradient, algorithme de Newton-Raphson.",
          "Applications en economie : maximisation de l'utilite du consommateur, minimisation des couts de production, determination de l'equilibre de marche. En ML : minimisation de la fonction de cout, algorithme de backpropagation dans les reseaux de neurones.",
        ],
      },
    ],
  },
  {
    id: "stats",
    label: "Statistiques",
    icon: "PieChart",
    emoji: "📊",
    modules: [
      {
        id: "stats-descriptives",
        title: "Statistiques Descriptives",
        description: "Mesures de tendance centrale et de dispersion",
        content: [
          "Les statistiques descriptives permettent de resumer et de presenter synthetiquement un jeu de donnees. Mesures de tendance centrale : moyenne arithmetique, mediane, mode. Mesures de dispersion : variance, ecart-type, etendue, ecart interquartile.",
          "Visualisations essentielles : histogrammes pour les distributions, box plots pour la dispersion et les outliers, scatter plots pour les relations bivariees, heatmaps pour les matrices de correlation.",
          "La distribution normale (ou gaussienne) occupe une place centrale en statistique grace au theoreme central limite : la moyenne d'un grand nombre de variables aleatoires independantes suit approximativement une loi normale, quelle que soit la distribution des variables d'origine.",
        ],
      },
      {
        id: "stats-inferentielles",
        title: "Statistiques Inferentielles",
        description: "Tests d'hypotheses et intervalles de confiance",
        content: [
          "L'inference statistique permet de tirer des conclusions sur une population entiere a partir d'un echantillon representatif. C'est le pont entre les donnees observees et les lois generales.",
          "Tests parametriques courants : test-t de Student pour la comparaison de deux moyennes, ANOVA pour la comparaison de plusieurs groupes, test du chi-deux pour l'independance entre variables qualitatives.",
          "Intervalles de confiance : l'estimation par intervalle fournit une fourchette de valeurs plausibles pour un parametre inconnu (moyenne, proportion). Le niveau de confiance standard est de 95%, ce qui signifie que 95% des intervalles construits de cette maniere contiennent la vraie valeur du parametre.",
        ],
      },
    ],
  },
]

export interface FunCard {
  id: string
  title: string
  description: string
  category: string
  link: string
  emoji: string
}

export const funCards: FunCard[] = [
  {
    id: "1",
    title: "Quand tu comprends enfin la p-value",
    description: "Le moment de revelation statistique en video",
    category: "Humour Data",
    link: "https://youtube.com",
    emoji: "🧠",
  },
  {
    id: "2",
    title: "Les Fails les Plus Droles du Web",
    description: "Compilation des meilleurs moments",
    category: "Compilation",
    link: "https://youtube.com",
    emoji: "😂",
  },
  {
    id: "3",
    title: "L'Univers en 10 minutes",
    description: "Un voyage a travers le cosmos",
    category: "Science",
    link: "https://youtube.com",
    emoji: "🌌",
  },
  {
    id: "4",
    title: "Excel vs Python : le combat final",
    description: "Qui gagnera la bataille des donnees ?",
    category: "Tech Humour",
    link: "https://youtube.com",
    emoji: "🔥",
  },
  {
    id: "5",
    title: "Un prof de stats raconte des blagues",
    description: "L'humour gaussien a son meilleur",
    category: "Humour",
    link: "https://youtube.com",
    emoji: "✨",
  },
  {
    id: "6",
    title: "Court-metrage : Algorithmes & Amour",
    description: "Quand le machine learning rencontre les sentiments",
    category: "Film",
    link: "https://youtube.com",
    emoji: "💕",
  },
  {
    id: "7",
    title: "Top 10 des inventions accidentelles",
    description: "La serendipite au service de la science",
    category: "Decouverte",
    link: "https://youtube.com",
    emoji: "💡",
  },
  {
    id: "8",
    title: "Le machine learning explique a mamie",
    description: "Vulgarisation avec humour et simplicite",
    category: "Vulgarisation",
    link: "https://youtube.com",
    emoji: "🤖",
  },
]

export const searchSuggestions = [
  "Econometrie des panels",
  "Machine Learning",
  "Data Science",
  "Statistiques descriptives",
  "Algebre lineaire",
  "Analyse mathematique",
  "Regression lineaire",
  "Data Engineering",
]
