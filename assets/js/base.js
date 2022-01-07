






function createProduct(id,productName,price,oldprice,quantity,category,img,description){
    this.id = id;
    this.productName = productName;
    this.price = price;
    this.oldprice = oldprice;
    this.quantity = quantity;
    this.category = category;
    this.img = img;
    this.description = description;
}
function createUser(id,login,password,email,phone,fullName,cart,position,order,birthday){
    this.id = id;
    this.login = login;
    this.password = password;
    this.email = email;
    this.phone = phone;
    this.fullName = fullName;
    this.cart = cart;
    this.position = position;
    this.order = order;
    this.birthday = birthday;
}
// function with localStorage
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
function getOneProduct(){
    return localStorage.getItem('oneProduct');
}
//initialize the first list
function createIDAuto(){
    return Math.floor(Math.random()*100); 
}
// initialize the user list
var listUser = [
   new createUser('1',false,'kydinh123','dinhky2468@gmail.com','03333333','Đinh Kỳ',[],'admin',[],'12/12/2020'),
   new createUser('2',false,'kydinh124','dinhky2469@gmail.com','03333333','Kỳ Đinh', [],'admin',[],'12/12/2020'),
   new createUser('3',false,'kydinh125','dinhky2469@gmail.com','03333333','Kỳ Đinh', [],'admin',[],'12/12/2020'),
   new createUser('4',false,'kydinh126','dinhky2469@gmail.com','03333333','Kỳ Đinh', [],'customer',[],'12/12/2020'),
   new createUser('5',false,'kydinh127','dinhky2469@gmail.com','03333333','Kỳ Đinh', [],'customer',[],'12/12/2020'),
   new createUser('6',false,'kydinh128','dinhky2469@gmail.com','03333333','Kỳ Đinh', [],'customer',[],'12/12/2020'),
   new createUser('7',false,'kydinh129','dinhky2469@gmail.com','03333333','Kỳ Đinh', [],'customer',[],'12/12/2020'),
   new createUser('8',false,'kydinh130','dinhky2469@gmail.com','03333333','Kỳ Đinh', [],'customer',[],'12/12/2020'),

];

// initialize the product list
let listProduct = [
    new createProduct('1','Bộ bàn ghế nhà bếp',11000,124000,120,'kitchen',['assets/img/product/kitchen/bobanghenhabep.jpg'],'Lorem Ipsum chỉ đơn giản là văn bản giả của ngành in ấn và sắp chữ. Lorem Ipsum đã trở thành văn bản giả tiêu chuẩn của ngành kể từ những năm 1500, khi một nhà in không xác định lấy một dãy loại và xáo trộn nó để tạo thành một cuốn sách mẫu. Nó đã tồn tại không chỉ năm thế kỷ, mà còn là bước nhảy vọt trong lĩnh vực sắp chữ điện tử, về cơ bản vẫn không thay đổi.'),
    new createProduct('2','Giường ngủ siêu xịn',15000,124000,120,'bedroom',['assets/img/product/bedroom/giuong01.jpg'],'Lorem Ipsum chỉ đơn giản là văn bản giả của ngành in ấn và sắp chữ. Lorem Ipsum đã trở thành văn bản giả tiêu chuẩn của ngành kể từ những năm 1500, khi một nhà in không xác định lấy một dãy loại và xáo trộn nó để tạo thành một cuốn sách mẫu. Nó đã tồn tại không chỉ năm thế kỷ, mà còn là bước nhảy vọt trong lĩnh vực sắp chữ điện tử, về cơ bản vẫn không thay đổi.'),
    new createProduct('3','Tủ đầu giường siêu to khổng lồ',12000,124000,120,'bedroom',['assets/img/product/bedroom/tudaugiuong.jpg'],'Lorem Ipsum chỉ đơn giản là văn bản giả của ngành in ấn và sắp chữ. Lorem Ipsum đã trở thành văn bản giả tiêu chuẩn của ngành kể từ những năm 1500, khi một nhà in không xác định lấy một dãy loại và xáo trộn nó để tạo thành một cuốn sách mẫu. Nó đã tồn tại không chỉ năm thế kỷ, mà còn là bước nhảy vọt trong lĩnh vực sắp chữ điện tử, về cơ bản vẫn không thay đổi.'),
    new createProduct('4','Tủ ti vi trong phòng ngủ',121000,124000,120,'bedroom',['assets/img/product/bedroom/tutivitrongphong.jpg'],'Lorem Ipsum chỉ đơn giản là văn bản giả của ngành in ấn và sắp chữ. Lorem Ipsum đã trở thành văn bản giả tiêu chuẩn của ngành kể từ những năm 1500, khi một nhà in không xác định lấy một dãy loại và xáo trộn nó để tạo thành một cuốn sách mẫu. Nó đã tồn tại không chỉ năm thế kỷ, mà còn là bước nhảy vọt trong lĩnh vực sắp chữ điện tử, về cơ bản vẫn không thay đổi.'),
    new createProduct('5','Tủ Buffet small Parquet',120400,124000,120,'bedroom',['assets/img/product/bedroom/tu01.jpg'],'Lorem Ipsum chỉ đơn giản là văn bản giả của ngành in ấn và sắp chữ. Lorem Ipsum đã trở thành văn bản giả tiêu chuẩn của ngành kể từ những năm 1500, khi một nhà in không xác định lấy một dãy loại và xáo trộn nó để tạo thành một cuốn sách mẫu. Nó đã tồn tại không chỉ năm thế kỷ, mà còn là bước nhảy vọt trong lĩnh vực sắp chữ điện tử, về cơ bản vẫn không thay đổi.'),
    new createProduct('6','Giường nan white Oak 1m6',12000,124000,120,'bedroom',['assets/img/product/bedroom/giuong02.jpg'],'Lorem Ipsum chỉ đơn giản là văn bản giả của ngành in ấn và sắp chữ. Lorem Ipsum đã trở thành văn bản giả tiêu chuẩn của ngành kể từ những năm 1500, khi một nhà in không xác định lấy một dãy loại và xáo trộn nó để tạo thành một cuốn sách mẫu. Nó đã tồn tại không chỉ năm thế kỷ, mà còn là bước nhảy vọt trong lĩnh vực sắp chữ điện tử, về cơ bản vẫn không thay đổi.'),
    new createProduct('7','Giường nan Queensize Oak 1m6',12000,124000,120,'bedroom',['assets/img/product/bedroom/giuong03.jpg'],'Lorem Ipsum chỉ đơn giản là văn bản giả của ngành in ấn và sắp chữ. Lorem Ipsum đã trở thành văn bản giả tiêu chuẩn của ngành kể từ những năm 1500, khi một nhà in không xác định lấy một dãy loại và xáo trộn nó để tạo thành một cuốn sách mẫu. Nó đã tồn tại không chỉ năm thế kỷ, mà còn là bước nhảy vọt trong lĩnh vực sắp chữ điện tử, về cơ bản vẫn không thay đổi.'),
    new createProduct('8','Giường nan Queensize Oak 1m8',12000,124000,120,'bedroom',['assets/img/product/bedroom/giuong03.jpg'],'Lorem Ipsum chỉ đơn giản là văn bản giả của ngành in ấn và sắp chữ. Lorem Ipsum đã trở thành văn bản giả tiêu chuẩn của ngành kể từ những năm 1500, khi một nhà in không xác định lấy một dãy loại và xáo trộn nó để tạo thành một cuốn sách mẫu. Nó đã tồn tại không chỉ năm thế kỷ, mà còn là bước nhảy vọt trong lĩnh vực sắp chữ điện tử, về cơ bản vẫn không thay đổi.'),
    new createProduct('9','Giường nan Queensize Oak 2m',12000,124000,120,'bedroom',['assets/img/product/bedroom/giuong03.jpg'],'Lorem Ipsum chỉ đơn giản là văn bản giả của ngành in ấn và sắp chữ. Lorem Ipsum đã trở thành văn bản giả tiêu chuẩn của ngành kể từ những năm 1500, khi một nhà in không xác định lấy một dãy loại và xáo trộn nó để tạo thành một cuốn sách mẫu. Nó đã tồn tại không chỉ năm thế kỷ, mà còn là bước nhảy vọt trong lĩnh vực sắp chữ điện tử, về cơ bản vẫn không thay đổi.'),
    new createProduct('10','Bộ chăn drap Caro B094',12000,124000,120,'bedroom',['assets/img/product/bedroom/changoi01.jpg'],'Lorem Ipsum chỉ đơn giản là văn bản giả của ngành in ấn và sắp chữ. Lorem Ipsum đã trở thành văn bản giả tiêu chuẩn của ngành kể từ những năm 1500, khi một nhà in không xác định lấy một dãy loại và xáo trộn nó để tạo thành một cuốn sách mẫu. Nó đã tồn tại không chỉ năm thế kỷ, mà còn là bước nhảy vọt trong lĩnh vực sắp chữ điện tử, về cơ bản vẫn không thay đổi.'),
    new createProduct('11','Tủ quần áo siêu cấp vjppro',1200230,124000,120,'bedroom',['assets/img/product/bedroom/tuquanao01.jpg'],'Lorem Ipsum chỉ đơn giản là văn bản giả của ngành in ấn và sắp chữ. Lorem Ipsum đã trở thành văn bản giả tiêu chuẩn của ngành kể từ những năm 1500, khi một nhà in không xác định lấy một dãy loại và xáo trộn nó để tạo thành một cuốn sách mẫu. Nó đã tồn tại không chỉ năm thế kỷ, mà còn là bước nhảy vọt trong lĩnh vực sắp chữ điện tử, về cơ bản vẫn không thay đổi.'),
    new createProduct('12','Tủ đầu giường Los Angeles',1223000,124000,120,'bedroom',['assets/img/product/bedroom/tudaugiuong01.jpg'],'Lorem Ipsum chỉ đơn giản là văn bản giả của ngành in ấn và sắp chữ. Lorem Ipsum đã trở thành văn bản giả tiêu chuẩn của ngành kể từ những năm 1500, khi một nhà in không xác định lấy một dãy loại và xáo trộn nó để tạo thành một cuốn sách mẫu. Nó đã tồn tại không chỉ năm thế kỷ, mà còn là bước nhảy vọt trong lĩnh vực sắp chữ điện tử, về cơ bản vẫn không thay đổi.'),
    new createProduct('13','Bộ bàn trang điểm Hollywood Glamour',12000,124000,120,'bedroom',['assets/img/product/bedroom/bantrangdiem01.jpg'],'Lorem Ipsum chỉ đơn giản là văn bản giả của ngành in ấn và sắp chữ. Lorem Ipsum đã trở thành văn bản giả tiêu chuẩn của ngành kể từ những năm 1500, khi một nhà in không xác định lấy một dãy loại và xáo trộn nó để tạo thành một cuốn sách mẫu. Nó đã tồn tại không chỉ năm thế kỷ, mà còn là bước nhảy vọt trong lĩnh vực sắp chữ điện tử, về cơ bản vẫn không thay đổi.'),
    new createProduct('14','Thảm lót sàn Turkey SR0010',1202300,124000,120,'bedroom',['assets/img/product/bedroom/thamlotsan01.jpg'],'Lorem Ipsum chỉ đơn giản là văn bản giả của ngành in ấn và sắp chữ. Lorem Ipsum đã trở thành văn bản giả tiêu chuẩn của ngành kể từ những năm 1500, khi một nhà in không xác định lấy một dãy loại và xáo trộn nó để tạo thành một cuốn sách mẫu. Nó đã tồn tại không chỉ năm thế kỷ, mà còn là bước nhảy vọt trong lĩnh vực sắp chữ điện tử, về cơ bản vẫn không thay đổi.'),
];




function start(){
    if(!getListUserFromLocalStorage()){
        pushListUserToLocalStorage(listUser);
    }
    if(!getListProductFromLocalStorage()){
        pushLishProductToLocalStorage(listProduct);
    }
    console.log(1);
}
start();