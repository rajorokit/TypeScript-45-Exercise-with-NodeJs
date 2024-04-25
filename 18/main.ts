let countriestoVisit: String [] =  ["China","Denmark","Barazil","Argentina"];

console.log("original order:",countriestoVisit);

console.log("Alphabetical order:",[... countriestoVisit.sort()]);

console.log("still in original order:", countriestoVisit);

console.log("Revers order:",[... countriestoVisit].reverse());

console.log("still in original order:", countriestoVisit);

console.log("original Array Reversed:", countriestoVisit.reverse());

console.log("Back to original order:", countriestoVisit.reverse());

console.log("sorted in Alphabetical order:", countriestoVisit.sort());

console.log("original Array Reversed:", countriestoVisit.reverse());