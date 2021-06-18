/*
    Technical Info:
        1. minimum engagement length: related to the d
        2. preload: related to the class and d
        3. preload torque: K * preload * d
*/
export const screwTechInfo = {
    1.6: {
        preload: {
            "class8.8": 530,
            "class10.9": 746,
            "class12.9": 895,
            "A2": 390,
            "A4": 500
        },
        tighteningTorque: {
            "class8.8": 0.18,
            "class10.9": 0.25,
            "class12.9": 0.3,
            "A2": 0.17,
            "A4": 0.22
        },
        minEngagement: 1.18
    },

    2: {
        preload: {
            "class8.8": 880,
            "class10.9": 1240,
            "class12.9": 1490,
            "A2": 640,
            "A4": 850
        },
        tighteningTorque: {
            "class8.8": 0.38,
            "class10.9": 0.53,
            "class12.9": 0.64,
            "A2": 0.35,
            "A4": 0.46
        },
        minEngagement: 1.52
    },

    2.5: {
        preload: {
            "class8.8": 1470,
            "class10.9": 2070,
            "class12.9": 2480,
            "A2": 1060,
            "A4": 1420
        },
        tighteningTorque: {
            "class8.8": 0.78,
            "class10.9": 1.09,
            "class12.9": 1.31,
            "A2": 0.72,
            "A4": 0.97
        },
        minEngagement: 1.96
    },

    3: {
        preload: {
            "class8.8": 2250,
            "class10.9": 3170,
            "class12.9": 3800,
            "A2": 1600,
            "A4": 2120
        },
        tighteningTorque: {
            "class8.8": 1.37,
            "class10.9": 1.92,
            "class12.9": 2.3,
            "A2": 1.26,
            "A4": 1.7
        },
        minEngagement: 2.39
    },

    4: {
        preload: {
            "class8.8": 3900,
            "class10.9": 5480,
            "class12.9": 6580,
            "A2": 2760,
            "A4": 3600
        },
        tighteningTorque: {
            "class8.8": 3.1,
            "class10.9": 4.4,
            "class12.9": 5.25,
            "A2": 2.9,
            "A4": 3.8
        },
        minEngagement: 3.15
    },

    5: {
        preload: {
            "class8.8": 6380,
            "class10.9": 8980,
            "class12.9": 10800,
            "A2": 4510,
            "A4": 6000
        },
        tighteningTorque: {
            "class8.8": 6.15,
            "class10.9": 8.65,
            "class12.9": 10.4,
            "A2": 5.7,
            "A4": 7.6
        },
        minEngagement: 4.09
    },

    6: {
        preload: {
            "class8.8": 9010,
            "class10.9": 12650,
            "class12.9": 15200,
            "A2": 6400,
            "A4": 8400
        },
        tighteningTorque: {
            "class8.8": 10.5,
            "class10.9": 15,
            "class12.9": 18,
            "A2": 10,
            "A4": 13.2
        },
        minEngagement: 5.03
    },

    8: {
        preload: {
            "class8.8": 16550,
            "class10.9": 23200,
            "class12.9": 27900,
            "A2": 11600,
            "A4": 15500
        },
        tighteningTorque: {
            "class8.8": 26,
            "class10.9": 36,
            "class12.9": 43,
            "A2": 24.1,
            "A4": 32.1
        },
        minEngagement: 6.78
    },

    10: {
        preload: {
            "class8.8": 26300,
            "class10.9": 37000,
            "class12.9": 44400,
            "A2": 18500,
            "A4": 24700
            		
        },
        tighteningTorque: {
            "class8.8": 51,
            "class10.9": 72,
            "class12.9": 87,
            "A2": 47.7,
            "A4": 63
        },
        minEngagement: 8.48
    }

}

/*
    Screw pitch
*/
export const screwPitch = {
    1.6: 0.35, 
    2: 0.4,
    2.5: 0.45,
    3: 0.5, 
    4: 0.7, 
    5: 0.8, 
    6: 1.0, 
    8: 1.25, 
    10: 1.5
}

/*
    Screw size
*/
export const screwSize = [1.6, 2, 2.5, 3, 4, 5, 6, 8, 10];


/*
    Screw head type
*/
export const screwHeadType = {
    "SH": "Socket Head",
    "RH": "Rounded Head",
    "FH": "Flat Head"
    // "Socket Head": "SH",
    // "Rounded Head": "RH",
    // "Flat Head": "FH"
}

/*
    Screw drive type
*/
export const screwDriveType = {
    "HX": "Hex",
    "TX": "Torx",
    "SL": "Slotted",
    "CS": "Cruciform"
    // "Hex": "HX",
    // "Torx": "TX",
    // "Slotted": "SL",
    // "Cruciform": "CS"
}

/*
    Screw material
*/
export const screwMaterial = {
    "class8.9": "Steel (Class 8.9)",
    "class10.9": "Steel (Class 10.9)",
    "class12.9": "Steel (Class 12.9)",
    "A2": "Stainless (18-8, 304, A2)",
    "A4": "Stainless (18-10, 316, A4)",
    "plastic": "Plastic",
    "undefined": "I don't care (You sure?)"
    // "Steel (Class 8.9)": "class8.9",
    // "Steel (Class 10.9)": "class10.9",
    // "Steel (Class 12.9)": "class12.9",
    // "Stainless (18-8, 304, A2)": "A2",
    // "Stainless (18-10, 316, A4)": "A4",
    // "Plastic": "plastic",
    // "I don't care (You sure?)": "undefined"
}

