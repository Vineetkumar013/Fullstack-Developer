function Product(name,brand,price, description) {
  // Complete the constructor function
this.name=name;
this.brand =brand;
this.price = price;
this.description =description;
this.sold =false

}

Product.prototype.changePrice =function(){
  this.price = 7000;
    return this

  }

  Product.prototype.toggleStatus =function(){
    if(this.sold == true){
      this.sold = false;
    return this
    }else{
      this.sold= true
      return this
    }

    }
     let p =new Product("Shoe", "Puma", 5000, "Sport shoe")
    p.toggleStatus()
     p.changePrice()
  


export default Product;

      
// Create these two methods in Product prototype :-
// changePrice
// toggleStatus

// Do not change this
// 4. Create a method **'toggleStatus'** in Product prototype, which will toggle the sold status of the product.
