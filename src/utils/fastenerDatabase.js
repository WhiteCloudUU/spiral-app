export const fastenerTechInfo = {
    1.6: {
        preload: {
            "8.8": 530,
            "10.9": 746,
            "12.9": 895
        },
        tighteningTorque: {
            "8.8": 0.18,
            "10.9": 0.25,
            "12.9": 0.3
        },
        minEngagement: 0
    },

    2: {
        preload: {
            "8.8": 880,
            "10.9": 1240,
            "12.9": 1490
        },
        tighteningTorque: {
            "8.8": 0.38,
            "10.9": 0.53,
            "12.9": 0.64
        },
        minEngagement: 0
    },

    2.5: {
        preload: {
            8.8: 1470,
            10.9: 2070,
            12.9: 2480
        },
        tighteningTorque: {
            8.8: 0.78,
            10.9: 1.09,
            12.9: 1.31
        },
        minEngagement: 0
    },

    3: {
        preload: {
            8.8: 2250,
            10.9: 3170,
            12.9: 3800
        },
        tighteningTorque: {
            8.8: 1.37,
            10.9: 1.92,
            12.9: 2.3
        },
        minEngagement: 0
    },

    4: {
        preload: {
            8.8: 3900,
            10.9: 5480,
            12.9: 6580
        },
        tighteningTorque: {
            8.8: 3.1,
            10.9: 4.4,
            12.9: 5.25
        },
        minEngagement: 0
    },

    5: {
        preload: {
            8.8: 6380,
            10.9: 8980,
            12.9: 10800
        },
        tighteningTorque: {
            8.8: 6.15,
            10.9: 8.65,
            12.9: 10.4	
        },
        minEngagement: 0
    },

    6: {
        preload: {
            8.8: 9010,
            10.9: 12650,
            12.9: 15200
        },
        tighteningTorque: {
            8.8: 10.5,
            10.9: 15,
            12.9: 18
        },
        minEngagement: 0
    },

    8: {
        preload: {
            8.8: 9010,
            10.9: 12650,
            12.9: 15200
        },
        tighteningTorque: {
            8.8: 10.5,
            10.9: 15,
            12.9: 18
        },
        minEngagement: 0
    },

    10: {
        preload: {
            8.8: 16550,
            10.9: 23200,
            12.9: 27900
        },
        tighteningTorque: {
            8.8: 26,
            10.9: 36,
            12.9: 43
        },
        minEngagement: 0
    }

}

export const fastenerMetricSize = {
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

minimum engagement length: related to the d

preload: related to the class and d

preload torque: K * preload * d

*/