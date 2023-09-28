let shoping_heading =  document.getElementById("shopingcart_heading");
let product_container = document.querySelector('.Product_cart_container');
let storgae_p = document.getElementById("storgae_p");
let Basket = JSON.parse(localStorage.getItem("Products")) || []; 


let TotalItem = () => {
    let cartIcon = document.getElementById("cart_item_Number");
    cartIcon.innerHTML = Basket.map((x)=> x.item).reduce( (x,y) => x + y, 0) 
}
TotalItem();

let displaycartitems = () =>{

 
    if(Basket.length != 0){
        totalInCart =  Basket.map((x)=> x.item).reduce( (x,y) => x + y, 0)
        shoping_heading.innerHTML=`
        <h5>Shopping Cart</h5>
        <div class="p_main"><div class="Storage_p" id="storgae_p">${totalInCart}</div><span>item in your cart</span></div>
        `
        return (product_container.innerHTML = Basket
            .map((x)=>{
            let {id,item} =x;
            let search = jellyData.find((y) => y.id === id) || candyData.find((y) => y.id === id) || []

            return `
            <div class="products_items col-sm-3">
           <div class="product_inner">
           <div class="product_image_container" >
           <img src=${search.img} >
         </div>
         <div class="product_details">
           <h5 class="Product_cart_name">${search.name}</h5>
           <div class="Product_quantity">
           <i onclick="Decrement(${id})" class="fa fa-minus-circle" aria-hidden="true"></i>
           <span id=${id}>${item}</span>
           <i  onclick="increment(${id})" class="fa fa-plus-circle" aria-hidden="true"></i>
         </div>
         </div>
      
         <div class="deleteall">
         <i onclick="deletecart(${id})" class="fa fa-times-circle" aria-hidden="true"></i>
         </div>
         </div>
            </div>
            `;
        }).join(''));
       
    }
    else{
        product_container.innerHTML = ``;
        shoping_heading.innerHTML=`
        <h5>Shopping Cart is Empty</h5>
        <div class="St_sp"><a href="Home.html" id="start_shopping">Start Shopping</a></div>
        `
    }
}
displaycartitems();

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
 displaycartitems(); 
 localStorage.setItem("Products", JSON.stringify(Basket));
};

// update Function
let update = (id) =>{
    let search = Basket.find((x)=>x.id === id);
    document.getElementById(id).innerHTML = search.item;
    displaycartitems();
    TotalItem();
}

let deletecart = (id) =>{
    let deleteID = id;
   Basket =  Basket.filter((x)=>x.id !== deleteID.id);
   displaycartitems();
   TotalItem();
   localStorage.setItem("Products", JSON.stringify(Basket));
 
}

// For Send Mail Contact US
function sendEmail() {
    // let name = document.getElementById("Email_Name").value;
    // let email = document.getElementById("email_ID").value;
    // let Phone = document.getElementById("Contact_number").value;
    // let message = document.getElementById("Email_msg").value;
    let  finalmessage= Basket
    .map((x)=>{
    let {id,item} =x;
    let search = jellyData.find((y) => y.id === id) || candyData.find((y) => y.id === id) || []
    return `
    <div class="Product_cart_container row" 
    style="margin-top: 30px;
    margin-bottom: 50px;
    justify-content: center;">

    <div class="products_items col-sm-3"
    style="  font-size: 29px;
    color: #ffffff;
    margin: 0px;
    cursor: pointer;
    border-bottom: 2px solid #f5f5f5;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    ">
    <div class="product_inner">
    <div class="product_image_container" style="border: 1px solid #f5f5f5;
    box-shadow: 0px 6px 16px 4px rgba(0, 0, 0, 0.3)" >
    <img style="width: 226px;" src=${search.img}>
    </div>
    <div class="product_details" style="text-align: center;padding-top: 20px;">
    <h5 style="font-size:17px;color: #1B998E;">${search.name}</h5>
   
    <div class="Product_quantity" style=" display: flex;
    justify-content: space-between;
    align-items: initial;
    width: 100%;
    padding: 0px 20px;
    padding-top: 5px;
    display: flex;
    background: #1B998E;
    justify-content: space-evenly;
    padding: 5px;
    border-radius: 5px;">
    <span id=${id}>Number of items ${item}</span>
    </div>
    </div>
    </div>
    </div>
    </div>
    `;
    }).join('');

    Email.send({
        SecureToken : "24fa6707-aeb6-4430-b9f0-843219d1a506",
        To : 'suhaimkhalid007@gmail.com',
        From : "techflair007@gmail.com",
        Subject : "Get In Touch",
        Body : finalmessage
    }).then(
      message => alert(message)
    );
}

