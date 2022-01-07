

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

function handleAddCartproduct(id){
    let listCart = new Array,listUser = new Array;
    let checkLogin = false, checkCart = false;
    let ID = '';
    listUser = getListUserFromLocalStorage();
    listUser.forEach(function(e){
        if(e.login){
            checkLogin = true;
            ID = e.id;
            listCart = e.cart;
        }
    });
    if(!checkLogin){
        alert("Vui lòng đăng nhập");
    }else {
        listCart.forEach(function(e){
            if(e.id == id){
                e.quantity = parseInt(e.quantity) + parseInt($('#input-quantity').val());
                listUser.forEach(function(ee){
                    if(ee.id = ID){
                        ee.cart = listCart;
                    }
                })
                checkCart = true;
            }
        });
        if(!checkCart){
            let obj = new Object;
            obj.id = id;
            obj.quantity = $('#input-quantity').val();
            listCart.push(obj);
            listUser.forEach(function(ee){
                if(ee.id = ID){
                    ee.cart = listCart;
                }
            })
        }
        pushListUserToLocalStorage(listUser);
        alert("Đã thêm sản phẩm vào giỏ hàng!")
        window.location.reload();
    }
}

$('#btn-add-cart').on('click',()=>{
    let id = getOneProduct();
    handleAddCartproduct(id);
});

function renderProduct(){
    let id = getOneProduct();
    let listProduct = getListProductFromLocalStorage();
    listProduct.forEach(e=>{
        if(e.id == id){
            $('.product-right-name-h3').html(e.productName);
            $('.current-cost').html(e.price);
            $('.old-cost').html(e.oldprice);
            $('.product-right-description-p').html(e.description);
            $('.product-single-left-img').attr('src',e.img[0]);
        }
    })
}

function renderRelated(){
    let html = '';
    let id = getOneProduct();
    let listProduct = getListProductFromLocalStorage();
    let category = '';
    listProduct.forEach(e=>{
        if(e.id == id){
            category = e.category;
        }
    });
    listProduct.forEach(e=>{
        if(e.category == category){
            html+=` <div class="product-related-item">
            <div class="product-related-image">
            <a href="./san-pham.html" class="product-related-img-link" onclick = "return pushOneProduct('${e.id}') ">
            <img src="${e.img[0]}" alt="" class="product-related-img">
             </a>
            </div>
            <div class="product-related-content">
                <h3 class="product-related-content-title" title = "${e.productName}">
                    ${e.productName}
                </h3>
                <div class="product-related-content-cost">
                    <span class="product-related-content-cost-current">${e.price}</span>
                    <span class="product-related-content-cost-old">${e.oldprice}</span>
                </div>
            </div>
        </div>`;
        }
    })

    $('.product-related-mid').html(html);
}

function start(){
    renderRelated();
    renderProduct();
}

start();



// slick slider
$('.product-related-mid').slick(
    {
        rows: 1,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: false,
        prevArrow:
        "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:
        "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
    }
);