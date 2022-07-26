const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green' },
                { id: 2235, color: 'blue' } , 
            ],
            sizes: [
                {id:3336, f_size: '33/36'},
                {id:3639, f_size: '36/39'},
                {id:3942, f_size: '39/42'},                
            ]
        }
    }
})
