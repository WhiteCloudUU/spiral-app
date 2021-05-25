export const fastenerDatabase = {
    1: {
        preload: undefined,
        tighteningTorque: undefined,
        minEngagement: 0
    },

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
    }
}

export const fastenerMetricSize = [1, 1.6, 2, 3, 4, 5, 6, 8, 10]




/*

minimum engagement: related to the d

preload: related to the class and d

preload torque: K * preload * d

*/