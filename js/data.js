const portfolioData = {
    personalInfo: {
        name: "Aldar Engineering Office",
        title: "Electro-Mechanical Design & Technical Support",
        email: "NOOR11270@gmail.com",
        phone: "+2-01008873106",
        location: "Egypt & KSA",
        linkedIn: "#",
        about: `Established in 2011, specialized in Electro-Mechanical Works including Design, Shop Drawings, Execution & Technical Support. 
        We have extensive experience in Residential Projects, Commercial & Industrial Buildings, Hospitals & Healthcare Facilities, 
        Infrastructure & Treatment Plants. <br><br>Working according to the latest international codes and standards, 
        our office is supported by highly qualified engineering teams dedicated to delivering excellence across all MEP disciplines.`
    },
    skills: [
        "Electrical Design", "Mechanical Design (HVAC, PL, FF)", "BIM Management (BIM)", "Shop Drawings", "Technical Support", "International Standards Compliance", "Tender Analysis", "Project Execution Support"
    ],
    categories: [
        { id: "all", name: "All Projects" },
        { id: "bim", name: "BIM Projects" },
        { id: "residential", name: "Residential" },
        { id: "healthcare", name: "Healthcare" },
        { id: "hospitality", name: "Hospitality" },
        { id: "industrial", name: "Industrial" },
        { id: "infrastructure", name: "Infrastructure" }
    ],
    services: [
        {
            id: "s1",
            category: "services",
            title: "Electrical Systems",
            details: "Power Distribution, Lighting Systems, Load Studies, Grounding & Lightning Protection, Feeders & Transformers, Emergency Power Systems.",
            icon: "Electrical",
            technologies: ["Power", "Lighting", "Grounding"]
        },
        {
            id: "s2",
            category: "services",
            title: "Low Current Systems",
            details: "ELV Solutions: Fire Alarm, CCTV, Telephone & Data Networks, Security Systems, Nurse Call, B.H.U. Systems.",
            icon: "ELV",
            technologies: ["Fire Alarm", "CCTV", "Security"]
        },
        {
            id: "s3",
            category: "services",
            title: "Mechanical Systems",
            details: "HVAC Systems, Fire Fighting, Plumbing Systems, Lifts & Escalators, Medical Gas Systems.",
            icon: "Mechanical",
            technologies: ["HVAC", "Plumbing", "Fire Fighting"]
        },
        {
            id: "s4",
            category: "services",
            title: "Engineering & Consultancy",
            details: "Design Analysis, Shop Drawings, Calculation Sheets, Tender Drawings & BOQs, Technical Specifications, Contract Conditions.",
            icon: "Consultancy",
            technologies: ["Design", "Tender", "BOQ"]
        }
    ],
    projects: [
        // --- BIM PROJECTS (SAVED FROM PREVIOUS) ---
        {
            id: 1,
            category: "bim",
            title: "SIX FLAGS-QIDDIYA",
            location: "KSA",
            consultant: "ATKINSREALIS (SNC-LAVALIN)",
            area: "320,000 SQM",
            details: "Electrical BIM modeling and coordination for massive theme park attractions.",
            image: "assets/images/6F.png",
            technologies: ["BIM", "Electrical"]
        },
        {
            id: 2,
            category: "bim",
            title: "MOTOR SPEED PARK TRACK",
            location: "KSA",
            consultant: "WSP / TILKE ENGINEERS",
            area: "310,000 SQM",
            details: "BIM modeling for world-class FIA Grade 1 racing circuit lighting and buildings.",
            image: "assets/images/SPB.png",
            technologies: ["BIM", "Infrastructure"]
        },
        {
            id: 3,
            category: "bim",
            title: "HOUSE OF AL SAUD - DIRIYAH GATE",
            location: "KSA",
            consultant: "FOSTER AND PARTNERS",
            area: "25,000 SQM",
            details: "Intricate BIM coordination for landmark museum architectural and lighting designs.",
            image: "assets/images/hoas.png",
            technologies: ["BIM", "Museum"]
        },
        {
            id: 4,
            category: "bim",
            title: "ADNOC BU HASA INDUSTRIAL PROJECT",
            location: "UAE",
            consultant: "DORSCHE GRUPPE / CH2M",
            details: "BIM engineering for industrial electrical systems and site coordination.",
            image: "assets/images/placeholder.png",
            technologies: ["Industrial", "BIM"]
        },
        {
            id: 5,
            category: "bim",
            title: "QIDDIYA WATER PARK HOTEL",
            location: "KSA",
            consultant: "DSA ARCHITECTS",
            details: "Electrical systems design and BIM modeling for luxury hotel integrated within Qiddiya.",
            image: "assets/images/02.png",
            technologies: ["Hospitality", "BIM"]
        },
        {
            id: 6,
            category: "bim",
            title: "SOLIMAN FAKEEH HOSPITAL",
            location: "KSA",
            details: "BIM modeling for specialized healthcare electrical systems and life safety.",
            image: "assets/images/03.png",
            technologies: ["Healthcare", "BIM"]
        },
        {
            id: 7,
            category: "bim",
            title: "UHAUD ROFIDA HOTEL",
            location: "KSA",
            details: "Electrical BIM modeling for luxury hotel facilities and guest comfort systems.",
            image: "assets/images/placeholder.png",
            technologies: ["Hospitality", "BIM"]
        },

        // --- RESIDENTIAL PROJECTS ---
        {
            id: 101,
            category: "residential",
            title: "Al Yassmine Village",
            location: "Egypt",
            details: "Electro-mechanical design and technical support for luxury residential village.",
            image: "assets/images/placeholder.png",
            technologies: ["MEP Design"]
        },
        {
            id: 102,
            category: "residential",
            title: "Sharm Lakes Village",
            location: "Egypt",
            details: "Design and execution support for hospitality-integrated residential development.",
            image: "assets/images/placeholder.png",
            technologies: ["MEP Design"]
        },
        {
            id: 103,
            category: "residential",
            title: "Canary Beach Village",
            location: "Egypt",
            details: "Shop drawings and technical documentation for coastal residential project.",
            image: "assets/images/placeholder.png",
            technologies: ["Shop Drawings"]
        },
        {
            id: 104,
            category: "residential",
            title: "Green Heights Village",
            location: "Egypt",
            details: "Full MEP design services and technical coordination.",
            image: "assets/images/placeholder.png",
            technologies: ["Full MEP"]
        },

        // --- HOSPITALITY ---
        {
            id: 201,
            category: "hospitality",
            title: "Hilton Dahab Hotel",
            location: "Egypt",
            details: "Electro-mechanical design analysis and shop drawings.",
            image: "assets/images/placeholder.png",
            technologies: ["Hotel MEP"]
        },
        {
            id: 202,
            category: "hospitality",
            title: "Magawish Touristic Project",
            location: "Egypt",
            details: "Technical support and design for major touristic complex.",
            image: "assets/images/placeholder.png",
            technologies: ["MEP Design"]
        },

        // --- HEALTHCARE ---
        {
            id: 301,
            category: "healthcare",
            title: "Abha Hospital Development",
            location: "KSA",
            details: "Healthcare engineering services including medical gas and ELV systems.",
            image: "assets/images/placeholder.png",
            technologies: ["Medical Gas", "MEP"]
        },
        {
            id: 302,
            category: "healthcare",
            title: "Khamis Mushait Hospital Development",
            location: "KSA",
            details: "Expansion and modernization of hospital MEP infrastructure.",
            image: "assets/images/placeholder.png",
            technologies: ["Infrastructure"]
        },
        {
            id: 303,
            category: "healthcare",
            title: "Sarat Ebida Hospital Development",
            location: "KSA",
            details: "Specialized engineering and technical support for healthcare facility.",
            image: "assets/images/placeholder.png",
            technologies: ["MEP Support"]
        },
        {
            id: 304,
            category: "healthcare",
            title: "Faculty of Health Science for Girls",
            location: "Abha, KSA",
            details: "Educational healthcare facility MEP design and shop drawings.",
            image: "assets/images/placeholder.png",
            technologies: ["Educational"]
        },

        // --- INDUSTRIAL & COMMERCIAL ---
        {
            id: 401,
            category: "industrial",
            title: "Alsonbala Factory",
            location: "Egypt",
            details: "Industrial power distribution and mechanical systems design.",
            image: "assets/images/placeholder.png",
            technologies: ["Industrial"]
        },
        {
            id: 402,
            category: "industrial",
            title: "Kopak Factory",
            location: "Egypt",
            details: "Comprehensive shop drawings and technical documentation.",
            image: "assets/images/placeholder.png",
            technologies: ["Technical Support"]
        },
        {
            id: 403,
            category: "industrial",
            title: "Olyan Complex Building",
            location: "Abha, KSA",
            details: "Mixed-use commercial building MEP design and shop drawings.",
            image: "assets/images/placeholder.png",
            technologies: ["Commercial"]
        },
        {
            id: 405,
            category: "industrial",
            title: "Melody Building",
            location: "Egypt",
            details: "Electrical Design & Shop Drawings for landmark commercial building.",
            image: "assets/images/placeholder.png",
            technologies: ["Electrical Design"]
        },

        // --- INFRASTRUCTURE ---
        {
            id: 501,
            category: "infrastructure",
            title: "Water Treatment Plant - El-Mehalla",
            location: "Egypt",
            capacity: "800 L/s",
            details: "Large scale water treatment infrastructure engineering.",
            image: "assets/images/placeholder.png",
            technologies: ["Infrastructure"]
        },
        {
            id: 502,
            category: "infrastructure",
            title: "Water Treatment Plant - Kafr Soliman",
            location: "Damietta, Egypt",
            capacity: "1200 L/s",
            details: "MEP design for high-capacity water treatment facilities.",
            image: "assets/images/placeholder.png",
            technologies: ["Infrastructure"]
        },
        {
            id: 503,
            category: "infrastructure",
            title: "Sewage Treatment Pump Stations",
            location: "El-Mehalla El-Kobra",
            capacity: "1600 L/s",
            details: "Pump station electrical and mechanical engineering support.",
            image: "assets/images/placeholder.png",
            technologies: ["Utility"]
        },
        {
            id: 504,
            category: "infrastructure",
            title: "Sewage Treatment Stations - Beltag",
            location: "Egypt",
            capacity: "1600 L/s",
            details: "Regional utility infrastructure development and design.",
            image: "assets/images/placeholder.png",
            technologies: ["Infrastructure"]
        }
    ]
};
