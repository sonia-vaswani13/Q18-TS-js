"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Q18.Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.
var placeToVisit = ["singapore", "Newyork", "India", "Islamabad"];
//• Print your array in its original order.
console.log("Original Order:");
console.log(placeToVisit);
//• Print your array in alphabetical order without modifying the actual list.
console.log("Alphabetical order:");
console.log(__spreadArray([], placeToVisit, true).sort());
//• Show that your array is still in its original order by printing it.
console.log("still in original order:");
console.log(placeToVisit);
//• Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse alphabetical order");
console.log(__spreadArray([], placeToVisit, true).sort().reverse());
//• Show that your array is still in its original order by printing it again.
console.log("still original order");
console.log(placeToVisit);
//• Reverse the order of your list. Print the array to show that its order has changed.
placeToVisit.reverse();
console.log("Reversed order:");
console.log(placeToVisit);
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
placeToVisit.reverse();
console.log("Back to original order:");
console.log(placeToVisit);
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
placeToVisit.sort();
console.log("Sorted in alphabetical order:");
console.log(placeToVisit);
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
placeToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("sorted in reverse alphabetical order:");
console.log(placeToVisit);
