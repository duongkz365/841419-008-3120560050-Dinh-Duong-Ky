/*
    ╰☆☆𝓀𝓎̀ Đ𝒾𝓃𝒽☆︵✰
    DKP1202 - SGU

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
function pushOneProduct(id){
    localStorage.setItem('oneProduct',id);
}
function increase(id){
    let listUser = getListUserFromLocalStorage();
    let listCart = new Array;
    listUser.forEach(e=>{
        if(e.login){
            listCart = e.cart;
        }
    });
    listCart.forEach(e=>{
        if(e.id == id){
            e.quantity++;
        }
    })
    listUser.forEach(e=> {
        if(e.login){
            e.cart = listCart;
        }
    })
    pushListUserToLocalStorage(listUser);
    renderListCart();
}

function reduce(id){
    let listUser = getListUserFromLocalStorage();
    let listCart = new Array;
    listUser.forEach(e=>{
        if(e.login){
            listCart = e.cart;
        }
    });
    listCart.forEach(e=>{
        if(e.id == id){
            e.quantity--;
            if(e.quantity<1){
                alert('Số lượng không được nhỏ hơn 1');
                e.quantity = 1;
            }
        }
    })
    listUser.forEach(e=> {
        if(e.login){
            e.cart = listCart;
        }
    })
    pushListUserToLocalStorage(listUser);
    renderListCart();
}



function renderListCart(){
    console.log(1);
    let listCart = new Array, listUser = new Array, listProduct = new Array;
    let html = '';
    listUser = getListUserFromLocalStorage();
    listProduct = getListProductFromLocalStorage();

    listUser.forEach(function(e){
        if(e.login){
            listCart = e.cart;
        }
    })
    listCart.forEach((e)=>{
        listProduct.forEach(ee =>{
            if(e.id == ee.id){
                html+=`<tr>
                <td class="pro-thumbnail">
                <a href="./san-pham.html"><img src="${ee.img[0]}" alt="Product" class = "img-cart-list" onclick = "return pushOneProduct('${ee.id}')"></a>
                </td>
                <td class="pro-title align-self-center">
                     <a href="./san-pham.html" onclick = "return pushOneProduct('${ee.id}')" title = "${ee.productName}" class = "cart-name-product">
                        ${ee.productName}
                     </a>
                </td>
                <td class="pro-price"><span>${ee.price} đ</span></td>
                <td class="pro-quantity">
                    <div class="pro-qty">
                    <button class="dec qtybtn" onclick = "reduce('${ee.id}')">-</button>
                    <input type="number" value="${e.quantity}">
                    <button class="inc qtybtn" onclick = "increase('${ee.id}')">+</button>
                    </div>
                </td>
                <td class="pro-subtotal"><span>${ee.price}</span></td>
                <td class="pro-remove">
                    <button type = "button" onclick = "deleteCartt('${e.id}')"><i class="far fa-trash-alt"></i></button>
                </td>
            </tr>`;
            }
        })
    })
    $('.render-listcart-cart').html(html);
}
function deleteCartt(id){
    console.log("delete")
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
    renderListCart();
    // window.location.reload();
}
function renderSummary(){

}


(function start(){
renderListCart();
})()