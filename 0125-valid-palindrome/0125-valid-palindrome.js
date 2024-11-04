/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
   
    const arrayInput = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const inputLength = arrayInput.length;
   let i= 0;
    while(i < Math.floor(inputLength/2)){
        if(arrayInput[i]===arrayInput[inputLength-1-i]){
            i++;
        }else {
            return false;
        }
    }
    return true ;
}

