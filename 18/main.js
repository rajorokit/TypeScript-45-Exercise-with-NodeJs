var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var countriestoVisit = ["China", "Denmark", "Barazil", "Argentina"];
console.log("original order:", countriestoVisit);
console.log("Alphabetical order:", __spreadArray([], countriestoVisit.sort(), true));
console.log("still in original order:", countriestoVisit);
console.log("Revers order:", __spreadArray([], countriestoVisit, true).reverse());
console.log("still in original order:", countriestoVisit);
console.log("original Array Reversed:", countriestoVisit.reverse());
console.log("Back to original order:", countriestoVisit.reverse());
console.log("sorted in Alphabetical order:", countriestoVisit.sort());
console.log("original Array Reversed:", countriestoVisit.reverse());
