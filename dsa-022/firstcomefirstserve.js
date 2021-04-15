// THIS DAY I AM SOLVING SOME PROBLEMS/TASK OF STACKS AND QUEUE

// PROBLEM/TASK : TO DESIGN A CASHIER CLASS THAT TAKES IN A CUSTOMER OBJECT AND HANDLS FOOD ODERINF ON A FIRST COME FIRST SERVES BASIS

// Here are the requirements:
// 1.	The cashier requires a customer name and order item for the order.
// 2.	The customer who was served first is processed first.
// Here are the required implementations:
// •	 addOrder(customer): Enqueues a customer object to be processed by
// deliverOrder()
// •	 deliverOrder(): Prints the name and order for the next customer to be
// processed

function Queue(array) {
  this.array = [];
  if (array) this.array = array;
}

Queue.prototype.enqueue = function (value) {
  return this.array.push(value);
};

Queue.prototype.dequeue = function () {
  return this.array.shift();
};

function Customer(name, order) {
  this.name = name;
  this.order = order;
}

function Cashier() {
  this.customers = new Queue();
}

Cashier.prototype.addOrder = function (customer) {
  this.customers.enqueue(customer);
};

Cashier.prototype.deliverOrder = function () {
  var finishedCustomer = this.customers.dequeue();
  console.log(
    finishedCustomer.name + ",your " + finishedCustomer.order + " is ready"
  );
};

var cashier = new Cashier();
var customer1 = new Customer("Ram", "aalu chana");
var customer2 = new Customer("Hri", "Masau Bhat");
var customer3 = new Customer("Aksh", "bhuteko vat with aanda");

cashier.addOrder(customer1);
cashier.addOrder(customer2);
cashier.addOrder(customer3);

cashier.deliverOrder();
cashier.deliverOrder();
cashier.deliverOrder();
