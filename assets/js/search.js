







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
function pushSearchToLocal(value){
    localStorage.setItem('search',value);
}
function getSearchFromLocal(){
    return localStorage.getItem('search');
}
function pushConditionSearch(object){
    localStorage.setItem('sort_search',JSON.stringify(object));
}
function getConditionSearch(){
    return JSON.parse(localStorage.getItem('sort_search'));
}
function pushOneProduct(id){
    localStorage.setItem('oneProduct',id);
}
function getOneProduct(){
    return localStorage.getItem('oneProduct');
}

function createConditionSearch(ascending,decrease,category,range,valueRange){
    this.ascending = ascending;
    this.decrease = decrease;
    this.category = category;
    this.range = range;
    this.valueRange = valueRange;
}


function searchStringInString(string1,string2){
    let search1 = string1.toUpperCase();
    let search2 = string2.toUpperCase();
    let position = search2.indexOf(search1);
    return position;
}


// trả về danh sách sản phẩm có từ khóa đã nhập
function returnListSearch(){
    let result = new Array;
    let valueSearch = getSearchFromLocal();
    let listProduct = getListProductFromLocalStorage();
    listProduct.forEach(e=>{
        if(searchStringInString(valueSearch,e.productName)!=-1){
            result.push(e);
        }
    });
    return result;
}
// hàm chỉnh sửa danh sách tăng lên theo giá tiền

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

// hàm chỉnh sửa danh sách giảm theo giá tiền

// trả về danh sách sản phẩm, sau khi lọc các điều kiện sắp xếp
function returnlistSortSearch(){
    let result = new Array;
    let listProduct = returnListSearch();
    let condition = getConditionSearch();
    let ascending = condition.ascending;
    let decrease = condition.decrease;
    let category = condition.category;
    let range = condition.range;
    let valueRange = condition.valueRange;

    if(category.length==0){  // sắp xếp tất cả sản phẩm kiếm được
        if(range){   // sắp xếp theo khoảng giá
            let range1 = valueRange[0];
            let range2 = valueRange[1];
            console.log(listProduct)
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
        }else {  // (Tất cả sản phẩm) sắp xếp không theo khoảng giá
            result = listProduct;
            if(!ascending && !decrease){
                return result;
            }else if(ascending && !decrease){
                return ascendingMoney(result);
            }else if(!ascending && decrease){
                return decreaseMoney(result);
            }
        }
    }else { // sắp xếp theo danh mục sản phẩm
        // lấy danh sách sản phẩm theo danh mục
        category.forEach(e=>{           // lấy danh sách sản phẩm theo danh mục
            listProduct.forEach(ee=>{
                if(e ==ee.category){
                    result.push(ee);
                }
            })
        })
        if(range){   // sắp xếp theo khoảng giá
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
        }else {   // (theo danh mục sản phẩm)  sắp xếp không theo khoảng giá
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
    let listProduct = returnlistSortSearch();  // lấy danh sách các sản phẩm sau khi đã xử lý
    let num = Math.ceil(listProduct.length/12);
    let list = listProduct.slice(
        (page - 1) * 12,
        (page - 1) * 12 + 12
    );
    list.forEach(function(e){
        html+= `<div class="col-xl-4 col-lg-4">
        <div class="product_image">
             <a href="./san-pham.html" onclick = "return pushOneProduct('${e.id}')">
                 <img src="${e.img[0]}" alt="" class="img_search-product">
             </a>
        </div>
        <div class="product_content">
             <h3 class="product_content-title">
                 ${e.productName}
             </h3>
             <p class="product_content-price">
                 <span class="current_cost">${e.price}</span>
                 <span class="oldcost">${e.oldprice}</span>
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

function renderSearch(){
    let listProduct = returnListSearch();
    let value = getSearchFromLocal();
    $('.title-search').html('Tìm thấy '+listProduct.length+' sản phẩm với từ khóa \''+ value+'\'');
    let office = 0;
    let bedroom = 0;
    let kitchen = 0;
    listProduct.forEach(e=>{
        if(e.category == 'office'){
            office++;
        }else if(e.category =='bedroom'){
            bedroom++;
        }else if(e.category == 'kitchen'){
            kitchen++;
        }
    })
    $('.quantity-kitchen').html('('+kitchen+')');
    $('.quantity-bedroom').html('('+bedroom+')');
    $('.quantity-office').html('('+office+')');
    $('.quantity-all').html('('+listProduct.length+')');
}
// hàm unique lọc trùng nhau trong mảng
function unique(arr) {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
      if (newArr.indexOf(arr[i]) === -1) {
        newArr.push(arr[i])
      }
    }
    return newArr
}

let allCheckbox = document.querySelectorAll('.checkbox-product');

    // duyệt qua mảng checkbox
    allCheckbox.forEach(e=>{
        // nếu thay đổi true, false thì xử lý
        let category = new Array;  // mảng kết quả danh mục
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
            }else {  // chọn danh mục khác
                category = [];
                allCheckbox.forEach(l=>{
                    if(l.checked){
                        category.push(l.classList[0]);
                    }
                })



            }
            unique(category)
            let condition = getConditionSearch();
            condition.category = category;
            pushConditionSearch(condition);
            renderPageSearch(1);
        }
});


$('#sortby').on('change',(e)=>{
    let condition = getConditionSearch();
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
    pushConditionSearch(condition);
    renderPageSearch(1);
});

$('.btn-apply-filter-cost').on('click',()=>{
    let vfrom = parseFloat($('#filter-cost-from').val());
    let vto = parseFloat($('#filter-cost-to').val());
    if(!vfrom || !vto){
        alert('Vui lòng nhập dữ liệu');
    }else {
        if(vfrom > vto){
            alert('Vui lòng nhập giá trị sau lớn hơn hoặc bằng giá trị trước')
        }else {
            let condition = getConditionSearch();
            condition.range = true;
            condition.valueRange[0] = vfrom;
            condition.valueRange[1] = vto;
            pushConditionSearch(condition);
            renderPageSearch(1);
        }
    }
    renderFilter();
})


function renderFilter(){
    let condition = getConditionSearch();
    
    if(condition.range == true){
        $('.message-filter-range').html('Đang áp dụng lọc sản phẩm theo khoảng giá  <div class="cancel-filter-range" onclick = "cancelFilterRange()">Hủy Bỏ</div>' );
    }else {
        $('.message-filter-range').html('');
    }
}



function cancelFilterRange(){
    let condition = getConditionSearch();
    condition.range = false;
    pushConditionSearch(condition);
    renderPageSearch(1);
    renderFilter();
    $('.filter-cost-input').val('');
}
function start(){
    renderSearch();
    
    // khởi tạo các điều kiện bình thường
    let obj = new createConditionSearch(false,false,[],false,[0,0]);
    pushConditionSearch(obj);
    renderPageSearch(1);
}

start();