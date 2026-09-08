/* Every project lives here as data. The page's cards and detail
   modal are each written ONCE and generated from this array, so
   adding an 8th project later is just adding one object below. */

export type Project = {
  id: string
  emoji: string
  tag: string
  title: string
  blurb: string
  tools: string[]
  goal: string
  contributions: string[]
  skills: string[]
  images: string[]
  download?: { href: string; label: string }
}

export const projects: Project[] = [
  {
    id: 'excel',
    emoji: '📊',
    tag: 'Excel · Data Analysis',
    title: 'Colorado State Parks Visitation',
    blurb:
      'A multi-sheet Excel workbook analyzing visitation across 42 Colorado state parks from 2018 to 2023, with pivot tables, formulas, and a full dashboard.',
    tools: ['Excel Tables', 'Pivot Tables', 'VLOOKUP', 'INDEX/MATCH', 'Charts'],
    goal:
      'Analyze Colorado state park visitation from 2018 to 2023 to uncover trends, measure the impact of COVID-19 on outdoor recreation, and show fluency with Excel Tables, pivot tables, advanced formulas, and data visualization.',
    contributions: [
      'Built a structured raw data table for 42 parks with visitation, acreage, park type, region, camping capacity, and water access',
      'Created three pivot-style summary tables with SUMIFS: regional totals, top 10 parks, and year-over-year growth',
      'Designed a dashboard with four charts: statewide trend, regional comparison, park type distribution, and top 5 parks',
      'Built a Formulas and Analysis sheet with KPI cards, calculated metrics, and a VLOOKUP lookup tool',
    ],
    skills: [
      'Advanced Excel: SUMIFS, INDEX/MATCH, RANK, nested IF, VLOOKUP, conditional formatting',
      'Data storytelling: finding the COVID-era visitation spike in the raw numbers',
      'Dashboard design: choosing the right chart for each question',
      'Professional formatting and workbook organization',
    ],
    images: ['/projects/excel/dashboard.png', '/projects/excel/pivot.png'],
    download: {
      href: '/projects/excel/colorado-parks-workbook.xlsx',
      label: 'Download Excel workbook',
    },
  },
  {
    id: 'powerbi',
    emoji: '🛡️',
    tag: 'Power BI · Dashboard',
    title: 'Global Data Breaches & Cybersecurity',
    blurb:
      'A three-page Power BI report on the world’s biggest data breaches, built with a stakeholder-to-task-to-business-question method for three distinct stakeholders.',
    tools: ['Power BI', 'DAX', 'Data Modeling', 'Power Query'],
    goal:
      'Analyze the world’s biggest data breaches to give actionable insight to three stakeholders at a cybersecurity firm: a CISO assessing the threat landscape, a VP of Sales targeting clients, and a Compliance Officer monitoring data-sensitivity risk.',
    contributions: [
      'Mapped stakeholders, tasks, and business questions before building any visuals',
      'Cleaned and transformed raw CSV data in Power Query: fixed data types, removed metadata rows, added calculated columns',
      'Built custom DAX measures for most-breached sector, fastest-growing sector, most-exposed data type, and high-sensitivity breach counts',
      'Designed three interactive pages with KPI cards, line, bar, scatter, treemap, donut, and heatmap matrices',
      'Added cross-filtering slicers for year, sector, method, and data sensitivity across all pages',
    ],
    skills: [
      'Power BI: DAX (SUMMARIZE, TOPN, ADDCOLUMNS, SWITCH), Power Query, conditional formatting',
      'Stakeholder-driven design: reports that answer specific questions for specific people',
      'Data cleaning: messy CSVs with description rows, text-as-numbers, inconsistent formats',
      'Analytical thinking: defining and defending a high-sensitivity threshold',
    ],
    images: [
      '/projects/powerbi/page1.png',
      '/projects/powerbi/page2.png',
      '/projects/powerbi/page3.png',
    ],
    download: { href: '/projects/powerbi/report.pdf', label: 'Download project PDF' },
  },
  {
    id: 'sql',
    emoji: '🏥',
    tag: 'SQL · Database Analysis',
    title: 'Hospital Database Analysis',
    blurb:
      'Advanced SQL across a relational hospital database to surface physician workload trends, patient risk classifications, and specialty performance comparisons.',
    tools: ['SQL', 'JOINs', 'Subqueries', 'CASE'],
    goal:
      'Write advanced SQL against a hospital database to answer clinical questions: which doctors are overloaded relative to their specialty peers, how workload varies by month, and which patients to flag for extra monitoring based on age, allergies, and admission frequency.',
    contributions: [
      'Engineered three advanced queries joining doctors, patients, and admissions to extract workload trends and specialty comparisons',
      'Built a correlated subquery comparing each doctor’s patient count to their specialty average to flag above-average workload',
      'Used strftime to extract month from admission dates and group workload by period',
      'Designed a patient risk classification with nested CASE statements across age, allergy status, and admission frequency',
    ],
    skills: [
      'Advanced SQL: multi-table JOINs, correlated subqueries, HAVING, CASE',
      'Translating clinical questions into structured queries',
      'Risk classification logic from raw data',
      'Query optimization and readability',
    ],
    images: ['/projects/sql/query.png', '/projects/sql/results.png'],
    download: {
      href: '/projects/sql/hospital-sql-analysis.zip',
      label: 'Download full project',
    },
  },
  {
    id: 'bigdata',
    emoji: '🤖',
    tag: 'Big Data · Sentiment Analysis',
    title: 'AI Relationships on Reddit',
    blurb:
      'A big-data study of how sentiment toward AI relationships has shifted across Reddit, using VADER scoring, BigQuery SQL, and Tableau.',
    tools: ['BigQuery SQL', 'Tableau', 'VADER', 'NLP'],
    goal:
      'Investigate how sentiment toward relationships with AI has changed over time by analyzing Reddit posts across subreddits like ChatGPT, Replika, and Grok with VADER sentiment analysis, BigQuery SQL, and Tableau.',
    contributions: [
      'Queried large Reddit datasets in BigQuery with REGEXP_CONTAINS to filter AI-related subreddits',
      'Applied VADER sentiment scoring across thousands of posts, comparing subreddits and time periods',
      'Found that sentiment dropped sharply in 2023 when Replika removed romantic features, sparking backlash',
      'Built Tableau views for sentiment trends, subreddit comparisons, and upvote-ratio distributions',
    ],
    skills: [
      'Big-data querying with Google BigQuery SQL',
      'NLP: VADER sentiment analysis at scale',
      'Tableau dashboards for communicating NLP findings',
      'Research method: big questions and sub-questions validated with data',
    ],
    images: ['/projects/bigdata/overview.png'],
    download: { href: '/projects/bigdata/ai-sentiment.zip', label: 'Download full project' },
  },
  {
    id: 'nps',
    emoji: '🏞️',
    tag: 'Python · Elasticsearch',
    title: 'National Parks Search Engine',
    blurb:
      'A full-text search engine for National Park Service content, built from scratch with Python web scraping and Elasticsearch.',
    tools: ['Python', 'Web Scraping', 'Elasticsearch', 'NLP'],
    goal:
      'Build an end-to-end information retrieval system: scrape NPS.gov, design a custom text analyzer, ingest documents into Elasticsearch, and run advanced queries including match, phrase, wildcard, fuzzy, and boolean.',
    contributions: [
      'Built a Python scraper for park descriptions, activities, states, and metadata from the NPS website',
      'Designed a custom Elasticsearch analyzer with stemming and stop-word filtering',
      'Ingested documents into an Elasticsearch index with proper field mappings',
      'Wrote advanced queries: match, match_phrase, wildcard, fuzzy, and compound boolean',
    ],
    skills: [
      'Python web scraping: requests, HTML parsing, extraction pipelines',
      'Elasticsearch: index design, custom analyzers, query DSL',
      'Information retrieval: stemming, tokenization, relevance scoring',
      'End-to-end pipeline: scrape, transform, index, query',
    ],
    images: ['/projects/nps/analyzer.png', '/projects/nps/query.png'],
    download: {
      href: '/projects/nps/nps-web-scraping.zip',
      label: 'Download full project',
    },
  },
  {
    id: 'basketball',
    emoji: '🏀',
    tag: 'Data Journey · Stakeholder Research',
    title: 'CU Women’s Basketball Data Journey',
    blurb:
      'Stakeholder interviews with five CU Women’s Basketball staff, mapped into 30+ data touchpoints across scheduling, budgeting, and recruitment.',
    tools: ['Interviews', 'Miro', 'Data Mapping', 'Stakeholder Analysis'],
    goal:
      'Map the information ecosystem of CU Women’s Basketball through stakeholder interviews and multi-layered data journey maps, showing how data flows across scheduling, budgeting, and recruitment, and where friction lives.',
    contributions: [
      'Interviewed five staff including the Head Coach, Director of Player Development, and Strength and Conditioning Coach',
      'Built multi-layered data journey maps in Miro capturing 30+ touchpoints across micro, meso, and macro levels',
      'Identified friction points in travel logistics, legal contracts, and athlete academic scheduling',
      'Presented findings and recommendations to stakeholders',
    ],
    skills: [
      'Stakeholder interviewing: preparing, conducting, extracting insight',
      'Data journey mapping across organizational layers',
      'Systems thinking: how data moves between departments',
      'Communicating technical findings to non-technical stakeholders',
    ],
    images: ['/projects/basketball/board.png'],
    download: {
      href: '/projects/basketball/data-journey.pptx',
      label: 'Download the deck',
    },
  },
  {
    id: 'survey',
    emoji: '📋',
    tag: 'Tableau · Survey Research',
    title: 'AI in Media, Student Perception Survey',
    blurb:
      'A team survey of CU Boulder students on AI-generated media, designed, distributed, and analyzed, with findings visualized in Tableau.',
    tools: ['Tableau', 'Survey Design', 'Data Analysis', 'Presentation'],
    goal:
      'Design and run a survey on CU Boulder students’ perceptions of AI in media: whether they feel positively or negatively about AI-generated content, and whether they think they can tell AI from human-made content on social media.',
    contributions: [
      'Worked with a six-person team to design questions, methodology, and an analysis plan',
      'Built Tableau dashboards to visualize responses and surface patterns in attitudes',
      'Found a gap between students’ confidence in detecting AI content and their actual ability',
      'Co-presented findings with data-backed recommendations',
    ],
    skills: [
      'Survey design: question wording, bias avoidance, analysis planning',
      'Tableau: interactive dashboards from survey data',
      'Team collaboration across six members',
      'Research presentation with visual support',
    ],
    images: ['/projects/survey/analysis.png'],
    download: {
      href: '/projects/survey/ai-media-survey.zip',
      label: 'Download full project',
    },
  },
]
