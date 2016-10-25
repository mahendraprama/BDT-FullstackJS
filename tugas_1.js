var Product = function (sku,name,price,catagories){
			this.sku = sku;
			this.name = name;
			this.price = price;
			this.catagories = catagories;
};

var Book = function (isbn,author){
			this.isbn = isbn;
			this.author = author;
};

var Fashion = function (color,size){
			this.color = color;
			this.size = size;
			this.getPromoPrice = function(){};
};

Book.prototype = new Product();

book1 = new Book;

book1.sku="123456";
book1.name="Rajawali";
book1.price=5000;
book1.catagories="Dongeng";
book1.isbn=505050;
book1.author="mahendra";

book2 = new Book;

book2.sku="7891011";
book2.name="Elang";
book2.price=10000;
book2.catagories="Sastra";
book2.isbn=404040;
book2.author="pramadhitya";


OrderLineItem = function () {
	this.product 	= this.product;
	this.totalItem 	= this.totalItem;
};

ProductManager = function (){
	this.products = [];
	this.addProduct = function(p){
		this.products.push(p);
	};
	this.getAllProducts = function(){
		console.log(this.products);
	};
	this.getProduct 	= function (sku) {
		console.log(this.products.filter(x => x.sku === sku.toString()));
	
	};
	this.removeProduct 	= function (sku) {
		var i = this.products.filter(x => x.sku === sku.toString());
		if (i != -1) {
			this.products.splice(i, 1);
		}
		console.log(i);
	};
};
Cart = function () {
	this.items = [],
	this.addItem =  function (order) {
		this.items.push(order);
	},
	this.removeItem = function (order) {
		this.items.splice(order);
	},
	this.getTotalPrice = function () {
		var total = 0;
		this.items.forEach((item) => {
			total += item.product.price*item.totalItem;
		});
		console.log("Total" , total);
		return total;
	},
	this.checkOut = function (cash) {
		var total = 0;
		this.items.forEach((item) => {
			total += item.product.price*item.totalItem;
		});
		console.log("Cash", cash);
		console.log("Return", cash - total);
	}
};

BookManager = function(){};
BookManager.prototype = new ProductManager();

bookma = new BookManager();

// bookma.addProduct(book1);
// bookma.addProduct(book2);
// bookma.removeProduct(123456);
// bookma.removeProduct(7891011);
// bookma.getProduct(7891011);
// bookma.getAllProducts();

order1 = new OrderLineItem();
order1.product = book1;
order1.totalItem = 3;

order2 = new OrderLineItem();
order2.product = book2;
order2.totalItem = 2;

console.log("My cart");
MyCart = new Cart;
MyCart.addItem(order1);
MyCart.addItem(order2);

console.log(MyCart.items);
MyCart.getTotalPrice();
MyCart.checkOut(100000);




