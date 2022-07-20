# Lecture 2

## This files contains the information about modifications done in lecture 2.

--- 
### These changes are:
* main.js file is updated at:
  
```javascript
const product = 'Socks'
```

*This change is necessary because we need to create a `vueApp` element, for web page to update*.

The `vueApp` element is created as:
```javascript
const app = Vue.createApp()
```
*Since, we are creating the `App` for some response, thus some kind of `argumnet` can be passed. In this tutorial, we’re going to pass-in `an object` and `add a data property`. This is going to be a `function that returns another object`, where we’ll `store our data`. In here, we’ll add `product` as a `data item`.*

```javascript
//  -------------------- Either -------------------------
// Normally, without es6-string-html
const app = Vue.createApp({

    data: function() {
        return {
            product: 'Socks'
        }
    }
})
// --------------------- Or ----------------------------
// with es6-string-html (this is used for shorthand)
const app = Vue.createApp({

    data () {
        return {
            product: 'Socks'
        }
    }
})
```

*Now, in the `main.js` the `vueApp` element has been created. It is now time to call this element in the `html file` i.e. `index.html` here.*

* In `index.html` file, at line 16, we can change  ***`Import JS`*** to ***`Import Vue`*** as now it is a `Vue framework`.

* Now, we are needed to `mount` the `App`. This can be done by including the following script.

```html
<!-- Mount App --> <!-- Mounted after Importing the vueApp -->
<script>
  const mountedApp = app.mount('#app') /* #app is the reference to vue app element created in main.js file, i.e. const "app" = Vue.createApp(...)*/
</script>
```
*`.mount()`, is a method that requires a DOM selector as an argument. This lets us plug the Vue app into that piece of our DOM.*

* Now that we’ve created, imported and mounted out Vue app, we can now start displaying the data that lives within it.

To **`render the product data`**,  we will update the **`h1`** tag at line `13` i.e.:

```javascript
    <div id="app">
      <h1>Product goes here</h1>
    </div>
```
to
```javascript
    <div id="app">
      <h1>{{ product }}</h1>
    </div>
```
`{{ ... }}`, renders the javascript in html. Since, it contains the **`product`** variable/element, it will display the `value of product`.

*It is to be noted that, `id="app"` in  `<div id="app">` referes to the app mounted on line `22`.*



***
***

## Coding Challenge:

* **Add a description to the data object.**
* **Display the description using an expression within a p tag.**

### To do so:
* add another `variable/property/element` let's say `prod_desc` in the `data()` property as:
  
 ```javascript
 const app = Vue.createApp({

    data() {
        return {
            product: 'Socks',
            prod_desc: 'This describe the product.'
        }
    }
})
 ```
*Note here, the new property is seperated through a comma `","`.*

* Now, add the `p` tag in the html file as:

```html
<p> {{ prod_desc }} </p>
```





 