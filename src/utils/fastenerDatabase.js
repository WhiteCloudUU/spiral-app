export const fastenerTechInfo = {
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
        minEngagement: 0
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
        minEngagement: 0
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
        minEngagement: 0
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
        minEngagement: 0
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
        minEngagement: 0
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
        minEngagement: 0
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
        minEngagement: 0
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
        minEngagement: 0
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
        minEngagement: 0
    }

}

export const fastenerPitch = {
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

export const fastenerSize = [1.6, 2, 2.5, 3, 4, 5, 6, 8, 10];


/*

minimum engagement length: related to the d

preload: related to the class and d

preload torque: K * preload * d

*/