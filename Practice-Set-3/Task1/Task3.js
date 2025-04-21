// Make a cart
let shoppingCart = {
    items: [],     
    total: 0,     

    // Add item
    addItem: function (name, price) {
        let item = { name: name, price: price };  
        this.items.push(item);                   
        this.total = this.total + price;         
        console.log(name + " added");
    },

    // Remove item
    removeItem: function (name) {
        
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].name === name) {
                let price = this.items[i].price;     // get price
                this.items.splice(i, 1);             // remove item
                this.total = this.total - price;     // update total
                console.log(name + " removed");
                return;
            }
        }
        console.log(name + " not found");
    },

    // Checkout
    checkout: function () {
        console.log("Total is: " + this.total);
        this.items = [];    // empty the cart
        this.total = 0;     // reset total
        console.log("Cart is empty now");
    }
};


shoppingCart.addItem("Eggs", 20);
shoppingCart.addItem("Juice", 40);
shoppingCart.removeItem("Eggs");
shoppingCart.checkout();
