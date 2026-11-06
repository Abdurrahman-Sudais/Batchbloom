// Fictional sample data for the Batchbloom prototype. Any resemblance to real records is coincidental.
export const seed = {
  "team": [
    {
      "name": "Grace Ekwueme",
      "role": "Quality Manager"
    },
    {
      "name": "Tom Hartley",
      "role": "Bakery Technologist"
    },
    {
      "name": "Amaka Nnaji",
      "role": "Bakery Technologist"
    },
    {
      "name": "Jide Salami",
      "role": "Line Operator"
    },
    {
      "name": "Helen Price",
      "role": "Site Manager"
    }
  ],
  "items": [
    {
      "id": "BCH-2201",
      "title": "Reduced loaf height — 4 batches",
      "subtitle": "Pan bread 800g · Tue–Wed",
      "group": "Early shift",
      "metrics": [
        [
          "Height (median)",
          "118mm"
        ],
        [
          "Similar batches",
          "127mm"
        ],
        [
          "Change",
          "−7%"
        ],
        [
          "Batches",
          "2201, 2203, 2206, 2209"
        ]
      ],
      "flags": [
        {
          "label": "Quality deviation",
          "severity": "high",
          "confidence": 0.83,
          "explanation": "All four short batches used flour lot F-2231 and a proofing profile 11 minutes longer than similar batches. Both are associated with the change; neither is confirmed as the cause.",
          "evidence": [
            [
              "Flour lot",
              "F-2231 in 4 of 4",
              "Ingredient lot records"
            ],
            [
              "Proof time",
              "+11 min vs similar",
              "Prover log"
            ],
            [
              "Loaf height",
              "118mm vs 127mm",
              "Calibrated image measures"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "BCH-2202",
      "title": "Paler crust colour",
      "subtitle": "Late shift · 3 batches",
      "group": "Late shift",
      "metrics": [
        [
          "Crust L*",
          "58"
        ],
        [
          "Similar batches",
          "52"
        ],
        [
          "Oven zone 3",
          "−8°C avg"
        ],
        [
          "Images",
          "36"
        ]
      ],
      "flags": [
        {
          "label": "Visual deviation",
          "severity": "medium",
          "confidence": 0.77,
          "explanation": "Crust is paler than similar batches. Oven zone 3 ran about 8°C below its usual profile during these bakes.",
          "evidence": [
            [
              "Crust colour",
              "L* 58 vs 52",
              "Image measures (standard booth)"
            ],
            [
              "Oven zone 3",
              "−8°C vs profile",
              "Oven log"
            ],
            [
              "Bake time",
              "Unchanged",
              "Oven log"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "BCH-2203",
      "title": "Proofing profile anomaly",
      "subtitle": "Prover 2 humidity drift",
      "group": "Early shift",
      "metrics": [
        [
          "Humidity",
          "71% RH"
        ],
        [
          "Typical",
          "82% RH"
        ],
        [
          "Duration",
          "3 days"
        ],
        [
          "Batches affected",
          "7"
        ]
      ],
      "flags": [
        {
          "label": "Process anomaly",
          "severity": "medium",
          "confidence": 0.8,
          "explanation": "Prover 2 humidity has run below its usual range for three days. Crust skinning visible in images may be related.",
          "evidence": [
            [
              "Prover humidity",
              "71% vs 82% RH",
              "Prover log"
            ],
            [
              "Surface texture score",
              "Up 0.4",
              "Image measures"
            ],
            [
              "Maintenance",
              "No entry",
              "Maintenance log"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "BCH-2204",
      "title": "Uneven crumb structure",
      "subtitle": "Night shift · 2 batches",
      "group": "Night shift",
      "metrics": [
        [
          "Crumb uniformity",
          "0.62"
        ],
        [
          "Similar batches",
          "0.78"
        ],
        [
          "Mix time",
          "+90s"
        ],
        [
          "Dough temp",
          "28.9°C"
        ]
      ],
      "flags": [
        {
          "label": "Visual deviation",
          "severity": "medium",
          "confidence": 0.66,
          "explanation": "Sliced images show larger, uneven cells. Both batches had longer mixing and a dough temperature above the usual range. Crumb texture itself cannot be judged from photos alone.",
          "evidence": [
            [
              "Crumb uniformity",
              "0.62 vs 0.78",
              "Slice image measures"
            ],
            [
              "Mix time",
              "+90s",
              "Mixer log"
            ],
            [
              "Dough temperature",
              "28.9°C (usual 26–27.5)",
              "Operator entry"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "BCH-2205",
      "title": "Image calibration warning",
      "subtitle": "Camera booth reference card missing",
      "group": "Late shift",
      "metrics": [
        [
          "Images affected",
          "24"
        ],
        [
          "Reference card",
          "Not detected"
        ],
        [
          "Measures",
          "Size disabled"
        ],
        [
          "Since",
          "Thu 14:00"
        ]
      ],
      "flags": [
        {
          "label": "Data quality",
          "severity": "low",
          "confidence": 0.92,
          "explanation": "The reference scale was not visible in 24 images, so size measures were withheld. Colour measures may also be affected by lighting.",
          "evidence": [
            [
              "Reference card",
              "Not detected",
              "Image QC"
            ],
            [
              "Lighting",
              "White balance shift",
              "Image QC"
            ],
            [
              "Batches",
              "2210–2212",
              "Batch records"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "BCH-2206",
      "title": "Weight variation increased",
      "subtitle": "Divider settings",
      "group": "Night shift",
      "metrics": [
        [
          "Weight SD",
          "9.4g"
        ],
        [
          "Typical SD",
          "5.1g"
        ],
        [
          "Underweight rate",
          "1.8%"
        ],
        [
          "Divider",
          "D-1"
        ]
      ],
      "flags": [
        {
          "label": "Process anomaly",
          "severity": "high",
          "confidence": 0.74,
          "explanation": "Dough piece weight variation nearly doubled on divider D-1. This is associated with uneven loaf shape in images.",
          "evidence": [
            [
              "Weight SD",
              "9.4g vs 5.1g",
              "Checkweigher log"
            ],
            [
              "Shape score",
              "−0.3",
              "Image measures"
            ],
            [
              "Divider service",
              "6 weeks ago",
              "Maintenance log"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "BCH-2207",
      "title": "New flour lot — first batches",
      "subtitle": "Lot F-2240 · supplier B",
      "group": "Early shift",
      "metrics": [
        [
          "Batches so far",
          "3"
        ],
        [
          "Height",
          "Within range"
        ],
        [
          "Water absorption",
          "+1.5% (CoA)"
        ],
        [
          "Comparison",
          "Too few batches"
        ]
      ],
      "flags": [
        {
          "label": "Watch item",
          "severity": "low",
          "confidence": 0.51,
          "explanation": "The new lot’s certificate shows higher water absorption. Early batches look normal, but there are too few for a reliable comparison.",
          "evidence": [
            [
              "CoA water absorption",
              "+1.5% vs previous lot",
              "Supplier certificate"
            ],
            [
              "Batches compared",
              "3 (minimum 8)",
              "Comparison engine"
            ],
            [
              "Height",
              "126mm (within range)",
              "Image measures"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "BCH-2208",
      "title": "Suggested trial — proof time",
      "subtitle": "Controlled trial within approved range",
      "group": "Early shift",
      "metrics": [
        [
          "Variable",
          "Proof time"
        ],
        [
          "Range",
          "52 / 58 / 64 min"
        ],
        [
          "Batches",
          "6"
        ],
        [
          "Approved range",
          "50–65 min"
        ]
      ],
      "flags": [
        {
          "label": "Trial suggestion",
          "severity": "medium",
          "confidence": 0.7,
          "explanation": "A small controlled trial could separate the effect of proof time from flour lot F-2231 on loaf height. Settings stay within the approved range.",
          "evidence": [
            [
              "Approved range",
              "50–65 min",
              "Process specification"
            ],
            [
              "Confounded factors",
              "Flour lot + proof time",
              "BCH-2201 analysis"
            ],
            [
              "Design",
              "2 lots × 3 proof times",
              "Trial planner"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "BCH-2209",
      "title": "Batch within normal variation",
      "subtitle": "Pan bread 800g",
      "group": "Late shift",
      "metrics": [
        [
          "Height",
          "126mm"
        ],
        [
          "Crust L*",
          "53"
        ],
        [
          "Weight SD",
          "5.0g"
        ],
        [
          "Status",
          "Normal"
        ]
      ],
      "flags": [],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    }
  ]
};
