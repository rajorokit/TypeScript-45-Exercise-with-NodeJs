let guestlist = ["Saqib","Noor","Abiha","Eshaal"];

let dontcome = guestlist[0];

console.log(dontcome, "Nai aa sakta");

guestlist.splice(0,1,"Moosa");

console.log("Good News!we have found a bigger table for dinner.");

guestlist.unshift("aais");

guestlist.push("Rohaan");

let middleIndex: number = Math.floor(guestlist.length /2);

guestlist.splice(middleIndex, 0,"Ali");

console.log("Updated list of our guests");

guestlist.forEach(oneguest=>console.log(`salam ${oneguest},would you like to dinner with me`));

