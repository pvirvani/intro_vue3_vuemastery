const app = Vue.createApp({
    data() {
        return {
            // cart: 0,
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id){
            this.cart.push(id)
        },
        updateCart_remove(id){
            this.cart.pop(id)
        }
    }
})
