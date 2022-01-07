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
function getCategoryHeader(){
    return localStorage.getItem('category-header');
}


function returnCategory(){
    let value = getCategoryHeader();
    let obj = new Object;
    if(value == '1'){
        obj.category = 'office';
        obj.title = 'Văn Phòng';
    }
    if(value == '1.1'){
        obj.category = 'office';
        obj.title = 'Sofa';
    }
    if(value == '1.2'){
        obj.category = 'office';
        obj.title = 'Bàn Trà';
    }
    if(value == '1.3'){
        obj.category = 'office';
        obj.title = 'Ghế Thư Giãn';
    }
    if(value == '1.4'){
        obj.category = 'office';
        obj.title = 'Tủ Kệ';
    }
    if(value == '2'){
        obj.category = 'kitchen';
        obj.title = 'Phòng Ăn';
    }
    if(value == '2.1'){
        obj.category = 'kitchen';
        obj.title = 'Bàn Ăn Thông Minh';
    }
    if(value == '2.2'){
        obj.category = 'kitchen';
        obj.title = 'Ghế Ăn';
    }
    if(value == '3'){
        obj.category = 'bedroom';
        obj.title = 'Phòng Ngủ';
    }
    if(value == '3.1'){
        obj.category = 'bedroom';
        obj.title = 'Phòng Ngủ Người Lớn';
    }
    if(value == '3.2'){
        obj.category = 'bedroom';
        obj.title = 'Phòng Ngủ Trẻ Em';
    }
    return obj;
}

function renderHead(){
    let obj = returnCategory();
    $('.banner_shop-title-h2').html(obj.title);
    $('.banner_title-span').html(obj.title);
}
(function start(){
    renderHead();
    
})()
