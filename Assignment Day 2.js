/* Solution 1 */

var str = "Letsupgrade Javascript";
var searchChar = 't';
function search (searchChar) {
    var y = str.indexOf(searchChar);
    if(y != -1) {
        console.log("Character present");
    }
    else {
        console.log("Character not present");
    }
}

/* Solution 2 */

var min = 100;
function convertToSec (min) {
    var sec = min*60;
    console.log(sec);
    return sec;
}

/* Solution 3 */

var ary = ["A", "B", "C", "D", "E"];
var searchElement = "X";
function search(searchElement){
    for(i=0; i<ary.length-1; i++) {
        if(ary[i] == searchElement)
            console.log('Element found');
    }
}

/* Solution 4 */

var ary = ["A", "B", "C", "D", "E", "apple"];    
function display(){
    for(i=0; i<ary.length; i++) {
        if((ary[i].indexOf('a')) != -1)
            console.log(ary[i]);
    }
}

/* Solution 5 */

var ary = ["A", "B", "C", "D", "E"];
function printReverse(){
    for(i=ary.length-1; i>=0; i--) {
        console.log(ary[i]);
    }
}