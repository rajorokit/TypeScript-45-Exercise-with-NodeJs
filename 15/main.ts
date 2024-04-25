let guestlist =["Moosa","Eshaal","Wahiba","Tarooba"];

let dontcome = guestlist[0];

console.log(dontcome,"nai aa sakta");

guestlist.splice(0,1,"Rohaan");

guestlist.forEach(guest=>console.log(`salam ${guest},would u like to dinner with me?`));