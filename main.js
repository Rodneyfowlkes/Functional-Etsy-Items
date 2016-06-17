var cow = function (x) {
var priced_items = []
x.forEach(function(n) {
priced_items.push(n.price);

})
var avg_price = priced_items.reduce(function (a,b) {
return a + b ;});
return avg_price / priced_items.length;
};

document.querySelector("#answer1").textContent = cow(items)




var horse = function (x) {
  var price_ranged_items = []
  x.forEach(function(n) {
  if (n.price >= 14 && n.price<= 18){ 
    price_ranged_items.push(n.title);
  }

 });
return price_ranged_items;
};

document.querySelector("#answer2").textContent = horse(items)




var goat = function (x) {
  var gbp_item = []
  x.forEach(function(n) {
  if (n.currency_code == "GBP"){ 
    gbp_item.push(n.title);
    gbp_item.push(" \xA3 "+ n.price);
  }

 });
return gbp_item;
};


document.querySelector("#answer3").textContent = goat(items)