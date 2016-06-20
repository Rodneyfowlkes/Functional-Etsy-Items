var cow = function (x) {
var priced_items = []
x.forEach(function(n) {
priced_items.push(n.price);

})
var total_price = priced_items.reduce(function (a,b) {
return a + b ;});
var avg_price = total_price / priced_items.length;
return Math.round(avg_price * 100) / 100

};

document.querySelector("#answer1").textContent = cow(items)








// var horse = function (x) {
//   var price_ranged_items = []
//   x.forEach(function(n) {
//   if (n.price >= 14 && n.price<= 18){ 
//     price_ranged_items.push(n.title);
//   }

//  });
// return price_ranged_items;
// };

// document.querySelector("#answer2").textContent = horse(items)
var horse = function (x) {
  x.forEach(function(n) {
  if (n.price >= 14 && n.price<= 18){ 
    var new_div = document.createElement("div"); 
  new_div.classList.add("answer_subdivs"); 
    new_div.innerHTML = '<span>' + n.title + '<span>';
 return document.querySelector("#answer2").appendChild(new_div);
 }});};
horse(items);











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


document.querySelector("#answer3").innerHTML = goat(items)




var hen = function (x) {
  // var wood_items = []
  x.forEach(function(n) {
  if (n.materials.includes("wood")){ 
    // wood_items.push(n.title);
        var new_div = document.createElement("div"); 
  new_div.classList.add("answer4_subdivs"); 
    new_div.innerHTML = '<span>' + n.title + '<span>';
 return document.querySelector("#answer4").appendChild(new_div);



  }

 });
// return wood_items;
};
hen(items);


var fox = function (x) {
  // var eight_items = []
  x.forEach(function(n) {
  if (n.materials.length >= 8){ 
    // eight_items.push(n.quantity + n.title + n.materials);



  //   var materials_list = n.materials.forEach(function(y) {
  //  	var new_mdiv = document.createElement("div"); 
  // new_mdiv.classList.add("answer5_subdivs");  
  // new_mdiv.innerHTML = '<span>' + y + '<span>';
  // return document.querySelector("#answer5").appendChild(new_mdiv);});


    var new_div = document.createElement("div"); 
  new_div.classList.add("answer5_subdivs"); 
    new_div.innerHTML = '<span>' + n.quantity + n.title + '<span>' + '<div class ="materials">' + n.materials + '</div>' ;
    // new_div.appendChild(materials_list(n));
 return document.querySelector("#answer5").appendChild(new_div);
 





 }



 



 });
// return eight_items;
};
fox(items);
// document.querySelector("#answer5").textContent = fox(items)

var alpaca = function (x) {
  var self_made_items = []
  x.forEach(function(n) {
  if (n.who_made === "i_did"){ 
    self_made_items.push(n);
  }

 });
return self_made_items.length;


};

document.querySelector("#answer6").textContent = alpaca(items)







