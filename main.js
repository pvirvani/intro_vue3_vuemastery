
// Need to remove or comment the following line, to create a vue app.
// const product = 'Socks'


//  creating vue app, without es6-string-html

// const app = Vue.createApp({

//     data: function() {
//         return {
//             product: 'Socks'
//         }
//     }
// })


// creating vue app, with es6-string-html (shorthand)

const app = Vue.createApp({

    data() {
        return {
            product: 'Socks',
            prod_desc: 'This describes the product.'
        }
    }
})