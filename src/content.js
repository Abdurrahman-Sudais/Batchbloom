// Site copy for Batchbloom. A proposed startup concept: fictional team, illustrative pricing.
const site = {
  "name": "Batchbloom",
  "tagline": "Understand what changed between baking batches.",
  "categories": [
    "AI",
    "Food Technology",
    "Manufacturing Analytics"
  ],
  "about": "Batchbloom helps commercial bakeries understand inconsistent production results. AI connects product images, ingredient records, and process measurements to highlight quality changes and support better-informed investigations.",
  "logoSvg": "<rect width=\"32\" height=\"32\" rx=\"9\" fill=\"#2a1a0e\"/><path d=\"M7 20c0-5 4-9 9-9s9 4 9 9v3H7z\" fill=\"#e9a65a\"/><path d=\"M11 15.5c1.2 1 1.2 3 0 4M16 14c1.2 1.2 1.2 3.8 0 5M21 15.5c1.2 1 1.2 3 0 4\" fill=\"none\" stroke=\"#2a1a0e\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><circle cx=\"24\" cy=\"9\" r=\"2.4\" fill=\"#ffd9a0\"/>",
  "words": {
    "records": "batch deviations",
    "decider": "bakery technologists and quality managers",
    "sources": "batch records, ingredient lots, process settings, product images and quality results",
    "model": "Vision models measure visible crust colour, shape and crumb features from standardised images; anomaly and association models compare batches made under similar conditions.",
    "store": "AWS IoT Core (future equipment readings)"
  },
  "hero": {
    "eyebrow": "Process intelligence for commercial baking",
    "before": "Understand what changed ",
    "em": "between baking batches",
    "after": ".",
    "points": [
      "Images, ingredient lots and process records together",
      "Batches compared with genuinely similar ones",
      "Associations shown as leads, never as proven causes"
    ],
    "floatTitle": "Loaf height −7%",
    "floatText": "4 batches share flour lot F-2231 + longer proof"
  },
  "problem": {
    "title": "Same recipe. Different bread. Nobody can say why.",
    "text": "Flour characteristics, ingredient temperatures, mixing, proofing and oven behaviour all shift from batch to batch. When loaves come out smaller, paler or with an uneven crumb, the records that might explain it are spread across production sheets, equipment logs and quality notes.",
    "fragments": [
      "Loaf height drops for a week, then recovers",
      "Crust colour drifts between shifts",
      "A new flour lot arrives with no one comparing results",
      "Quality notes on paper, process data in the oven log"
    ]
  },
  "solution": {
    "title": "Connect what you measured to what you made.",
    "text": "Batchbloom links standardised product images and quality results to the ingredient lots, recipe versions and process settings behind each batch, compares like with like, and highlights the variables most associated with a quality change.",
    "capabilities": [
      {
        "title": "Visual quality measures",
        "text": "Assesses visible crust colour, shape and crumb structure from standardised photographs.",
        "demoLabel": "Crust colour",
        "demoValue": "L* 52 → 58 (paler)"
      },
      {
        "title": "Process anomaly detection",
        "text": "Flags unusual mixing, proofing and oven profiles compared with relevant historical batches.",
        "demoLabel": "Proof time",
        "demoValue": "+11 min vs similar"
      },
      {
        "title": "Contributing factors",
        "text": "Highlights variables associated with a change, clearly labelled as association, and suggests controlled trials.",
        "demoLabel": "Associated",
        "demoValue": "Flour lot · proof profile"
      }
    ]
  },
  "stepsTitle": "From a quality complaint to a focused investigation.",
  "steps": [
    [
      "Record",
      "Log batches, ingredient lots, recipe versions and process settings, by import or entry."
    ],
    [
      "Capture",
      "Operators add standardised product images and measured quality results."
    ],
    [
      "Compare",
      "Batchbloom compares batches made under sufficiently similar conditions and flags deviations."
    ],
    [
      "Investigate",
      "Technologists review suggested investigations or trials; confirmed results feed back as new data."
    ]
  ],
  "stepsNote": "Batchbloom supports decisions. It does not control equipment or change process settings.",
  "audiencesTitle": "For bakeries producing at scale.",
  "audiences": [
    {
      "title": "Industrial bread manufacturers",
      "text": "Track consistency across lines, shifts and flour deliveries.",
      "outcome": "Faster root-cause work"
    },
    {
      "title": "Regional bakery chains",
      "text": "Keep central production consistent for every store.",
      "outcome": "More consistent loaves"
    },
    {
      "title": "Frozen-dough manufacturers",
      "text": "Connect dough processing with bake-off results downstream.",
      "outcome": "Fewer quality surprises"
    },
    {
      "title": "Contract bakeries",
      "text": "Show brand clients evidence-based quality investigations.",
      "outcome": "Evidence clients trust"
    }
  ],
  "publicSector": {
    "kicker": "Honest limits",
    "title": "What photographs and models can, and cannot, tell you.",
    "text": "Batchbloom is designed around the evidence a bakery actually has. Some quality questions need instruments, tasting panels or laboratory tests, and we say so.",
    "points": [
      "Reliable size measurement needs a calibrated camera or reference scale",
      "Texture, taste, moisture and food safety cannot be established from ordinary photographs",
      "Quality predictions need enough labelled data before they are trusted",
      "An association is a lead to investigate, not a proven cause"
    ]
  },
  "ai": {
    "title": "The model spots the pattern. Technologists establish the cause.",
    "intro": "A change in loaf height can have several causes at once. Batchbloom narrows the search; people confirm what is really going on.",
    "does": [
      "Measures visible colour, shape and crumb from standardised images",
      "Flags unusual mixing, proofing and oven profiles",
      "Highlights variables associated with a quality change",
      "Suggests controlled trials within approved process ranges"
    ],
    "never": [
      "Declares a confirmed root cause",
      "Changes recipes, setpoints or equipment",
      "Makes food-safety or batch-release decisions",
      "Claims taste or texture from a photograph"
    ]
  },
  "pricing": {
    "model": "Subscription per production site or line, with onboarding charges for data integration and camera calibration where needed.",
    "tiers": [
      {
        "name": "Line",
        "summary": "For one product family on one line.",
        "price": "$1,200",
        "unit": "/ line / month",
        "features": [
          "Batch data import",
          "Standardised image capture",
          "Visual quality measures",
          "Anomaly flags and notes"
        ],
        "cta": "Request a pilot"
      },
      {
        "name": "Site",
        "summary": "For a production site with several lines.",
        "price": "$3,400",
        "unit": "/ site / month",
        "features": [
          "Up to 4 lines",
          "Everything in Line",
          "Contributing-factor analysis",
          "Trial tracking",
          "Unlimited users"
        ],
        "cta": "Request a pilot",
        "featured": true
      },
      {
        "name": "Group",
        "summary": "For multi-site manufacturers.",
        "price": "Custom",
        "unit": "",
        "features": [
          "Multiple sites",
          "Equipment data integration",
          "Camera calibration support",
          "Cross-site reporting"
        ],
        "cta": "Talk to us"
      }
    ]
  },
  "architectureIntro": "How Batchbloom could run in production, starting with batch records and images and adding equipment readings later.",
  "architecture": [
    [
      "Store",
      "Amazon S3",
      "Product images and historical batch data."
    ],
    [
      "Connect",
      "AWS IoT Core",
      "Future equipment readings from mixers, provers and ovens."
    ],
    [
      "Model",
      "Amazon SageMaker",
      "Vision models for visible quality and process anomaly models."
    ],
    [
      "Record",
      "Amazon RDS for PostgreSQL",
      "Batches, ingredient lots, recipe versions, results and investigation notes."
    ],
    [
      "Summarise",
      "Amazon Bedrock",
      "Investigation summaries grounded in measured results."
    ],
    [
      "Govern",
      "AWS CloudTrail · AWS KMS",
      "Access logging and encryption per customer."
    ]
  ],
  "team": [
    {
      "name": "Bukola Fashanu",
      "role": "Founder/CEO",
      "initials": "BF",
      "bio": "Bakery technologist with experience in industrial bread production and quality.",
      "focus": [
        "Bakery technology",
        "Quality systems",
        "Customer partnerships"
      ]
    },
    {
      "name": "Nnamdi Okafor",
      "role": "Co-founder",
      "initials": "NO",
      "bio": "Process engineer focused on food manufacturing lines and data.",
      "focus": [
        "Process engineering",
        "Line integration",
        "Operations"
      ]
    },
    {
      "name": "Rahmat Yusuf",
      "role": "CTO",
      "initials": "RY",
      "bio": "Computer vision and ML engineer working on industrial inspection.",
      "focus": [
        "Computer vision",
        "Anomaly detection",
        "Platform"
      ]
    }
  ],
  "faq": [
    [
      "Do we need special cameras?",
      "Standardised images are needed for consistent colour and shape measures. Reliable size measurement needs a calibrated setup or reference scale, which can be part of onboarding."
    ],
    [
      "Will it tell us the cause of a problem?",
      "It highlights variables associated with a change and suggests what to investigate or trial. Technologists confirm causes."
    ],
    [
      "Can it control our ovens?",
      "No. Batchbloom starts as decision support. Automatic process control would need much more validation and equipment integration."
    ],
    [
      "Is Batchbloom a live product?",
      "Not yet. Batchbloom is a proposed startup concept. The team is fictional, pricing is illustrative and the prototype runs on fictional data in your browser."
    ],
    [
      "Does the AI make decisions?",
      "No. Batchbloom flags, ranks and explains. Bakery technologists and quality managers review the evidence and record every decision with a reason."
    ],
    [
      "How would our data be protected?",
      "In production, data would be encrypted, isolated per customer, access-controlled by role and never used to train models for other customers. Data-sharing terms are agreed before any pilot."
    ]
  ],
  "purpose": {
    "eyebrow": "Why Batchbloom exists",
    "manifesto": "Bakers know the same recipe never bakes quite the same twice. The difference hides in flour, temperature, time and heat. We want every bakery to see what changed, so good bread becomes reliable bread.",
    "purpose": "Help commercial bakeries understand inconsistent results and investigate them with evidence.",
    "why": "Inconsistent batches mean downgraded product, rework, waste and unhappy customers. The data to explain them often exists but sits in different places.",
    "stakesTitle": "Why consistency matters in food manufacturing.",
    "stats": [
      {
        "value": 1.7,
        "dec": 1,
        "suffix": "Mt",
        "label": "Estimated food waste from UK food and drink manufacturing each year.",
        "source": "WRAP, cited in Sustainable Energy & Fuels review",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8477656/"
      },
      {
        "value": 51,
        "suffix": "%",
        "label": "Share of that manufacturing food waste estimated to be avoidable.",
        "source": "WRAP, cited in Sustainable Energy & Fuels review",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8477656/"
      },
      {
        "value": 50,
        "suffix": "k t",
        "label": "Bakery materials in Australian manufacturing wasted or diverted to animal feed each year.",
        "source": "Bread and Bakery Sector Action Plan (NSW)",
        "url": "https://www.lovefoodhatewaste.nsw.gov.au/sites/default/files/2023-02/Bread-and-Bakery-Sector-Action-Plan_Full-Report-1.pdf"
      }
    ],
    "changeTitle": "From guesswork to focused investigations.",
    "before": [
      "Quality problems noticed at the end of the line",
      "Records split across sheets, logs and notes",
      "Every possible cause discussed at once",
      "Trials run without recording what was learned"
    ],
    "after": [
      "Deviations flagged against similar batches",
      "Images, lots and settings linked per batch",
      "A short list of associated variables to check",
      "Trial results captured as new evidence"
    ],
    "principlesTitle": "What we believe about bakery data.",
    "principles": [
      [
        "Association is not cause",
        "We say “associated with” until a trial says more."
      ],
      [
        "Compare like with like",
        "Batches are compared only with genuinely similar ones."
      ],
      [
        "Technologists decide",
        "Investigations and trials are chosen by people."
      ],
      [
        "Know what photos can’t show",
        "Taste, texture and safety need other evidence."
      ],
      [
        "Start narrow",
        "One product family, one line, done properly."
      ],
      [
        "Every trial teaches",
        "Confirmed results improve the next comparison."
      ]
    ],
    "letterTitle": "Why we are building Batchbloom.",
    "letter": [
      "Bukola has stood at the end of a bread line looking at loaves that were fine yesterday and smaller today, with a production sheet in one hand and an oven log on another screen.",
      "Nnamdi has worked on food manufacturing lines and knows how much useful data never gets connected. Rahmat builds vision systems for inspection and is careful about what a camera can and cannot measure.",
      "Batchbloom brings those records together and shows bakers what changed, while keeping causes, trials and decisions with the technologists who understand the bread."
    ],
    "visionTitle": "Where Batchbloom is going.",
    "visionIntro": "Decision support first, validated step by step.",
    "vision": [
      {
        "stage": "Now",
        "title": "Concept and prototype",
        "text": "An interactive prototype on fictional batch data, and conversations with bakeries."
      },
      {
        "stage": "Next",
        "title": "One product, one line",
        "text": "Batch import, standardised images, visual measures, comparisons and anomaly flags for pan bread."
      },
      {
        "stage": "Then",
        "title": "Quality prediction",
        "text": "Predictions of selected outcomes once enough labelled data exists."
      },
      {
        "stage": "Later",
        "title": "Equipment integration",
        "text": "Live readings from mixers, provers and ovens, with any control far behind validation."
      }
    ],
    "statsNote": "Figures are published estimates from the sources linked; they describe the wider problem, not results from this product."
  },
  "app": {
    "title": "Batch investigation review",
    "subtitle": "Deviations in fictional 800g pan bread batches on Line 2, compared with similar historical batches.",
    "itemNoun": "batch deviation",
    "itemNounPlural": "batch deviations",
    "groupLabel": "shift",
    "queueTitle": "Deviation queue",
    "humanNote": "Flags show associations, not causes. Technologists decide what to investigate.",
    "decisions": {
      "confirm": "Open investigation",
      "dismiss": "Normal variation",
      "escalate": "Refer to quality manager"
    },
    "roles": [
      {
        "id": "lead",
        "label": "Quality Manager",
        "can": [
          "view",
          "note",
          "assign",
          "decide",
          "escalate",
          "export"
        ]
      },
      {
        "id": "reviewer",
        "label": "Bakery Technologist",
        "can": [
          "view",
          "note",
          "assign",
          "decide"
        ]
      },
      {
        "id": "analyst",
        "label": "Line Operator",
        "can": [
          "view",
          "note",
          "escalate"
        ]
      },
      {
        "id": "auditor",
        "label": "Site Manager",
        "can": [
          "view",
          "export"
        ]
      }
    ],
    "examples": [
      "Which batch deviations need review first?",
      "Summarise the review status",
      "Show Early shift",
      "Explain BCH-2204"
    ],
    "refuse": "\\b(safe to (eat|sell)|food safety|release (the|this) batch|recall|change (the )?(oven|recipe|setpoint|temperature)|set the oven|root cause is|confirmed cause)",
    "refuseText": "Batchbloom can show associations in the data, but food-safety, batch-release, recall and process-change decisions belong to qualified quality staff, and causes are confirmed by trials.",
    "refuseExamples": [
      "Is batch BCH-2201 safe to eat?",
      "Change the oven temperature to fix it",
      "Should we recall Tuesday’s loaves?"
    ]
  },
  "slug": "batchbloom",
  "url": "https://www.batchbloom.com",
  "email": "hello@batchbloom.com",
  "safeguards": [
    [
      "People decide",
      "Every batch deviation is confirmed, dismissed or escalated by bakery technologists and quality managers, never by the model."
    ],
    [
      "Evidence first",
      "Each flag links to the batch records, ingredient lots, process settings, product images and quality results behind it, so a reviewer can check the reasoning before acting."
    ],
    [
      "Confidence shown",
      "Scores come with a confidence level and the data gaps that lower it, so weak signals are not mistaken for facts."
    ],
    [
      "Role-based access",
      "Permissions are set per role: who can view, comment, assign, decide, escalate or export."
    ],
    [
      "Complete audit trail",
      "Assignments, notes and decisions are time-stamped with the person and reason, and can be exported."
    ],
    [
      "Your data stays yours",
      "Customer data is isolated per tenant, encrypted at rest and in transit, and never used to train models for other customers."
    ]
  ],
  "early": {
    "title": "Pilot Batchbloom with your own team.",
    "text": "We are looking for a small number of early partners to shape Batchbloom. A pilot starts with a sample of your historical data and a fixed review period, so you can judge the results before committing.",
    "steps": [
      "Tell us about your team and the records you work with.",
      "A founder replies personally to arrange a short call.",
      "We agree a pilot scope, data-sharing terms and how success will be measured."
    ]
  }
};
export default site;
