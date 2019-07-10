SET NAMES UTF8;
DROP DATABASE IF EXISTS censh;
CREATE DATABASE censh CHARSET=UTF8;
USE censh;
/******用户模块相关的表******/
#用户信息表
CREATE TABLE censh_user(
    uid INT(11) NOT NULL AUTO_INCREMENT,
    uname VARCHAR(32) default NULL,
    upwd VARCHAR(32) default NULL,
    email VARCHAR(64) default NULL,
    avatar VARCHAR(128) default NULL,
    user_name VARCHAR(32) default NULL,
    gender INT(11) default NULL,
    PRIMARY KEY (uid)
);

INSERT INTO censh_user VALUES(1,'188123456789','123','1234567890@qq.com',default,'多多',1);

/******轮播图模块******/
#首页轮播广告表
CREATE TABLE index_carousel(
  cid INT(11) NOT NULL AUTO_INCREMENT,
  img VARCHAR(128) default NULL,
  title VARCHAR(64) default NULL,
  href VARCHAR(128) default NULL,
  PRIMARY KEY(cid)
);
INSERT INTO index_carousel VALUES(1,default,'手表1','1.html');
INSERT INTO index_carousel VALUES(2,default,'手表2','2.html');
INSERT INTO index_carousel VALUES(3,default,'手表3','3.html');
INSERT INTO index_carousel VALUES(4,default,'手表4','4.html');
INSERT INTO index_carousel VALUES(5,default,'手表5','5.html');


/*****首页商品分类*******/
#首页商品
CREATE TABLE index_product(
  pid INT(11) PRIMARY KEY  AUTO_INCREMENT,
  title VARCHAR(64)default NULL,
  pic VARCHAR(128) default NULL,
  price DECIMAL(10,2) default NULL,
  details VARCHAR(128) default NULL,
  href VARCHAR(128)default NULL,
  seq_new TINYINT,
	seq_hop TINYINT,
	seq_brands TINYINT,
  seq_parts TINYINT,
  seq_store TINYINT,
  seq_video TINYINT,
  seq_news TINYINT,
  seq_pankings TINYINT,
  seq_share TINYINT
);

INSERT INTO index_product VALUES(1,'朗格1',default,100,default,'product_details.html?pid=1', '1', '1', '1','1', '1', '1','1', '1', '1');
INSERT INTO index_product VALUES(2,'朗格2',default,200,default,'product_details.html?pid=2', '2', '2', '2','2', '2', '2','2', '2', '2');
INSERT INTO index_product VALUES(3,'朗格3',default,300,default,'product_details.html?pid=3', '3', '3', '3','3', '3', '3','3', '3', '3');

/*****首页商品品牌分类*******/
#商品品牌
CREATE TABLE censh_family(
  fid INT(11) NOT NULL AUTO_INCREMENT,
  fname VARCHAR(32) default NULL,
  PRIMARY KEY(fid)
);
INSERT INTO censh_family VALUES(1,'朗格');
INSERT INTO censh_family VALUES(2,'爱彼');
INSERT INTO censh_family VALUES(3,'宝珀');
INSERT INTO censh_family VALUES(4,'宝玑');
INSERT INTO censh_family VALUES(5,'播威');
INSERT INTO censh_family VALUES(6,'法穆兰');
INSERT INTO censh_family VALUES(7,'宝齐莱');
INSERT INTO censh_family VALUES(8,'格林汉');
INSERT INTO censh_family VALUES(9,'冠蓝狮');
INSERT INTO censh_family VALUES(10,'欧米茄');
INSERT INTO censh_family VALUES(11,'劳力士');
INSERT INTO censh_family VALUES(12,'真力时');
INSERT INTO censh_family VALUES(13,'浪琴');
INSERT INTO censh_family VALUES(14,'雷达');
INSERT INTO censh_family VALUES(15,'帝陀');
INSERT INTO censh_family VALUES(16,'名士');
INSERT INTO censh_family VALUES(17,'艾美');
INSERT INTO censh_family VALUES(18,'万宝龙');
INSERT INTO censh_family VALUES(19,'宝曼');
INSERT INTO censh_family VALUES(20,'波尔');
INSERT INTO censh_family VALUES(21,'西马');
INSERT INTO censh_family VALUES(22,'美度');
INSERT INTO censh_family VALUES(23,'天梭');
INSERT INTO censh_family VALUES(24,'精工');

/*****商品每一个品牌的属性分类*******/

#爱彼品牌
CREATE TABLE index_product_aibi(
  pid INT(11) PRIMARY KEY  AUTO_INCREMENT,
  title VARCHAR(64) ,
  pic VARCHAR(128) default NULL,
  price DECIMAL(10,2),
  href VARCHAR(128),
  seq_recommended TINYINT,
	seq_new_arrival TINYINT,
	seq_top_sale TINYINT
);
INSERT INTO index_product_aibi VALUES(1,'爱彼1',default,100,'product_details.html?pid=4', '1', '1', '1');
INSERT INTO index_product_aibi VALUES(2,'爱彼2',default,200,'product_details.html?pid=5', '2', '2', '2');
INSERT INTO index_product_aibi VALUES(3,'爱彼3',default,300,'product_details.html?pid=6', '3', '3', '3');

#宝珀品牌
CREATE TABLE index_product_baopo(
  pid INT(11) PRIMARY KEY  AUTO_INCREMENT,
  title VARCHAR(64) ,
  pic VARCHAR(128) default NULL,
  price DECIMAL(10,2),
  href VARCHAR(128),
  seq_recommended TINYINT,
	seq_new_arrival TINYINT,
	seq_top_sale TINYINT
);
INSERT INTO index_product_baopo VALUES(1,'宝珀1',default,100,'product_details.html?pid=7', '1', '1', '1');
INSERT INTO index_product_baopo VALUES(2,'宝珀2',default,200,'product_details.html?pid=8', '2', '2', '2');
INSERT INTO index_product_baopo VALUES(3,'宝珀3',default,300,'product_details.html?pid=9', '3', '3', '3');


#宝玑品牌
CREATE TABLE index_product_baoji(
  pid INT(11) PRIMARY KEY  AUTO_INCREMENT,
  title VARCHAR(64) ,
  pic VARCHAR(128) default NULL,
  price DECIMAL(10,2),
  href VARCHAR(128),
  seq_recommended TINYINT,
	seq_new_arrival TINYINT,
	seq_top_sale TINYINT
);
INSERT INTO index_product_baoji VALUES(1,'宝玑1',default,100,'product_details.html?pid=10', '1', '1', '1');
INSERT INTO index_product_baoji VALUES(2,'宝玑2',default,200,'product_details.html?pid=11', '2', '2', '2');
INSERT INTO index_product_baoji VALUES(3,'宝玑3',default,300,'product_details.html?pid=12', '3', '3', '3');


#商品属性
CREATE TABLE censh_product(
  lid INT(11) PRIMARY KEY NOT NULL  AUTO_INCREMENT,
  family_id INT(11) default NULL,
  title VARCHAR(128) default NULL ,    #标题
  subtitle VARCHAR(128) default NULL,  #副标题
  price DECIMAL(10,2) default NULL,
  spec VARCHAR(64) default NULL,      #规格
  lname VARCHAR(32) default NULL,     #名称
  details VARCHAR(1024) default NULL,
  sold_count INT(11) default NULL,     #数量
  href VARCHAR(128),
  is_onsale Boolean   #是否上线
);


/*****手表的图片可能不是很全*******/
CREATE TABLE censh_pic(
  pic INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  censh_id INT(11) default NULL,
  details_bigpic VARCHAR(128) default NULL,
  details_sampelpic VARCHAR(128) default NULL
);
INSERT INTO censh_pic VALUES
('1', '1', default, default),
('2', '2', default, default),
('3', '3', default, default),
('4', '4', default, default);

/*****购物车*******/
CREATE TABLE censh_shoppingcart(
  lid INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  user_id INT(11) default NULL,
  product_id INT(11) default NULL,
  count INT(11) default NULL,
  is_checked TINYINT(1) default NULL
);
INSERT INTO censh_shoppingcart VALUES
('1', '10', '17', '1', '0'),
('2', '11', '11', '1', '0'),
('3', '12', '1', '1', '1'),
('4', '13', '3', '9', '0'),
('5', '14', '1', '1', '0'),
('13', '20', '1', '1', '1'),
('14', '22', '17', '11', '1'),
('15', '20', '28', '1', '0');

/*****订单*******/
CREATE TABLE censh_order(
  aid INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  user_id INT(11) default NULL,
  address_id INT(11) default NULL,
  statues INT(11) default NULL,
  order_time BIGINT(20) default NULL,
  pay_time BIGINT(20) default NULL,
  deliver_time BIGINT(20) default NULL,
  reveived BIGINT(20) default NULL
);

CREATE TABLE censh_order_detail(
  did INT PRIMARY KEY AUTO_INCREMENT,
  order_id INT,           #订单编号
  product_id INT,         #产品编号
  count INT               #购买数量
);


/**收货地址信息**/
CREATE TABLE censh_receiver_address(
  aid INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,                #用户编号
  receiver VARCHAR(16),       #接收人姓名
  province VARCHAR(16),       #省
  city VARCHAR(16),           #市
  county VARCHAR(16),         #县
  address VARCHAR(128),       #详细地址
  cellphone VARCHAR(16),      #手机
  fixedphone VARCHAR(16),     #固定电话
  postcode CHAR(6),           #邮编
  tag VARCHAR(16),            #标签名

  is_default BOOLEAN          #是否为当前用户的默认收货地址
);
