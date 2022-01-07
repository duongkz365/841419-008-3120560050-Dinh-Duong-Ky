function province(value,text){
    this.value = value;
    this.text = text;

}
function district (value1,value2,text){
    this.value1 = value1;
    this.value2 = value2;
    this.text = text;
}
function wards(value1,value2,value3,text){
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.text = text;
}
var listProvince = [
    new province('1','An giang'),
    new province('2','Bà Rịa - Vũng Tàu'),
    new province('3','Bạc Liêu'),
    new province('4','Bắc Giang'),
    new province('5','Bắc Cạn'),
    new province('6','Bắc Ninh'),
    new province('7','Bến Tre'),
    new province('8','Bình Dương'),
    new province('9','Bình Định'),
    new province('10','Bình Phước'),
    new province('11','Bình Thuận'),
    new province('12','Cà Mau'),
    new province('13','Cao Bằng'),
    new province('14','Cần Thơ'),
    new province('15','Đà Nẵng'),
    new province('16','Đắk Lắk'),
    new province('17','Đắk Nông'),
    new province('18','Điện Biên'),
    new province('19','Đồng Nai'),
    new province('20','Đồng Tháp'),
    new province('21','Gia Lai'),
    new province('22','Hà Giang'),
    new province('23','Hà Nam'),
    new province('24','Hà Nội'),
    new province('25','Hà Tĩnh'),
    new province('26','Hải Dương'),
    new province('27','Hải Phòng'),
    new province('28','Hậu Giang'),
    new province('29','Hòa Bình'),
    new province('30','Thành Phố Hồ Chí Minh'),
    new province('31','Hưng Yên'),
    new province('32','Khánh Hòa'),
    new province('33','Kiên Giang'),
    new province('34','Kon Tum'),
    new province('35','Lai Châu'),
    new province('36','Lạng Sơn'),
    new province('37','Lào Cai'),
    new province('38','Lâm Đồng'),
    new province('39','Long An'),
    new province('40','Nam Định'),
    new province('41','Nghệ An'),
    new province('42','Ninh Bình'),
    new province('43','Ninh Thuận'),
    new province('44','Phú Thọ'),
    new province('45','Phú Yên'),
    new province('46','Quảng Bình'),
    new province('47','Quảng Nam'),
    new province('48','Quảng Ngãi'),
    new province('49','Quảng Ninh'),
    new province('50','Quảng Trị'),
    new province('51','Sóc Trăng'),
    new province('52','Sơn La'),
    new province('53','Tây Ninh'),
    new province('54','Thái Bình'),
    new province('55','Thái Nguyên'),
    new province('56','Thanh Hóa'),
    new province('57','Thừa Thiên Huế'),
    new province('58','Tiền Giang'),
    new province('59','Trà Vinh'),
    new province('60','Tuyên Quang'),
    new province('61','Vĩnh Long'),
    new province('62','Vĩnh Phúc'),
    new province('63','Yên Bái'),
]
var listDistrict = [
    new district('1','1','Thành Phố Long Xuyên'),
    new district('1','2','Thành Phố Châu Đốc'),
    new district('1','3','Huyện An Phú'),
    new district('1','4','Thị xã Tân Châu'),
    new district('1','5','Huyện Phú Tân'),
    new district('1','6','Huyện Châu Phú'),
    new district('1','7','Huyện Tịnh Biên'),
    new district('1','8','Huyện Tri Tôn'),
    new district('1','9','Huyện Châu Thành'),
    new district('1','10','Huyện Chợ Mới'),
    new district('1','11','Huyện Thoại Sơn'),
    new district('2','1','Thành Phố Vũng Tàu'),
    new district('2','2','Thành Phố Bà Rịa'),
    new district('2','3','Huyện Châu Đức'),
    new district('2','4','Huyện Xuyên Mộc'),
    new district('2','5','Huyện Long Điền'),
    new district('2','6','Huyện Đất Đỏ'),
    new district('2','7','Thị Xã Phú Mỹ'),
    new district('2','8','Huyện Côn Đảo'),
    new district('3','1','Thành Phố Bạc Liêu'),
    new district('3','2','Huyện Hồng Dân'),
    new district('3','3','Huyện Phước Long'),
    new district('3','4','Huyện Vĩnh Lợi'),
    new district('3','5','Thị xã Giá Rai'),
    new district('3','6','Huyện Đông Hải'),
    new district('3','7','Huyện Hòa Bình'),
    new district('4','1','Thành Phố Bắc Giang'),
    new district('4','2','Huyện Yên Thế'),
    new district('4','3','Huyện Tân Yên'),
    new district('4','4','Huyện Lạng Giang'),
    new district('4','5','Huyện Lục Nam'),
    new district('4','6','Huyện Lục Ngạn'),
    new district('4','7','Huyện Sơn Động'),
    new district('4','8','Huyện Yên Dũng'),
    new district('4','9','Huyện Việt Yên'),
    new district('4','10','Huyện Hiệp Hòa'),
    new district('5','1','Thành Phố Bắc Kạn'),
    new district('5','2','Huyện Pắc Nặm'),
    new district('5','3','Huyện Ba Bể'),
    new district('5','4','Huyện Ngân Sơn'),
    new district('5','5','Huyện Bạch Thông'),
    new district('5','6','Huyện Chợ Đồn'),
    new district('5','7','Huyện Chợ Mới'),
    new district('5','8','Huyện Na Rì'),
    new district('6','1','Thành Phố Bắc Ninh'),
    new district('6','2','Huyện Yên Phong'),
    new district('6','3','Huyện Quế Võ'),
    new district('6','4','Huyện Tiên Du'),
    new district('6','5','Thị xã Từ Sơn'),
    new district('6','6','Huyện Thuận THành'),
    new district('6','7','Huyện Gia Bình'),
    new district('6','8','Huyện Lương Tài'),
    new district('7','1','Thành Phố Bến Tre'),
    new district('7','2','Huyện Châu Thành'),
    new district('7','3','Huyện Chợ Lách'),
    new district('7','4','Huyện Mỏ Cày Nam'),
    new district('7','5','Huyện Giống Trôm'),
    new district('7','6','Huyện Bình Đại'),
    new district('7','7','Huyện Ba Tri'),
    new district('7','8','Huyện Thạnh Phú'),
    new district('7','9','Huyện Mỏ Cày Bắc'),
    new district('8','1','Thành Phố Thủ Dầu Một'),
    new district('8','2','Huyện Bàu Bàng'),
    new district('8','3','Huyện Dầu Tiếng'),
    new district('8','4','Thị xã Bến Cát'),
    new district('8','5','Huyện Phú Giáo'),
    new district('8','6','Thị Xã Tân Uyên'),
    new district('8','7','Thành Phố Dĩ An'),
    new district('8','8','Thành Phố Thuận An'),
    new district('8','9','Huyện Bắc Tân Uyên'),
    new district('9','1','Thành Phố Quy Nhơn'),
    new district('9','2','Huyện An Lão'),
    new district('9','3','Thị Xã Hoài Nhơn'),
    new district('9','4','Huyện Hoài Ân'),
    new district('9','5','Huyện Phù Mỹ'),
    new district('9','6','Huyện Vĩnh Thạnh'),
    new district('9','7','Huyện Tây Sơn'),
    new district('9','8','Huyện Phù Cát'),
    new district('9','9','Thị xã An Nhơn'),
    new district('9','10','Huyện Tuy Phước'),
    new district('9','11','Huyện Vân Canh'),
    new district('10','1','Thị xã Phước Long'),
    new district('10','2','Thành Phố Đồng Xoài'),
    new district('10','3','Thị xã Bình Long'),
    new district('10','4','Huyện Bù Gia Mập'),
    new district('10','5','Huyện Lộc Ninh'),
    new district('10','6','Huyện Bù Đốp'),
    new district('10','7','Huyện Hớn Quán'),
    new district('10','8','Huyện Đồng Phú'),
    new district('10','9','Huyện Bụ Đăng'),
    new district('10','10','Huyện Chơn Thành'),
    new district('10','11','Huyện Phú Riềng'),
    new district('11','1','Thành phố Phan Thiết'),
    new district('11','2','Thị xã La Gi'),
    new district('11','3','Huyện Tuy Phong'),
    new district('11','4','Huyện Bắc Bình'),
    new district('11','5','Huyện Hàm Thuận Bắc'),
    new district('11','6','Huyện Hàm Thuận Nam'),
    new district('11','7','Huyện Tánh Linh'),
    new district('11','8','Huyện Đức Linh'),
    new district('11','9','Huyện Hàm Tân'),
    new district('11','10','Huyện Phú Quí'),
    new district('12','1','Thành Phố Cà Mau'),
    new district('12','2','Huyện U Minh'),
    new district('12','3','Huyện Thới Bình'),
    new district('12','4','Huyện Trần Văn Thời'),
    new district('12','5','Huyện Cái Nước'),
    new district('12','6','Huyện Đầm Dơi'),
    new district('12','7','Huyện Năm Căn'),
    new district('12','8','Huyện Phú Tân'),
    new district('12','9','Huyện Ngọc Hiển'),
    new district('13','1','Thành Phố Cao Bằng'),
    new district('13','2','Huyện Bảo Lâm'),
    new district('13','3','Huyện Bảo Lạc'),
    new district('13','4','Huyện Hà Quảng'),
    new district('13','5','Huyện Trùng Khánh'),
    new district('13','6','Huyện Hạ Lang'),
    new district('13','7','Huyện Quảng Hòa'),
    new district('13','8','Huyện Hòa An'),
    new district('13','9','Huyện Nguyên Bình'),
    new district('13','10','Huyện Thạch An'),
    new district('14','1','Quận Ninh Kiều'),
    new district('14','2','Quận Ô Môn'),
    new district('14','3','Quận Bình Thủy'),
    new district('14','4','Quận Cái Răng'),
    new district('14','5','Quận Thốt Nốt'),
    new district('14','6','Huyện Vĩnh Thạnh'),
    new district('14','7','Huyện Cờ Đỏ'),
    new district('14','8','Huyện Phong Điền'),
    new district('14','9','Huyện Thới Lai'),
    
    new district('15','1','Quận Liên Chiểu'),
    new district('15','2','Quận Thanh Khê'),
    new district('15','3','Quận Hải Châu'),
    new district('15','4','Quận Sơn Trà'),
    new district('15','5','Quận Ngũ Hành Sơn'),
    new district('15','6','Quận Cẩm Lệ'),
    new district('15','7','Huyện Hòa Vang'),
    new district('15','8','Huyện Hoàng Sa'),

    new district('16','1','Thành Phố Buôn Ma Thuật'),
    new district('16','2','Thị xã Buôn Hồ'),
    new district('16','3','Huyện Ea H\'leo'),
    new district('16','4','Huyện Ea Súp'),
    new district('16','5','Huyện Buôn Đôn'),
    new district('16','6','Huyện Cư M\'gar'),
    new district('16','7','Huyện Krong Búk'),
    new district('16','8','Huyện Krông Năng'),
    new district('16','9','Huyện Ea Kar'),
    new district('16','10','Huyện M\'Đrắc'),
    new district('16','11','Huyện Krông Bông'),
    new district('16','12','Huyện Krong Pắc'),
    new district('16','13','Huyện Krong A Na'),
    new district('16','14','Huyện Lắc'),
    new district('16','15','Huyện Cư Kuin'),

    new district('17','1','Thành Phố Gia Nghĩa'),
    new district('17','2','Huyện Đăk Glong'),
    new district('17','3','Huyện Cư Jút'),
    new district('17','4','Huyện Đắk Mil'),
    new district('17','5','Huyện Krông Nô'),
    new district('17','6','Huyện Đắk Song'),
    new district('17','7','Huyện Đắk R\'Lấp'),
    new district('17','8','Huyện Tuy Đức'),

    new district('18','1','Thành Phố Điện Biên Phủ'),
    new district('18','2','Thị xã Mường Lay'),
    new district('18','3','Huyện Mường Nhé'),
    new district('18','4','Huyện Mường Chà'),
    new district('18','5','Huyện Tủa Chùa'),
    new district('18','6','Huyện Tuần Giáo'),
    new district('18','7','Huyện Điện Biên'),
    new district('18','8','Huyện Điện Biên Đông'),
    new district('18','9','Huyện Mường Áng'),
    new district('18','10','Huyện Nậm Pồ'),

    new district('19','1','Thành Phố Biên Hòa'),
    new district('19','2','Thành Phố Long Khánh'),
    new district('19','3','Huyện Tân Phú'),
    new district('19','4','Huyện Vĩnh Cửu'),
    new district('19','5','Huyện Đinh Quán'),
    new district('19','6','Huyện Trảng Bom'),
    new district('19','7','Huyện Thống Nhất'),
    new district('19','8','Huyện Cẩm Mỹ'),
    new district('19','9','Huyện Long Thành'),
    new district('19','10','Huyện Xuân Lộc'),
    new district('19','11','Huyện Nhơn Trạch'),

    new district('20','1','Thành Phố Cao Lãnh'),
    new district('20','2','Thành Phố Sa Đéc'),
    new district('20','3','Thành Phố Hồng Ngự'),
    new district('20','4','Huyện Tân Hồng'),
    new district('20','5','Huyện Hồng Ngự'),
    new district('20','6','Huyện Tam Nông'),
    new district('20','7','Huyện Tháp Mười'),
    new district('20','8','Huyện Cao Lãnh'),
    new district('20','9','Huyện Thanh Bình'),
    new district('20','10','Huyện Lấp Vò'),
    new district('20','11','Huyện Lai Vung'),
    new district('20','12','Huyện Châu Thành'),
 
    new district('21','1','Thành Phố Pleiku'),
    new district('21','2','Thị Xã An Khê'),
    new district('21','3','Thị Xã Ayun Pa'),
    new district('21','4','Huyện KBang'),
    new district('21','5','Huyện Đăk Đoa'),
    new district('21','6','Huyện CHư Păh'),
    new district('21','7','Huyện Ia Grai'),
    new district('21','8','Huyện Mang Yang'),
    new district('21','9','Huyện Kông Chro'),
    new district('21','10','Huyện Đức Cơ'),
    new district('21','11','Huyện Chư Prông'),
    new district('21','12','Huyện Chư Sê'),
    new district('21','13','Huyện Đăk Pơ'),
    new district('21','14','Huyện Ia Pa'),
    new district('21','15','Huyện Huyện Krông Pa'),
    new district('21','16','Huyện Phú Thiện'),
    new district('21','17','Huyện Chư Pưh'),

    new district('22','1','Thành Phố Hà Giang'),
    new district('22','2','Huyện Đồng Văn'),
    new district('22','3','Huyện Mèo Vạc'),
    new district('22','4','Huyện Yên Minh'),
    new district('22','5','Huyện Quản Bạ'),
    new district('22','6','Huyện Vị Xuyên'),
    new district('22','7','Huyện Bắc Mê'),
    new district('22','8','Huyện Hoàng Su Phì'),
    new district('22','9','Huyện Xín Mần'),
    new district('22','10','Huyện Bắc Quang'),
    new district('22','11','Huyện Quang Bình'),

    new district('23','1','Thành phố Phủ Lý'),
    new district('23','2','Thị xã Duy Tiên'),
    new district('23','3','Huyện Kim Bảng'),
    new district('23','4','Huyện Thanh Liêm'),
    new district('23','5','Huyện Bình Lục'),
    new district('23','6','Huyện Lý Nhân'),

    new district('24','1','Quận Ba Đình'),
    new district('24','2','Quận Hoàn Kiếm'),
    new district('24','3','Quận Tây Hồ'),
    new district('24','4','Quận Long Biên'),
    new district('24','5','Quận Cầu Giấy'),
    new district('24','6','Quận Đống Đa'),
    new district('24','7','Quận Hai Bà Trưng'),
    new district('24','8','Quận Hoàng Mai'),
    new district('24','9','Quận Thanh Xuân'),
    new district('24','10','Huyện Sóc Sơn'),
    new district('24','11','Huyện Đông Anh'),
    new district('24','12','Huyện Gia Lâm'),
    new district('24','13','Quận Nam Từ Liêm'),
    new district('24','14','Quận Bắc Từ Liêm'),
    new district('24','15','Huyện Thanh Trì'),
    new district('24','16','Huyện Thạch Thất'),
    new district('24','17','Huyện Quốc Oai'),
    new district('24','18','Huyện Mê Linh'),
    new district('24','19','Quận Hà Đông'),
    new district('24','20','Thị xã Sơn Tây'),
    new district('24','21','Huyện Ba Vì'),
    new district('24','22','Huyện Phúc Thọ'),
    new district('24','23','Huyện Đan Phượng'),
    new district('24','24','Huyện Hoài Đức'),
    new district('24','25','Huyện Quốc Oai'),
    new district('24','26','Huyện Thạch Thất'),
    new district('24','27','Huyện Chương Mỹ'),
    new district('24','28','Huyện Thanh Oai'),
    new district('24','29','Huyện Thường Tín'),
    new district('24','30','Huyện Phú Xuyên'),
    new district('24','31','Huyện Ứng Hòa'),
    new district('24','32','Huyện Mỹ Đức'),

    new district('25','',''),
    
   


    
];
var listWards = [
    new wards('1','1','1','Phường Mỹ Bình'),
    new wards('1','1','2','Phường Mỹ Long'),
    new wards('1','1','3','Phường Đông Xuyên'),
    new wards('1','1','4','Phường Mỹ Xuyên'),
    new wards('1','1','5','Phường Bình Đức'),
    new wards('1','1','6','Phường Bình Khánh'),
    new wards('1','1','7','Phường Mỹ Phước'),
    new wards('1','1','8','Phường Mỹ Quý'),
    new wards('1','1','9','Phường Mỹ Thới'),
    new wards('1','1','10','Phường Mỹ Thạnh'),
    new wards('1','1','11','Phường Mỹ Hòa'),
    new wards('1','1','12','Xã Mỹ Khánh'),
    new wards('1','1','13','Xã Mỹ Hòa Hưng'),
    new wards('1','2','1','Phường Châu Phú A'),
    new wards('1','2','2','Phường Châu Phú B'),
    new wards('1','2','3','Phường Vĩnh Mỹ'),
    new wards('1','2','4','Phường Núi Sam'),
    new wards('1','2','5','Phường Vĩnh Ngươn'),
    new wards('1','2','6','Xã Vĩnh Tế'),
    new wards('1','2','7','Xã Vĩnh Châu'),
    new wards('1','3','1','Thị Trấn An Phú'),
    new wards('1','3','2','Xã Khánh An'),
    new wards('1','3','3','Thị Trấn Long Bình'),
    new wards('1','3','4','Xã Khánh Bình'),
    new wards('1','3','5','Xã Quốc Thái'),
    new wards('1','3','6','Xã Nhơn Hội'),
    new wards('1','3','7','Xã Phú Hữu'),
    new wards('1','3','8','Xã Phú Hội'),
    new wards('1','3','9','Xã Phước Hưng'),
    new wards('1','3','10','Xã Vĩnh Hậu'),
    new wards('1','3','11','Xã Vĩnh Tường'),
    new wards('1','3','12','Xã Vĩnh Hội Đông'),
    new wards('1','3','13','Xã Đa Phước'),
    new wards('1','4','1','Phường Long Thạnh'),
    new wards('1','4','2','Phường Long Hưng'),
    new wards('1','4','3','Phường Long Châu'),
    new wards('1','4','4','Xã Phú Lộc'),
    new wards('1','4','5','Xã Vĩnh Xương'),
    new wards('1','4','6','Xã Vĩnh Hòa'),
    new wards('1','4','7','Xã Tân An'),
    new wards('1','4','8','Xã Long An'),
    new wards('1','4','9','Phường Long Phú'),
    new wards('1','4','10','Xã Châu Phong'),
    new wards('1','4','11','Xã Phú Vĩnh'),
    new wards('1','4','12','Xã Lê Chánh'),
    new wards('1','4','13','Phường Long Sơn'),
    new wards('1','5','1','Thị Trấn Phú Mỹ'),
    new wards('1','5','2','Xã Long Hòa'),
    new wards('1','5','3','Xã Phú Long'),
    new wards('1','5','4','Xã Phú Lâm'),
    new wards('1','5','5','Xã Phú Hiệp'),
    new wards('1','5','6','Xã Phú Thạnh'),
    new wards('1','5','7','Xã Hoài Lạc'),
    new wards('1','5','8','Xã Phú Thành'),
    new wards('1','5','9','Xã Phú An'),
    new wards('1','5','10','Xã Phú Xuân'),
    new wards('1','5','11','Xã Hiệp Xương'),
    new wards('1','5','12','Xã Phú Bình'),
    new wards('1','5','13','Xã Phú Thọ'),
    new wards('1','5','14','Xã Phú Hưng'),
    new wards('1','5','15','Xã Bình Thạnh Đông'),
    new wards('1','5','16','Xã Tân Hòa'),
    new wards('1','5','17','Xã Tân Trung'),
    new wards('1','6','1','Thị Trấn Cái Dầu'),
    new wards('1','6','2','Xã Khánh Hòa'),
    new wards('1','6','3','Xã Mỹ Đức'),
    new wards('1','6','4','Xã Mỹ Phú'),
    new wards('1','6','5','Xã Ô Long Vỹ'),
    new wards('1','6','6','Xã Vĩnh Thạnh Trung'),
    new wards('1','6','7','Xã Thạnh Mỹ Tây'),
    new wards('1','6','8','Xã Bình Long'),
    new wards('1','6','9','Xã Bình Mỹ'),
    new wards('1','6','10','Xã Bình Thủy'),
    new wards('1','6','11','Xã Đào Hữu Cảnh'),
    new wards('1','6','12','Xã Bình Phú'),
    new wards('1','6','13','Xã Bình Chánh'),
    new wards('1','7','1','Thị Trấn Nhà Bàng'),
    new wards('1','7','2','Thị trấn Chi Lăng'),
    new wards('1','7','3','Xã Núi Voi'),
    new wards('1','7','4','Xã Nhơn Hưng'),
    new wards('1','7','5','Xã An Phú'),
    new wards('1','7','6','Xã Thới Sơn'),
    new wards('1','7','7','Thị trấn Tịnh Biên'),
    new wards('1','7','8','Xã Văn Giáo'),
    new wards('1','7','9','Xã An Cư'),
    new wards('1','7','10','Xã An Nông'),
    new wards('1','7','11','Xã Vĩnh Trung'),
    new wards('1','7','12','Xã Tân Lợi'),
    new wards('1','7','13','Xã An Hảo'),
    new wards('1','7','14','Xã Tân Lập'),
    new wards('1','8','1','Thị trấn Tri Tôn'),
    new wards('1','8','2','Thị trấn Ba Chúc'),
    new wards('1','8','3','Xã Lạc Quới'),
    new wards('1','8','4','Xã Lê Trì'),
    new wards('1','8','5','Xã Vĩnh Gia'),
    new wards('1','8','6','Xã Vĩnh Phước'),
    new wards('1','8','7','Xã Châu Lăng'),
    new wards('1','8','8','Xã Lương Phi'),
    new wards('1','8','9','Xã Lương An Trà'),
    new wards('1','8','10','Xã Tà Đánh'),
    new wards('1','8','11','Xã Núi Tô'),
    new wards('1','8','12','Xã An Tức'),
    new wards('1','8','13','Xã Cô Tô'),
    new wards('1','8','14','Xã Tân Tuyến'),
    new wards('1','8','15','Xã Ô Lâm'),
    new wards('1','9','1','Thị trấn An Châu'),
    new wards('1','9','2','Xã An Hòa'),
    new wards('1','9','3','Xã Cần Đăng'),
    new wards('1','9','4','Xã Vĩnh Hanh'),
    new wards('1','9','5','Xã bình Thạnh'),
    new wards('1','9','6','Xã Vĩnh Bình'),
    new wards('1','9','7','Xã Bình Hòa'),
    new wards('1','9','8','Xã Vĩnh An'),
    new wards('1','9','9','Xã Hòa Bình Thạnh'),
    new wards('1','9','10','Xã Vĩnh Lợi'),
    new wards('1','9','11','Xã Vĩnh Nhuận'),
    new wards('1','9','12','Xã Tân Phú'),
    new wards('1','9','13','Xã Vĩnh Thành'),
    new wards('1','10','1','Thị trấn Chợ Mới'),
    new wards('1','10','2','Thị trấn Mỹ Luông'),
    new wards('1','10','3','Xã Kiến An'),
    new wards('1','10','4','Xã Mỹ Hội Đông'),
    new wards('1','10','5','Xã Long Điền A'),
    new wards('1','10','6','Xã Tân Mỹ'),
    new wards('1','10','7','Xã Long Điền B'),
    new wards('1','10','8','Xã Kiến Thành'),
    new wards('1','10','9','Xã Mỹ Hiệp'),
    new wards('1','10','10','Xã Mỹ An'),
    new wards('1','10','11','Xã Nhơn Mỹ'),
    new wards('1','10','12','Xã Long Giang'),
    new wards('1','10','13','Xã Long Kiến'),
    new wards('1','10','14','Xã Bình Phước Xuân'),
    new wards('1','10','15','Xã An Thạnh Trung'),
    new wards('1','10','16','Xã Hội An'),
    new wards('1','10','17','Xã Hòa Bình'),
    new wards('1','10','18','Xã Hòa An'),
    new wards('1','11','1','Thị trấn Núi Sập'),
    new wards('1','11','2','Thị trấn Phú Hòa'),
    new wards('1','11','3','Thị trấn Óc Eo'),
    new wards('1','11','4','Xã Tây Phú'),
    new wards('1','11','5','Xã An Bình'),
    new wards('1','11','6','Xã Vĩnh Phú'),
    new wards('1','11','7','Xã Vĩnh Trạch'),
    new wards('1','11','8','Xã Phú Nhuận'),
    new wards('1','11','9','Xã Vĩnh Chánh'),
    new wards('1','11','10','Xã Định Mỹ'),
    new wards('1','11','11','Xã Định Thành'),
    new wards('1','11','12','Xã Mỹ Phú Đông'),
    new wards('1','11','13','Xã Vọng Đông'),
    new wards('1','11','14','Xã Vĩnh Khánh'),
    new wards('1','11','15','Xã Thoại Giang'),
    new wards('1','11','16','xã Bình Thành'),
    new wards('1','11','17','Xã Vọng Thê'),
    new wards('2','1','',''),
    new wards('2','','',''),
    new wards('2','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    new wards('3','','',''),
    


    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''),
    new wards('4','','',''), 
];



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
function createID (){
    var id = "";
    id = Math.random().toString().substr(2,4) +"_"+ String(new Date().getTime()).substr(2,4);
    return id;
}
function pushIDOneProduct(id){
    localStorage.setItem('o',id);
}
function getIDOneProduct(){
    return localStorage.getItem('o');
}
function renderCart(){
     let html = '';
     let listCart = new Array;
     let listUser = getListUserFromLocalStorage();
     let listProduct = getListProductFromLocalStorage();
     let temp = 0;
     let vat = 0;
     let total = 0;
     let ship = 0.00;
     listUser.forEach(e=>{
        if(e.login) {
            listCart = e.cart;
        }
     });
     listCart.forEach(e=> {
         listProduct.forEach(ee=>{
             if(e.id == ee.id){
                 temp+= e.quantity * ee.price;
                html+= `<li class="render-listcart-item"> <span class="listcart-name">${ee.productName}</span>  X ${e.quantity} <span class="listcart-money">${e.quantity *ee.price}&nbspđ</span></li>`;
             }
         })
     });
     $('.render-listcart-buy').html(html);
     vat = temp*20/100;
     total = vat + temp;
     console.log(temp);
     $('#b-temp').html(temp + ' đ')
     $('#b-vat').html(vat +' đ');
     $('#b-shipping').html(ship+' đ')
     $('#b-total').html(total+ ' đ');
}

function renderInfoUser(){
    let listUser = getListUserFromLocalStorage();
    listUser.forEach(e=>{
        if(e.login){
            $('#b-fullName').val(e.fullName);
            $('#b-email').val(e.email);
        }
    });
}


function renderProvince(){
    let html = '<option value="0" class="buy-option" selected>Chọn Tỉnh, Thành Phố</option>';
    listProvince.forEach(e=>{
        html+=`<option value="${e.value}" class="buy-option">${e.text}</option>`;
    })
    $('#b-province').html(html);
}

function renderdistrict(){
    let html = '<option value="0" class="buy-option" selected>Chọn Quận, Huyện</option>';
    let value = $('#b-province').val();
    listDistrict.forEach(e=>{
        if(e.value1 == value){
            html+=`<option value="${e.value2}" class="buy-option">${e.text}</option>`;
        }
    })
    $('#b-district').html(html);
}
function renderwards(){
    let html = '<option value="0" class="buy-option" selected>Chọn Phường,Xã</option>';
    let value = $('#b-district').val();
    listWards.forEach(e=>{
        if(e.value2 == value){
            html+=`<option value="${e.value3}" class="buy-option">${e.text}</option>`;
        }
    });
    $('#b-wards').html(html);
}


function renderAddress(){
    renderProvince();
    $('#b-province').on('change',()=>{
        renderdistrict();
    });
    $('#b-district').on('change',()=>{
        renderwards();
    });
}
// check email
function checkEmail(email) { 
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
    if (!filter.test(email)) { 
        return false; 
    }
    else{ 
        return true; 
    } 
} 
// check phone number
function is_phonenumber(phonenumber) {
    var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    if(phonenumber.match(phoneno)) {
      return true;
    }  
    else {  
      return false;
    }
}
function createOrder(id,fullName,email,phoneNumber,province,district,wards,apartmentNumber,paymentMethod,quantity,total,invoiceDetails,time,date,vat){
   this.id = id;
   this.fullName = fullName;
   this.email = email;
   this.phoneNumber = phoneNumber;
   this.province = province;
   this.district = district;
   this.wards = wards;
   this.apartmentNumber = apartmentNumber;
   this.paymentMethod = paymentMethod;
   this.quantity = quantity;
   this.total = total;
   this.invoiceDetails =invoiceDetails;
   this.time = time;
   this.date = date;
   this.vat = vat;
}

function createceDetails(idProduct,productName,quantity,total){
    this.idProduct = idProduct;
    this.productName = productName;
    this.quantity = quantity;
    this.total = total;
}



function addOrder(){
    let checkLogin  = false;
    let listUser = getListUserFromLocalStorage();
    listUser.forEach(e=>{
        if(e.login){
           checkLogin = true;
        }
    });

    if(checkLogin){
        let count = 0;
        let fullNameElement = document.querySelector('#b-fullName');
        let fullNameMessage = fullNameElement.parentElement.querySelector('.b-message');
        let inputFullName = document.getElementById('b-fullName');
        if(fullNameElement.value.trim()){
                fullNameMessage.innerText = '';  
                inputFullName.style.border = '1px solid green';
                count++;
        }else {
            fullNameMessage.innerText = 'Vui lòng nhập trường này';
            inputFullName.style.border = '1px solid red';
        }

        let emailElement = document.querySelector('#b-email');
        let emailMessage = emailElement.parentElement.querySelector('.b-message');
    
        if(emailElement.value.trim()){
            if(checkEmail(emailElement.value)){
                emailMessage.innerText = '';
                count++;
                emailElement.style.border = '1px solid green';
            }else {
                emailMessage.innerText = 'Vui lòng nhập email hợp lệ';
                emailElement.style.border = '1px solid red';
            }
        }else {
            emailMessage.innerText = 'Vui lòng nhập trường này';
            emailElement.style.border = '1px solid red';
        }
        let paymentmethodElement = document.getElementById('b-payment-method');
        let paymentmethodMessage = paymentmethodElement.parentElement.querySelector('.b-message');
        if(paymentmethodElement.value==0){
            paymentmethodMessage.innerText = 'Vui lòng chọn phương thức thanh toán';
            paymentmethodElement.style.border = '1px solid red';
        }else {
            count++;
            paymentmethodMessage.innerText = '';
            paymentmethodElement.style.border = '1px solid green';
        }

        let phoneElement = document.getElementById('b-phone');
        let phoneMessage = phoneElement.parentElement.querySelector('.b-message');
        if(phoneElement.value.trim()){

            if(is_phonenumber(phoneElement.value.trim())){
                count++;
                phoneMessage.innerText = '';
                phoneElement.style.border = '1px solid green';
            }else {

            phoneMessage.innerText = 'Vui lòng nhập một số điện thoại hợp lệ';
            phoneElement.style.border = '1px solid red';
            }
            
        }else {
            phoneMessage.innerText = 'Vui lòng nhập số điện thoại';
            phoneElement.style.border = '1px solid red';
        }

        let provinceElement = document.getElementById('b-province');
        let provinceMessage = provinceElement.parentElement.querySelector('.b-message');
        if(provinceElement.value==0){
            provinceMessage.innerText = 'Vui lòng chọn tỉnh thành phố';
            provinceElement.style.border = '1px solid red';
        }else {
            count++;
            provinceMessage.innerText = '';
            provinceElement.style.border = '1px solid green';
        }
        let districtElement = document.getElementById('b-district');
        let districtMessage = districtElement.parentElement.querySelector('.b-message');
        if(districtElement.value==0){
            districtMessage.innerText = 'Vui lòng chọn tỉnh thành phố';
            districtElement.style.border = '1px solid red';
        }else {
            count++;
            districtMessage.innerText = '';
            districtElement.style.border = '1px solid green';
        }
        let wardsElement = document.getElementById('b-wards');
        let wardsMessage = wardsElement.parentElement.querySelector('.b-message');
        if(wardsElement.value==0){
            wardsMessage.innerText = 'Vui lòng chọn tỉnh thành phố';
            wardsElement.style.border = '1px solid red';
        }else {
            count++;
            wardsMessage.innerText = '';
            wardsElement.style.border = '1px solid green';
        }

        let apartmentnumberElement = document.getElementById('b-apartmentnumber');
        let apartmentnumberMessage = apartmentnumberElement.parentElement.querySelector('.b-message');
        if(apartmentnumberElement.value.trim()){
            count++;
            apartmentnumberMessage.innerText = '';
            apartmentnumberElement.style.border = '1px solid green';
        }else {
            apartmentnumberMessage.innerText = "Vui lòng nhập địa chỉ nhận hàng";
            apartmentnumberElement.style.border = '1px solid red';
        }
        if(count == 8){

            let today = new Date;
            let id = createID();
            let fullName = fullNameElement.value;
            let email = emailElement.value;
            let phoneNumber = phoneElement.value;
            let paymentMethod = paymentmethodElement.value;
            let province = provinceElement.value;
            let district = districtElement.value;
            let wards = wardsElement.value;
            let apartmentNumber = apartmentnumberElement.value;
            let quantity = 0;
            let total = 0;
            let invoiceDetails = [];
            let vat  = 0;
            let listUser = getListUserFromLocalStorage();
            let listProduct = getListProductFromLocalStorage();
            let listCart = new Array;
            let order = new Array;
            listUser.forEach(e=>{
                if(e.login){
                    listCart = e.cart;
                    order = e.order;
                }
            });
            if(listCart.length == 0){
                alert('Bạn chưa thêm bất kỳ sản phẩm nào vào giỏ hàng');
            }else {
                listCart.forEach(e=>{
                    listProduct.forEach(ee=>{
                        if(e.id == ee.id){
                            quantity+=e.quantity;
                            total+= e.quantity * ee.price;
                            let oneProduct = new createceDetails(ee.id,ee.productName,e.quantity,e.quantity*ee.price);
                            invoiceDetails.push(oneProduct);
                        }
                    });
                });
                vat = total*20/100;
    
    
    
                var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                let date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
                let object = new createOrder(id,fullName,email,phoneNumber,province,district,wards,apartmentNumber,paymentMethod,quantity,total,invoiceDetails,time,date,vat);
                
                order.push(object);
    
                listUser.forEach(e=>{
                    if(e.login){
                        e.order = order;
                        e.cart = [];
                    }
                });
                pushListUserToLocalStorage(listUser);
                alert('Mua thành công');
                window.location = './index.html';
            }
        }
    }else {
        alert('Bạn Chưa Đăng Nhập');
    }
}







function start(){
    renderCart();
    renderInfoUser();
    renderAddress();
}




start();