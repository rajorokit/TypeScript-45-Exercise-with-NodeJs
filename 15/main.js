var guestlist = ["Moosa", "Eshaal", "Wahiba", "Tarooba"];
var dontcome = guestlist[0];
console.log(dontcome, "nai aa sakta");
guestlist.splice(0, 1, "Rohaan");
guestlist.forEach(function (guest) { return console.log("salam ".concat(guest, ",would u like to dinner with me?")); });
