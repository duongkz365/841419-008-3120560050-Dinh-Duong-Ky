


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

function cleatActiveList(){
    let listActive = document.querySelectorAll('.profile-feature-item');
    listActive.forEach(e=>{
        if(e.classList.remove('active_list-feature'));
    })
}
let  hideAllSection = ()=>{
    $('.sec-2-tab-1,.sec-2-tab-2,.sec-2-tab-3,.sec-2-tab-4,.sec-2-tab-5').hide();
}

function showFeature(){
    let listActive = document.querySelectorAll('.profile-feature-item');
    listActive.forEach(e=> {
        e.onclick = ee=>{
            cleatActiveList();
            ee.target.classList.add('active_list-feature');       
        }
    })
}
function renderProfile(){
    let listUser = getListUserFromLocalStorage();
    listUser.forEach(e=>{
        if(e.login){
            $('#p_name').html(e.fullName);
            $('#p_email').html(e.email);
            $('#p_phone').html(e.phone);
            $('#p_day').html(e.birthday);
            $('.banner_name').html(e.fullName);
            $('#title-main').html(e.fullName);
        }
    })
}

function changePassword(){
    let listUser = getListUserFromLocalStorage();
    let checkLogin = false;
    let oldpass = document.getElementById('tab-3-oldPassword');
    let newpass = document.getElementById('tab-3-newPassword');
    let renewpass = document.getElementById('tab-3-reNewPassword');
    listUser.forEach((e)=>{
        if(e.login){
            checkLogin = true;
            let count = 0;
            if(oldpass.value.trim() == ''){
                oldpass.parentElement.querySelector('span').innerText = 'Vui lòng nhập trường này';
            }else { 
                if(e.password == oldpass.value){
                    oldpass.parentElement.querySelector('span').innerText = '';
                    count++;
                }else {
                    oldpass.parentElement.querySelector('span').innerText = 'Mật khẩu cũ không chính xác';
                }
            }
            if(newpass.value.trim() == ''){
                newpass.parentElement.querySelector('span').innerText = 'Vui lòng nhập trường này';
            }else {
                if(newpass.value.length <8){
                    newpass.parentElement.querySelector('span').innerText = 'Mật khẩu phải lớn hơn 8 ký tự';
                }else {
                    newpass.parentElement.querySelector('span').innerText = '';
                    count++;
                }
                
            }
            if(renewpass.value.trim() == ''){
                renewpass.parentElement.querySelector('span').innerText = 'Vui lòng nhập trường này';
            }else {
                if(renewpass.value != newpass.value){
                    renewpass.parentElement.querySelector('span').innerText = 'Mật khẩu nhập lại không chính xác';
                }else {
                    renewpass.parentElement.querySelector('span').innerText = '';
                    count++;
                }
               
            }
            if(count == 3){
                e.password = newpass.value;
                pushListUserToLocalStorage(listUser);
                alert('Đổi mật khẩu thành công');
                window.location.reload();
            }
        }
    });
}
function renderCart(){
    let cart = new Array;
    let listProduct = getListProductFromLocalStorage();
    let html  = '';

    let listUser = getListUserFromLocalStorage();
    listUser.forEach(e=>{
        if(e.login){
            cart = e.cart;
        }
    })
    cart.forEach(e=> {
        listProduct.forEach(ee=>{
            if(e.id == ee.id){
                html +=`<li class="listCart-item align-self-center">
                <div class="row">
                    <div class="col-xl-4 col-md-12">
                        <div class="Cartname-left">
                            <div class="row">
                                <div class="col-xl-3 ">
                                    <span class="cartname-img">
                                        <img src="${ee.img[0]}" alt="" class="cartname-img-i">
                                    </span>
                                </div>
                                <div class="col-xl-9  align-self-center">
                                    <span class="cartname-name">
                                        ${ee.productName}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-8 ">
                        <div class="Cartname_right align-self-center">
                            <div class="row row-height">
                                <div class="col col-xl-2 ">
                                    <span class="cartname-price">
                                        Giá: ${ee.price}đ
                                    </span>
                                </div>
                                <div class="col col-xl-4 ">
                                    <div class="cartname-quantity flex-input-quantity">
                                        <span>SL</span>
                                        <input type="number" name="number" class="cart_input-quantity" value="${e.quantity}" class="cartname-quantity-input" oninput ="changeQuantiyCart('${ee.id}')">
                                    </div>
                                </div>
                                <div class="col col-xl-3 ">
                                    <span class="cartname-sumprice">
                                        Tổng: ${e.quantity *ee.price}đ
                                    </span>
                                </div>
                                <div class="col col-xl-3 ">
                                        <span class="cartname_delete" onclick = "deleteCartt('${e.id}')">Xóa</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li> `;
            }
        })
    });
    $('.listCart-list').html(html);
}

function changeQuantiyCart(id){
    let listUser = getListUserFromLocalStorage();
    let listCart = new Array;
    listUser.forEach(e=>{
        if(e.login){
            listCart = e.cart;
            listCart.forEach(ee=>{
                if(ee.id == id){
                    if($('.cart_input-quantity').val()<1){
                        ee.quantity = 1;
                    }else {
                        ee.quantity = $('.cart_input-quantity').val();
                    }
                }
            });
            e.cart = listCart;
            pushListUserToLocalStorage(listUser);
        }
    });

    renderCart();
    renderSectionPay();
    let val = $('.cart_input-quantity').val();
    $('.cart_input-quantity').focus();
    $('.cart_input-quantity').val("");
    $('.cart_input-quantity').val(val);

}
function deleteCartt(id){
    let listUser = getListUserFromLocalStorage();
    let listCart = new Array;
    listUser.forEach(e=>{
        if(e.login){
            listCart = e.cart;
        }
    });
    listCart.forEach((e,i)=>{
        if(e.id == id){
            listCart.splice(i,1);
        }
    })
    listUser.forEach(e=> {
        if(e.login){
            e.cart = listCart;
        }
    })
    pushListUserToLocalStorage(listUser);
    renderCart();
    window.location.reload();
}
function renderSectionPay(){
    let listUser = getListUserFromLocalStorage();
    let listProduct = getListProductFromLocalStorage();
    let checkLogin = false;
    listUser.forEach(e=>{
        if(e.login){
            checkLogin = true;
            if(e.cart.length == 0){
                $('.sec-2-pay').html('Bạn chưa có sản phẩm nào trong giỏ hàng');
            }else {
                let quantity = 0;
                let sum = 0;
                let listcart = e.cart;
                listcart.forEach(e=>{
                    quantity += e.quantity;
                    listProduct.forEach(ee=>{
                        if(e.id == ee.id){
                            sum +=e.quantity* ee.price;
                        }
                    })
                });
                $('.sec-2-pay').html(`<span class="quantity-sum">Tổng tiền (${quantity} sản phẩm)</span>
                <span class="sum-cost">${sum} VND</span>
                <a href = 'mua-hang.html' class="btn-sum-now">Mua ngay</a>`);
            }
        }
    })
    if(!checkLogin){
        $('.sec-2-pay').html('Vui lòng đăng nhập để xem giỏ hàng');
    }
}

$('.btn-sum-now').on('click',()=>{
    window.location = 'mua-hang.html';
})

$('#info-item').on('click',()=>{
    hideAllSection();
    $('.sec-2-tab-1').show();
})
$('#cart-item').on('click',()=>{
    hideAllSection();
    $('.sec-2-tab-2').show();
})
$('#password-item').on('click',()=>{
    hideAllSection();
    $('.sec-2-tab-3').show();
})

$('#order-item').on('click',()=>{
    hideAllSection();
    $('.sec-2-tab-5').show();
})



function renderOrder(){
    let html = `<li class="p-order-item-head border-bottom-li">
    <div class="row p-order-item-head-grid">
        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3">Mã Đơn Hàng</div>
        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3">Ngày Mua</div>
        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3">Số tiền</div>
        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3">Xem Chi Tiết</div>
    </div>
</li>`;


    let listUser = getListUserFromLocalStorage();
    let listOrder = new Array;
    listUser.forEach(e=>{
        if(e.login){
            listOrder = e.order;
        }
    });
    listOrder.forEach(e=>{
        let listdetail = e.invoiceDetails;
        html2= ``;
        listdetail.forEach(ee=> {
            html2+=`
            <li class="order-detail-item">
            <div class="row row-order">
                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3">${ee.idProduct}</div>
                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3">${ee.productName}</div>
                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3">${ee.quantity}</div>
                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3">${ee.total}</div>
            </div>
        </li>
            `;
        })
        html+=`<li class="p-order-item border-bottom-li">
        <div class="row p-order-item-detail-p">
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3">${e.id}</div>
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3">${e.date}</div>
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3">${e.total}</div>
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 ">
            <span class = "btn-view-detail"><i class="fas fa-sort-down"></i></span>
            </div>
        </div>
        <div class="order-detail">
            <ul class="order-detail-list">
                <li class="order-detail-item">
                    <div class="row row-order row-order-head">
                        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3">Mã SP</div>
                        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3">Tên SP</div>
                        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3">SL</div>
                        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3">Giá</div>
                    </div>
                </li>
                ${html2}
            </ul>
        </div>
    </li>`;
    })
    
    $("#p-order-list").html(html);
}




function start(){
    renderProfile();
    showFeature();
    renderCart();
    renderOrder();
    renderSectionPay();
}
start();



let btndetail = document.querySelectorAll('.btn-view-detail');

btndetail.forEach(e=>{
    e.onclick = function(ee){
        let liElement = ee.target.parentElement.parentElement.parentElement.parentElement;
        let orderElement  = liElement.querySelector('.order-detail');
        if(orderElement.style.display == ''){
            orderElement.style.display = 'block';
            ee.target.style = 'transform: rotate(180deg)';
        }else if(orderElement.style.display == 'block'){
            orderElement.style.display = 'none';
            ee.target.style = 'transform: rotate(360deg)';
        }else if(orderElement.style.display = 'none'){
            orderElement.style.display = 'block';
            ee.target.style = 'transform: rotate(180deg)';
        }
    }
});



