




function pushCategoryToLocalStorage(array){
    localStorage.setItem('c',JSON.stringify(array));
}
function getCategoryFromLocalStorage(){
    return JSON.parse(localStorage.getItem('c'));
}
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
function pushSortToLocalStorage(array){
    localStorage.setItem('s',JSON.stringify(array));
}
function getSortFromLocalStorage(){
    return JSON.parse(localStorage.getItem('s'));
}
function pushOneProduct(id){
    localStorage.setItem('oneProduct',id);
}
function getOneProduct(){
    return localStorage.getItem('oneProduct');
}


function pushConditionAll(object){
    localStorage.setItem('sort_all',JSON.stringify(object));
}
function getConditionAll(){
    return JSON.parse(localStorage.getItem('sort_all'));
}

function createConditionAll(ascending,decrease,category,range,valueRange){
    this.ascending = ascending;
    this.decrease = decrease;
    this.category = category;
    this.range = range;
    this.valueRange = valueRange;
}
function unique(arr) {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
      if (newArr.indexOf(arr[i]) === -1) {
        newArr.push(arr[i])
      }
    }
    return newArr
}
let obj = new createConditionAll(true,false,[],false,[12,12]);
pushConditionAll(obj);
//initialize the first list
function createIDAuto(){
    return Math.floor(Math.random()*100); 
}

function returnListProduct(){
    let listProduct = getListProductFromLocalStorage();
    return listProduct;
}


function ascendingMoney(array){
    for(let i = 0;i<array.length-1;i++){
        for(let j = i+1;j<array.length;j++){
            if(array[i].price > array[j].price){
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}
function decreaseMoney(array){
    for(let i = 0;i<array.length-1;i++){
        for(let j = i+1;j<array.length;j++){
            if(array[i].price < array[j].price){
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}



// h??m tr??? v??? danh s??ch s???n ph???m sau khi ???? l???c c??c ??i???u ki???n
function returnlistSortAll(){
    let result = new Array;
    let listProduct = getListProductFromLocalStorage();
    let condition = getConditionAll();
    let ascending = condition.ascending;
    let decrease = condition.decrease;
    let category = condition.category;
    let range = condition.range;
    let valueRange = condition.valueRange;

    if(category.length==0){  // s???p x???p t???t c??? s???n ph???m ki???m ???????c
        if(range){   // s???p x???p theo kho???ng gi??
            let range1 = valueRange[0];
            let range2 = valueRange[1];
            listProduct.forEach(e=>{
                if(e.price >= range1 && e.price<=range2){
                    result.push(e);
                }
            });
            if(!ascending && !decrease){
                return result;
            }else if(ascending && !decrease){
                return ascendingMoney(result);
            }else if(!ascending && decrease){
                return decreaseMoney(result);
            }
        }else {  // (T???t c??? s???n ph???m) s???p x???p kh??ng theo kho???ng gi??
            result = listProduct;
            if(!ascending && !decrease){
                return result;
            }else if(ascending && !decrease){
                return ascendingMoney(result);
            }else if(!ascending && decrease){
                return decreaseMoney(result);
            }
        }
    }else { // s???p x???p theo danh m???c s???n ph???m
        // l???y danh s??ch s???n ph???m theo danh m???c
        category.forEach(e=>{           // l???y danh s??ch s???n ph???m theo danh m???c
            listProduct.forEach(ee=>{
                if(e ==ee.category){
                    result.push(ee);
                }
            })
        })
        if(range){   // s???p x???p theo kho???ng gi??
            let range1 = valueRange[0];
            let range2 = valueRange[1];
            let result2= new Array;
            result.forEach(e=>{
                if(e.price >=range1 && e.price <= range2){
                    result2.push(e);
                }
            })
            if(!ascending && !decrease){
                return result2;
            }else if(ascending && !decrease){
                return ascendingMoney(result2);
            }else if(!ascending && decrease){
                return decreaseMoney(result2);
            }
        }else {   // (theo danh m???c s???n ph???m)  s???p x???p kh??ng theo kho???ng gi??
            if(!ascending && !decrease){
                return result;
            }else if(ascending && !decrease){
                return ascendingMoney(result);
            }else if(!ascending && decrease){
                return decreaseMoney(result);
            }
        }
    } 
}


function renderPageSearch(page){
    let html = '',html2 = '';
    let listProduct = returnlistSortAll();  // l???y danh s??ch c??c s???n ph???m sau khi ???? x??? l??
    let num = Math.ceil(listProduct.length/12);
    let list = listProduct.slice(
        (page - 1) * 12,
        (page - 1) * 12 + 12
    );
    list.forEach(function(e){
        html+= `<div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
        <div class="product_image">
             <a href="./san-pham.html" onclick = "return pushOneProduct('${e.id}')">
                 <img src="${e.img[0]}" alt="" class ="product-image-img">
             </a>
        </div>
        <div class="product_content">
             <h3 class="product_content-title" title = "${e.productName}">
                 ${e.productName}
             </h3>
             <p class="product_content-price">
                 <span class="current_cost">${e.price} VND</span>
                 <span class="oldcost">${e.oldprice} VND</span>
             </p>
        </div>
    </div>`;
    })
    for(let i = 1;i<=num;i++){
        if(i == page){
            html2+= `<li class="product-page-item all-list-page-active" onclick = "renderPageSearch(${i})">${i}</li>`;
        }else {
            html2+= `<li class="product-page-item" onclick = "renderPageSearch(${i})">${i}</li>`;
        }
    }
    $('.product-page-list').html(html2);
    $('.product-render-all').html(html);
    
}

let allCheckbox = document.querySelectorAll('.checkbox-product');

    // duy???t qua m???ng checkbox
    allCheckbox.forEach(e=>{
        // n???u thay ?????i true, false th?? x??? l??
        let category = new Array;  // m???ng k???t qu??? danh m???c
        e.onchange = ()=>{
            if(e.classList[0] == 'all'){
                if(e.checked){
                    allCheckbox.forEach(k=>{
                        k.checked = true;
                    })
                }else {
                    allCheckbox.forEach(k=>{
                        k.checked = false;
                    })
                }
                category = [];
            }else {  // ch???n danh m???c kh??c
                let count = 0;
                category = [];
                allCheckbox.forEach(l=>{
                    if(l.checked){
                        category.push(l.classList[0]);
                    }
                });
                allCheckbox.forEach(m=>{
                    if(m.checked == true && m.classList[0]!='all'){
                        count++;
                    }
                })
                if(count!=3){
                    allCheckbox.forEach(b=>{
                        if(b.classList[0]=='all'){
                            b.checked = false;
                        }
                    })
                }else {
                    allCheckbox.forEach(b=>{
                        if(b.classList[0]=='all'){
                            b.checked = true;
                        }
                    })
                }

            }
            unique(category);
            let condition = getConditionAll();
            condition.category = category;
            pushConditionAll(condition);
            renderPageSearch(1);
        }
});

$('#sortby').on('change',(e)=>{
    let condition = getConditionAll();
    if(e.target.value==0){
        condition.ascending = false;
        condition.decrease = false;
    }else if(e.target.value==1){
        condition.ascending = true;
        condition.decrease = false;
    }else if(e.target.value==2){   
        condition.ascending = false;
        condition.decrease = true;
    }
    pushConditionAll(condition);
    renderPageSearch(1);
});

$('.btn-apply-filter-cost').on('click',()=>{
    let vfrom = parseFloat($('#filter-cost-from').val());
    let vto = parseFloat($('#filter-cost-to').val());
    if(!vfrom || !vto){
        alert('Vui l??ng nh???p d??? li???u');
    }else {
        if(vfrom > vto){
            alert('Vui l??ng nh???p gi?? tr??? sau l???n h??n ho???c b???ng gi?? tr??? tr?????c')
        }else {
            let condition = getConditionAll();
            condition.range = true;
            condition.valueRange[0] = vfrom;
            condition.valueRange[1] = vto;
            pushConditionAll(condition);
            renderPageSearch(1);
        }
    }
    renderFilter();
})


function renderFilter(){
    let condition = getConditionAll();
    
    if(condition.range == true){
        $('.message-filter-range').html('??ang ??p d???ng l???c s???n ph???m theo kho???ng gi??  <div class="cancel-filter-range" onclick = "cancelFilterRange()">H???y B???</div>' );
    }else {
        $('.message-filter-range').html('');
    }
}

function cancelFilterRange(){
    let condition = getConditionAll();
    condition.range = false;
    pushConditionAll(condition);
    renderPageSearch(1);
    renderFilter();
    $('.filter-cost-input').val('');
}

function renderQuantityCategory(){
    let listProduct = getListProductFromLocalStorage();
    let office = 0;
    let kitchen = 0;
    let bedroom = 0;
    listProduct.forEach(e=>{
        if(e.category == 'bedroom'){
            bedroom++;
        }else if(e.category == 'kitchen'){
            kitchen++;
        }else if(e.category == 'office'){
            office++;
        }
    })
    $('.quantity-all').html('('+listProduct.length+')');
    $('.quantity-office').html('('+office+')');
    $('.quantity-kitchen').html('('+kitchen+')');
    $('.quantity-bedroom').html('('+bedroom+')');
}


function start(){
    renderQuantityCategory();
    renderPageSearch(1);

}



start();