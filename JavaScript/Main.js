let Jelly = document.getElementById("Jelly");
let Candy = document.getElementById("Candy");





let Basket = JSON.parse(localStorage.getItem("Products")) || []; 

let GenerateJelly_product = () => {
    
    return ( Jelly.innerHTML = jellyData.map((x) => {
       let {id, name, img} = x
      let search = Basket.find((x) => x.id === id) || [];
       return `
        <div class="Product_card" id="product-id-">
        <div class="product_header">
        <img src="${img}" alt="">
        <div class="product_buy">
        <a onclick="buyNow(${id})" class="add_to_cart"><span>Buy Now</span></a>
        </div>
        </div>
        <div class="product_body">
        <span id=${id} style="display:none">0</span>
        <h4 class="product_title">${name}</h4>
        </div>
        </div>
        `

    }).join(""));
};

let Generatecandy_product = () => {
    
    return ( Candy.innerHTML = candyData.map((x) => {
       let {id, name, img} = x
      let search = Basket.find((x) => x.id === id) || [];
       return `
        <div class="Product_card" id="product-id-">
        <div class="product_header">
        <img src="${img}" alt="">
        <div class="product_buy">
        <a onclick="buyNow(${id})" class="add_to_cart"><span>Buy Now</span></a>
        </div>
        </div>
        <div class="product_body">
        <span id=${id} style="display:none">0</span>
        <h4 class="product_title">${name}</h4>
        </div>
        </div>
        `

    }).join(""));
};

GenerateJelly_product();
Generatecandy_product();

//  Increment Function
let increment = (id) =>{
    let selecteditem = id;
 let search = Basket.find((x)=> x.id === selecteditem.id);
 if(search === undefined){
    Basket.push({
        id: selecteditem.id,
        item:1,
      });
 }
 else{
    search.item +=1 ;
 }
 
 
  update(selecteditem.id); 
  localStorage.setItem("Products", JSON.stringify(Basket));
}

// Decrement Function
let Decrement = (id) =>{
    let selecteditem = id;
 let search = Basket.find((x)=> x.id === selecteditem.id);
 if(search === undefined) return;
 else if(search.item === 0)return;
 else{
    search.item -=1 ;
 }
 update(selecteditem.id);

 Basket = Basket.filter((x)=> x.item !== 0);
 localStorage.setItem("Products", JSON.stringify(Basket));
};



// Buy Now Cart FUnction
let buyNow = (id) =>{
let selecteditem = id;
 let search = Basket.find((x)=> x.id === selecteditem.id);
 if(search === undefined){
    Basket.push({
        id: selecteditem.id,
        item:1,
      });
 }
 else{
    search.item +=1 ;
 }
 localStorage.setItem("Products", JSON.stringify(Basket));

  update(selecteditem.id);
}

// update Function
let update = (id) =>{
    let search = Basket.find((x)=>x.id === id);

    TotalItem();
}


let TotalItem = () => {

    let cartIcon = document.getElementById("cart_item_Number");
    let product_cart_1 = document.getElementById("product_cart_1");
    let navtabIcon = document.getElementById("nav_cart_item_Number");
    cartIcon.innerHTML = Basket.map((x)=> x.item).reduce( (x,y) => x + y, 0);
    navtabIcon.innerHTML = Basket.map((x)=> x.item).reduce( (x,y) => x + y, 0);
    product_cart_1.innerHTML = Basket.map((x)=> x.item).reduce( (x,y) => x + y, 0)
}

TotalItem();

