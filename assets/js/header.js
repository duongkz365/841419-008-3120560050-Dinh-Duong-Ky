

let header = ` <div class="container">
<div class="row align-item-center">
    <div class="col-xl-2 col-lg-2 col-md-4 col-12">
        <div class="header_logo">
            <a href="./index.html" class="header_logo-link">
                <img src="assets/img/logo/logo.png" alt="">
            </a>
        </div>
    </div>
    <div class="col-xl-7 col-lg-6 col-md-8  col-12 align-self-center">
        <nav class="header_main-menu">
            <ul class="header_main-menu-list">
                <li class="header_main-menu-item">
                    <a href="./index.html">Trang Chủ</a>
                </li>
                <li class="header_main-menu-item header_product-category">
                    <a href="./tat-ca-san-pham.html">Sản Phẩm</a>
                    <ul class="sub-menu-product">
                        <li class="sub-menu-product-item">
                            <a class="sub-menu-product-item-link" href="./danh-muc-san-pham.html" onclick = "return pushCategoryHeader('1')">Văn Phòng</a>
                            <ul>
                                <li class="sub-menu-product-s-item">
                                    <a href="./danh-muc-san-pham.html" onclick = "return pushCategoryHeader('1.1')">
                                        Sofa
                                    </a>
                                </li>
                                <li class="sub-menu-product-s-item">
                                    <a href="./danh-muc-san-pham.html" onclick = "return pushCategoryHeader('1.2')">
                                        Bàn Trà
                                    </a>
                                </li>
                                <li class="sub-menu-product-s-item">
                                    <a href="./danh-muc-san-pham.html" onclick = "return pushCategoryHeader('1.3')">
                                        Ghế Thư Giãn
                                    </a>
                                </li>
                                <li class="sub-menu-product-s-item">
                                    <a href="./danh-muc-san-pham.html" onclick = "return pushCategoryHeader('1.4')">
                                        Tủ Kệ
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="sub-menu-product-item">
                            <a href="./danh-muc-san-pham.html" class="sub-menu-product-item-link" onclick = "return pushCategoryHeader('2')">Phòng Ăn</a>
                            <ul>
                                <li class="sub-menu-product-s-item">
                                    <a href="./danh-muc-san-pham.html" onclick = "return pushCategoryHeader('2.1')">
                                        Bàn ăn thông minh
                                    </a>
                                </li>
                                <li class="sub-menu-product-s-item">
                                    <a href="./danh-muc-san-pham.html" onclick = "return pushCategoryHeader('2.2')">
                                        Ghế ăn
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="sub-menu-product-item">
                            <a href="./danh-muc-san-pham.html" class="sub-menu-product-item-link" onclick = "return pushCategoryHeader('3')">Phòng Ngủ</a>
                            <ul>
                                <li class="sub-menu-product-s-item">
                                    <a href="./danh-muc-san-pham.html" onclick = "return pushCategoryHeader('3.1')">
                                        Phòng ngủ người lớn
                                    </a>
                                </li>
                                <li class="sub-menu-product-s-item">
                                    <a href="./danh-muc-san-pham.html" onclick = "return pushCategoryHeader('3.2')">
                                        Phòng ngủ trẻ em
                                    </a>
                                </li>   
                            </ul>
                        </li>
                    </ul>
                </li>
                <li class="header_main-menu-item">
                    <a href="./gioi-thieu.html">Giới Thiệu</a>
                </li>
                <li class="header_main-menu-item">
                    <a href="./lien-he.html">Liên Hệ</a>
                </li>
                <li class="header_main-menu-item">
                    <a href="./blog.html">Blog</a>
                </li>
            </ul>
        </nav>
    </div>
    <div class="col col-xl-3 col-lg-4 col-md-5 col-12">
        <div class="header_search-cart">
            <ul class="header_search-cart-ul">
                <li class="header_seach-cart-item">
                    <a href="#" class="header_search-cart-link show-form-search">
                        <img src="assets/img/icon/search-interface-symbol.png" alt="">
                    </a>
                </li>
                <li class="header_seach-cart-item header_cart-myaccount">
                    <a href="#" class="header_search-cart-link" onclick = "return showFormLoginWithA()">
                        <img src="assets/img/icon/user.png" alt="">
                    </a>
                    <ul class="header_user-list">
                        <li class="header_user-item">
                            <a href="#" class="header-user_link">
                                Ngôn ngữ
                            </a>
                            <ul class="header_sub-user-list">
                                <li class="header_sub-user-item">
                                    <a href="#" class="header_sub-user-link"><i class="fal fa-language"></i>&nbspTiếng Anh</a>
                                </li>
                                <li class="header_sub-user-item">
                                    <a href="#" class="header_sub-user-link"><i class="fal fa-language"></i>&nbspTiếng Việt</a>
                                </li>
                            </ul>
                        </li>
                        <li class="header_user-item">
                            <a href="#" class="header-user_link">
                                Tiền Tệ
                            </a>
                            <ul class="header_sub-user-list">
                                <li class="header_sub-user-item">
                                    <a href="#" class="header_sub-user-link"><i class="fas fa-usd-square"></i>&nbspVND</a>
                                </li>
                                <li class="header_sub-user-item">
                                    <a href="#" class="header_sub-user-link"><i class="fas fa-usd-square"></i>&nbspUSD</a>
                                </li>
                            </ul>
                        </li>
                        <li class="header_user-item">
                            <a href="#" class="header-user_link">
                                Tài Khoản
                            </a>
                            <ul class="header_sub-user-list renderFeatureLogin">
                                <li class="header_sub-user-item">
                                    <a href="#" class="header_sub-user-link show-form-register"><i class="fad fa-sign-in-alt"></i>&nbspĐăng Ký</a>
                                </li>
                                <li class="header_sub-user-item">
                                    <a href="#" class="header_sub-user-link show-form-login"><i class="fal fa-sign-in-alt"></i>&nbspĐăng Nhập</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li class="header_seach-cart-item position-relative cart-list-hover">
                    <a href="#" class="header_search-cart-link position-relative">
                        <img src="assets/img/icon/shopping-cart.png" alt="">
                    </a>
                    <div class="header_product-list-cart position-absolute">
                        <h3 class="header-product-list-cart-title">Giỏ Hàng</h3>
                        <ul class="header-cart-list render-cart-home"></ul>
                        <div class="product-cart-info">
                            <div class="product-cart-info-group">
                                <span>Sản phẩm</span>
                                <span class="total-cart">22330</span>
                            </div>
                            <div class="product-cart-info-group">
                                <span >Thuế VAT (20%)</span>
                                <span class="vat-cart-home">22330</span>
                            </div>
                            <div class="product-cart-info-group">
                                <span>Tổng cộng</span>
                                <span class="sum-cart-home">22330</span>
                            </div>
                        </div>
                        <div class="product-cart-controll">
                            <a href = "./gio-hang.html">Xem Giỏ Hàng</a>
                            <a href="./mua-hang.html">Thanh Toán Ngay</a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>
</div>`;
let footer  = `
<div class="container">
    <div class="footer_top">
        <div class="row">
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <h3 class="footer_top-title">
                    Giờ mở của
                </h3>
                <ul class="footer_top-list">
                    <li class="footer_top-item">Mon - Fri: 8AM - 10PM</li>
                    <li class="footer_top-item">Sat: 9AM-8PM</li>
                    <li class="footer_top-item">Sun: Closed</li>
                    <li class="footer_top-item">We Work All The Holidays</li>
                </ul>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <h3 class="footer_top-title">
                    Liên kết nhanh
                </h3>
                <ul class="footer_top-list">
                    <li class="footer_top-item">Facebook</li>
                    <li class="footer_top-item">Instagram</li>
                    <li class="footer_top-item">Telegram</li>
                    <li class="footer_top-item">Tiktok</li>
                </ul>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <h3 class="footer_top-title">
                    Thông tin
                </h3>
                <ul class="footer_top-list">
                    <li class="footer_top-item">Về chúng tôi</li>
                    <li class="footer_top-item">Hướng dẫn mua</li>
                    <li class="footer_top-item">Chính sách bảo mật</li>
                    <li class="footer_top-item">Cửa hàng của chúng tôi</li>
                </ul>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div class="footer_top-contact">
                    <h2 class="footer_top-address">
                        273, An Dương Vương Quận 5 Thành Phố Hồ Chí Minh
                    </h2>
                    <span>dinhky0707@yahoo.com</span>
                    <span>+84123456789</span>
                </div>
            </div>
        </div>
    </div>
    <div class="footer_bot">
        <div class="footer_bot-left" onclick="test()">
            @2021 dinhky. design  
            <span style="color: red;"><i class="fas fa-heart"></i></span>
            by Kỳ Đinh
        </div>
        <div class="footer_bot-right">
            <a href=""><i class="fab fa-facebook"></i></a>
            <a href=""><i class="fab fa-telegram-plane"></i></a>
        </div>
    </div>
</div>
`;
let formlogin = `
<form action="" id="form-2">
    <h2>Đăng Nhập Tài Khoản</h2>
    
    <div class="form_r-group">
         <label for="lemail" class="r-form-label">Email</label>
         <input type="text" id="lemail" class="r-form-input ll-input">
         <span class="r-form-message"></span>
     </div>
     <div class="form_r-group">
         <label for="lpassword" class="r-form-label">Mật Khẩu</label>
          <input type="password" id="lpassword" class="r-form-input ll-input">
         <span class="r-form-message"></span>
         <div class = "show_password">
         <label for ="show_password-checkbox"> Hiển thị mật khẩu</label>
         <input type ="checkbox" id="show_password-checkbox">
         </div>
     </div>
     <div class="submit_group">
         <button type="button" id="btn-submit-login" onclick="login()">Đăng Nhập</button>
     </div>
</form>
<div style="text-align: center;" class="lpgh02oy">Chưa có tài khoản? <span class="movetoRegister">Đăng Ký</span></div>
`;
let formregister = `
<form action="" id="form-1">
    <h2>Đăng Ký Tài Khoản</h2>
    <p>Cùng nhau xây dựng một ngôi nhà đẹp với dinhky.</p>
    <div class="form_r-group">
        <label for="rfullname" class="r-form-label">Họ và tên</label>
        <input type="text" id="rfullname" class="r-form-input rg-input">
        <span class="r-form-message"></span>
    </div>
    <div class="form_r-group">
         <label for="remail" class="r-form-label">Email</label>
         <input type="text" id="remail" class="r-form-input rg-input">
         <span class="r-form-message"></span>
     </div>
     <div class="form_r-group">
         <label for="rpassword" class="r-form-label">Mật Khẩu</label>
          <input type="password" id="rpassword" class="r-form-input rg-input">
         <span class="r-form-message"></span>
     </div>
     <div class="form_r-group">
         <label for="rrepassword" class="r-form-label">Nhập Lại Mật Khẩu</label>
         <input type="password" id="rrepassword" class="r-form-input rg-input">
         <span class="r-form-message"></span>
         <div class = "r-show_password">
         <label for ="r-show_password-checkbox"> Hiển thị mật khẩu</label>
         <input type ="checkbox" id="r-show_password-checkbox">
         </div>
     </div>
     <div class="submit_group">
         <button type="button" id="btn-submit-register" onclick="register()">Đăng Ký</button>
     </div>
</form>
<div style="text-align: center;" class="lpgh02oy">Đã có tài khoản? <span class="movetoLogin">Đăng nhập</span></div>
`;
let formsearch = `<div class="form_search-content">
<input type="text" class="form_search-content-input" placeholder="Nhập từ khóa tìm kiếm">
<span class="search-message"></span>
</div>
<div class="form_search-btn">
<button type="button" class="btn-back">Quay Lại</button>
<button type="button" class="btn-submit-search">Tìm Kiếm</button>
</div>
`;
$('.header').html(header);
$('.form_login').html(formlogin);
$('.form_register').html(formregister);
$('.form_search').html(formsearch);
$('.footer').html(footer);
// show form login logout
$('.show-form-register').on('click',()=>{
    $('.form_register').show();
    $('.modal_login-register').show();
    $('#rfullname').focus();
});
$('.show-form-login').on('click',()=>{
    $('.form_login').show();
    $('.modal_login-register').show();
    $('#lemail').focus();
});
function showFormLoginWithA(){
    $('.form_login').show();
    $('.modal_login-register').show();
    $('#lemail').focus();
}

$('.show-form-search').on('click',()=>{
    $('.form_search').show();
    $('.modal_login-register').show();
    $('.form_search-content-input').focus();
});

$('.btn-back').on('click',()=>{
    $('.form_search').hide();
    $('.modal_login-register').hide();
    
})
$('.modal_login-register').on('click',()=>{
    $('.form_login').hide();
    $('.form_register').hide();
    $('.modal_login-register').hide();
    $('.form_search').hide();
    window.location.reload();
});
$('.movetoLogin').on('click',()=> {
    $('.form_login').show();
    $('.form_register').hide();
});
$('.movetoRegister').on('click',()=> {
    $('.form_register').show();
    $('.form_login').hide();
});

// function show password
$('#show_password-checkbox').on('change',(e)=>{
    if(e.target.checked == true){
        $('#lpassword').attr('type','text');
    }else {
        $('#lpassword').attr('type','password');
    }
});
$('#r-show_password-checkbox').on('change',(e)=>{
    if(e.target.checked==true){
        $('#rpassword').attr('type','text');
        $('#rrepassword').attr('type','text');
    }else {
        $('#rpassword').attr('type','password');
        $('#rrepassword').attr('type','password');

    }
})
// function enter

$('.form_search-content-input').on('keyup',(e)=>{
    if(e.keyCode == 13){
        $('.btn-submit-search').click();
    }
});

// move focus form register
let inputRegisterElement = document.querySelectorAll('.rg-input');
inputRegisterElement.forEach((e,index)=>{
    e.onkeyup = (ee)=>{
        if(index == 0){
            if(ee.keyCode == 39 || ee.keyCode == 40){
                inputRegisterElement[index+1].focus();
            }
        }else if(index == inputRegisterElement.length-1){
            if(ee.keyCode == 37 || ee.keyCode == 38){
                inputRegisterElement[index-1].focus();
            }else {
                if(ee.keyCode == 13){
                    $('#btn-submit-register').click();
                }
            }
        }else {
            if(ee.keyCode == 37 || ee.keyCode == 38){
                inputRegisterElement[index-1].focus();
            }else if(ee.keyCode == 39 || ee.keyCode == 40){
                inputRegisterElement[index+1].focus();
            }
        }
    }
})
// move focus form login
let inputLoginElement = document.querySelectorAll('.ll-input');
inputLoginElement.forEach((e,index)=>{
    e.onkeyup = (ee)=>{
       if(index == 0){
            if(ee.keyCode == 39 || ee.keyCode == 40){
                inputLoginElement[index+1].focus();
            }
       }else if(index == 1){
        if(ee.keyCode == 37 || ee.keyCode == 38){
            inputLoginElement[index-1].focus();
        }else if(ee.keyCode == 13){
            $('#btn-submit-login').click();
        }
       }
    }
})

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
function pushSearchToLocal(value){
    localStorage.setItem('search',value);
}
function getSearchFromLocal(){
    return localStorage.getItem('search');
}
function pushCategoryHeader(value){
    localStorage.setItem('category-header',value);
}
// fuction check
function checkEmailUser(email){
    let listUser = getListUserFromLocalStorage();
    for(let i= 0;i<listUser.length;i++){
        if(listUser[i].email == email){
            return true;
        }
    }
    return false;
}
function checkEmail(email) { 
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
    if (!filter.test(email)) { 
        return false; 
    }
    else{ 
        return true; 
    } 
} 
// logout

function logout(){
    let listUser = getListUserFromLocalStorage();
    listUser.forEach(e=>{e.login = false});
    pushListUserToLocalStorage(listUser);
    window.location.reload();
}

// login
function renderLiLogin(){
    let listUser = getListUserFromLocalStorage();
    let checkLogin = false;
    listUser.forEach(e=>{
        if(e.login){
            checkLogin = true;
        }
    })
    if(checkLogin){
        let html = `
                <li class="header_sub-user-item">
                    <a href="./tai-khoan.html" class="header_sub-user-link">Tài Khoản của tôi</a>
                </li>
                <li class="header_sub-user-item">
                    <a href = "#" class = "header_sub-user-link" onclick = "logout()" >Đăng Xuất</a>
                </li>`;
        $('.renderFeatureLogin').html(html);
    }
}
function login(){
    let count = 0;
    let emailElement = document.querySelector('#lemail');
    let emailMessage = emailElement.parentElement.querySelector('.r-form-message');
    if(emailElement.value.trim()){
        if(checkEmail(emailElement.value)){
            emailMessage.innerText = '';
            count++;
        }else {
            emailMessage.innerText = 'Vui lòng nhập email hợp lệ';
        }
    }else {
        emailMessage.innerText = 'Vui lòng nhập trường này';
    }

    let passwordElement = document.querySelector('#lpassword');
    let passwordMessage = passwordElement.parentElement.querySelector('.r-form-message');

    if(passwordElement.value.trim()){
        passwordMessage.innerText = '';
        count++;
    }else {
        passwordMessage.innerText = 'Vui lòng nhập trường này';
    }
    if(count == 2){
        let listUser = getListUserFromLocalStorage();
        listUser.forEach(e=>{
            if(e.email == emailElement.value && e.password == passwordElement.value){
                e.login = true;
                pushListUserToLocalStorage(listUser);
            }
        })
        window.location.reload();
    }
}

//register
function register(){
    let count = 0;
    let fullNameElement = document.querySelector('#rfullname');
    let fullNameMessage = fullNameElement.parentElement.querySelector('.r-form-message');
    if(fullNameElement.value.trim()){
        if(fullNameElement.value.length <10){
            fullNameMessage.innerText = 'Độ dài chưa đủ';
        }else {
            fullNameMessage.innerText = '';
            count++;
        }
    }else {
        fullNameMessage.innerText = 'Vui lòng nhập trường này';
    }

    let emailElement = document.querySelector('#remail');
    let emailMessage = emailElement.parentElement.querySelector('.r-form-message');
    if(emailElement.value.trim()){
        if(checkEmail(emailElement.value)){
            if(checkEmailUser(emailElement.value)){
                emailMessage.innerText = 'Email đã tồn tại trong hệ thống';
            }else {
                emailMessage.innerText = '';
                count++;
            } 
            
        }else {
            emailMessage.innerText = 'Vui lòng nhập email hợp lệ';
        }
    }else {
        emailMessage.innerText = 'Vui lòng nhập trường này';
    }
    let passwordElement = document.querySelector('#rpassword');
    let passwordMessage = passwordElement.parentElement.querySelector('.r-form-message');
    if(passwordElement.value.trim()){
        if(passwordElement.value.length < 8){
            passwordMessage.innerText = 'Mật khẩu phải lớn hơn 8 ký tự';
        }else {
            passwordMessage.innerText = '';
            count++;
        }
        
    }else {
        passwordMessage.innerText = 'Vui lòng nhập trường này';
    }
    let repasswordElement = document.querySelector('#rrepassword');
    let repasswordMessage = repasswordElement.parentElement.querySelector('.r-form-message');
    if(repasswordElement.value.trim()){
        if(repasswordElement.value != passwordElement.value){
            repasswordMessage.innerText = 'Mật khẩu nhập lại không khớp';
        }else {
            repasswordMessage.innerText = '';
            count++;
        }
    }else {
        repasswordMessage.innerText = 'Vui lòng nhập trường này';
    }
    let obj = new Object;
    if(count == 4){
        obj.id = 'c'+createIDAuto()+'_'+createIDAuto();
        obj.login = true;
        obj.password = passwordElement.value;
        obj.email = emailElement.value;
        obj.phone = '';
        obj.fullName = fullNameElement.value;
        obj.cart = [];
        obj.postion = 'customer';
        let listUser = getListUserFromLocalStorage();
        listUser.push(obj);
        pushListUserToLocalStorage(listUser);
        logout();
        alert('Đăng Ký Thành Công')
        window.location.reload();
    }
}
function renderCartHome(){
    let listCart = new Array, listUser = new Array;
    let listProduct = getListProductFromLocalStorage();
    let html = '';
    let total = 0,vat = 0,sum = 0;
    listUser = getListUserFromLocalStorage();
    listUser.forEach(function(e){
            if(e.login){
                listCart = e.cart;
            }
    });
    listCart.forEach(function(e){
        listProduct.forEach(function(ee){
            if(e.id == ee.id){
                total+= parseInt(e.quantity) * parseFloat(ee.price);
                html += `<li class="header-cart-item">
                <div class="row ">
                    <div class="col-3 align-self-center">
                        <div class="product-cart-img">
                            <img src="${ee.img[0]}" alt="">
                        </div>
                    </div>
                    <div class="col-7 align-self-center">
                        <h4 class="product-cart-name" title = "${ee.productName}">
                            ${ee.productName}
                        </h4>
                        <p class="product-description">
                            ${e.quantity} x ${ee.price} đ
                        </p>
                    </div>
                    <div class="col-2 align-self-center">
                        <span onclick = "deleteCart('${e.id}')"><i class="fas fa-trash-alt"></i></span>
                    </div>
                </div>
            </li>`;
            }
        })
    });
    vat = total*20/100;
    sum = vat + total;
    $('.render-cart-home').html(html);
    $('.total-cart').html(total+' đ');
    $('.vat-cart-home').html(vat+' đ');
    $('.sum-cart-home').html(sum + ' đ');
}
function handleAddCart(id){
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
                e.quantity++;
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
            obj.quantity = 1;
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
function deleteCart(id){
    let listUser = getListUserFromLocalStorage();
    let listCart = new Array;
    listUser.forEach(e=>{
        if(e.login){
            listCart = e.cart;
        }
    });
    listCart.forEach((e,index)=>{
        if(e.id == id){
            listCart.splice(index,1);
        }
    });
    listUser.forEach(e=>{
        if(e.login){
            e.cart = listCart;
        }
    });
    pushListUserToLocalStorage(listUser);
    renderCartHome();
}

function search(){
    if($('.form_search-content-input').val().trim() == ''){
        $('.search-message').html('Vui lòng nhập dữ liệu');
    }else {
        pushSearchToLocal($('.form_search-content-input').val().trim());
        window.location = './tim-kiem.html';
    }
    $('.form_search-content-input').on('input',e=>{
        if(e.target.value.trim()!= ''){
        $('.search-message').html('');
        }
    })

}
$('.btn-submit-search').on('click',()=>{
    search();
});

// run
function start(){
    renderLiLogin();
    renderCartHome();
}

start();