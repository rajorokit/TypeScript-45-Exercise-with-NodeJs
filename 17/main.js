var guestlist = ["Saqib", "Noor", "Abiha", "Eshaal"];
var dontcome = guestlist[0];
console.log(dontcome, "Nai aa sakta");
guestlist.splice(0, 1, "Moosa");
console.log("Good News!we have found a bigger table for dinner.");
guestlist.unshift("aais");
guestlist.push("Rohaan");
var middleIndex = Math.floor(guestlist.length / 2);
guestlist.splice(middleIndex, 0, "Ali");
console.log("Updated list of our guests");
guestlist.forEach(function (oneguest) { return console.log("salam ".concat(oneguest, ",would you like to dinner with me")); });
console.log("Unfortunately,the new dinner table wont arrive on time.so I cant only invite two guests to dinner with me");
while (guestlist.length > 2) {
    var removedGuest = guestlist.pop();
    console.log("sorry,".concat(removedGuest, "I cant invite you to dinner"));
}
console.log("Invitations to the last 2 Guests");
guestlist.forEach(function (lasttwo) { return console.log("Luckly ".concat(lasttwo, ",you are still invited to dinner")); });
guestlist.pop();
guestlist.pop();
console.log("Empty List:", guestlist);
