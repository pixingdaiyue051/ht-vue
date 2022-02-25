export const mx1 = {
    data() {
        return {
            mx1_d1: 12,
            mx1_o1: {
                k1: 1,
                k2: 4
            },
            ttl2: "混合ttl2",
        }
    }
}

export const mx2 = {
    methods: {
        mx2_m1() {
            console.log('混合mx2_m1');
        },
        takeme() {
            console.log('混合takeme');
        }
    },
}