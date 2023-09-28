
$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 100 ){
            $('.navbar_products').addClass("fixed-top");
            $('.navbar_products').addClass("navbar2_products");
            $('.navbar_products .nav-tabs a').addClass("color_whte");
        }
        else{
            $('.navbar_products').removeClass("fixed-top");
            $('.navbar_products').removeClass("navbar2_products");
            $('.navbar_products .nav-tabs a').removeClass("color_whte");
        }
    })
});


// For Home page Navbar for product
$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 100 && $(window).width()<767){
          
            $('.product_cart_1').addClass("d-block");
            $('.nav2_btn').addClass("productNav_colp");
            $('.product_cart_1').removeClass("d-none");
            $('.nav2_collapse').addClass("collapse");
            $('.nav2_btn').removeClass("d-none");
        }
        else{
            $('.product_cart_1').addClass("d-none");
            $('.nav2_btn').removeClass("productNav_colp");
            $('.nav2_btn').removeClass("d-block");
            $('.nav2_btn').addClass("d-none");
            $('.product_cart_1').removeClass("d-block");
            $('.nav2_collapse').removeClass("collapse");
      
        }
    })
});



// For Cart Page
$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 100 && $(window).width()>767){

            $('.Shopping_cart_nav').addClass("fixed-top");
            $('.Shopping_cart_nav').addClass("Shopping_cart_fixed");
            $('.tab_icon').addClass("tab_icon_on");
            $('.tab_icon').removeClass("tab_icon_off");
        }
        else{
            $('.Shopping_cart_nav').removeClass("fixed-top");
            $('.Shopping_cart_nav').removeClass("Shopping_cart_fixed");
            $('.tab_icon').removeClass("tab_icon_on");
            $('.tab_icon').addClass("tab_icon_off");
        }
    })
});
// For Send Mail Contact US
function sendEmail() {
    let name = document.getElementById("Email_Name").value;
    let email = document.getElementById("email_ID").value;
    let Phone = document.getElementById("Contact_number").value;
    let message = document.getElementById("Email_msg").value;
    let finalmessage = `Name : ${name} <br>  Email : ${email} <br>  Message : ${message} <br> `;
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


   




    

