/*
    ♡๖ۣۜκγ δίήɧ♡๖ۣۜ
    ⓚⓨ ⓓⓘⓝⓗ
    ＫＹ ＤＩＮＨ
    🅺🆈 🅳🅸🅽🅷
    🄺🅈 🄳🄸🄽🄷
*/






function getListProductFromLocalStorage(){
    return JSON.parse(localStorage.getItem('p'));
}
function pushLishProductToLocalStorage(array){
    localStorage.setItem('p',JSON.stringify(array));
}
function getListUserFromLocalStorage(){
    return JSON.parse(localStorage.getItem('u'));
}
function pushListUserToLocalStorage(array){
    localStorage.setItem('u',JSON.stringify(array));
}
function createIDAuto(){
    return Math.floor(Math.random()*1000); 
}
function pushOneProduct(id){
    localStorage.setItem('oneProduct',id);
}
function getOneProduct(){
    return localStorage.getItem('oneProduct');
}
function renderHomeProduct(){
    let listProduct = getListProductFromLocalStorage();
    let html = '';
    
    listProduct.forEach(function(product,index){
        if(index >11){
            html+='';
        }else {
        html+=`<div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 position-relative">
        <div class="product-home-img">
            <a href="./san-pham.html" class="product-home-link" onclick = "return pushOneProduct('${product.id}')">
                <img src="${product.img[0]}" alt="" class="product-home-img">
            </a>
        </div>
        <div class="product-home-content">
            <h3 class="product-home-title" title = "${product.productName}">
               ${product.productName}
            </h3>
            <p class="product-home-price">
                <span class="discoundted-price">${product.price}</span>
                <span class="home_oldprice">${product.price}</span>
            </p>
        </div>
        <div class="product-home-buton">
            <span title="Thêm vào giỏ hàng" onclick = "handleAddCart('${product.id}')"><i class="fal fa-cart-plus"></i></span>
            <a href = "./san-pham.html" title="Xem chi tiết" onclick = "return pushOneProduct('${product.id}')"><i class="far fa-eye"></i></a>
            <span title="Thêm vào yêu thích"><i class="far fa-heartbeat"></i></span>
        </div>
    </div>`;
        }
    });
    $('.product_home-render').html(html);
}
$('.banner').slick(
    {
        rows: 1,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        prevArrow:
        "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:
        "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
    }
);
function start(){
    renderHomeProduct();
}
start();