/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function(nums) {
    let high = 0; 
    let negative = 0; 
    let zero = false; 
    nums.forEach(function (num, index) {
        if (num > 0) {
            var cutArr = nums.slice(index); 
            console.log(cutArr)
            var minus = 0;
            var positive = 0; 
            for (let i = 0; i < cutArr.length; i++) {
                if (cutArr[i] > 0) {
                    positive += cutArr[i]; 
                } else if (cutArr[i] < 0) {
                    console.log( i+1 === cutArr.length, (positive+(minus-cutArr[i])) > (positive+minus) )
                    console.log(i+1)
                    console.log((minus+cutArr[i]))
                    console.log((positive+(minus+cutArr[i])))
                    console.log((positive+(minus-cutArr[i])))
                    console.log((positive+minus))
                    minus += cutArr[i]; 
                    if ( minus > positive && Math.abs(cutArr[i]) >= Math.abs(cutArr[i+1]) ) {
                      break
                    } else if ( (i+1) != cutArr.length && Math.abs(cutArr[i]) >= cutArr[i+1]) {

                        if ((positive+(minus+cutArr[i])) > high) {
                            high = (positive + (minus+cutArr[i])); 
                            break
                        }; 

                    } else if ( (i+1) === cutArr.length && (positive+(minus-cutArr[i])) > (positive+minus) ) {
                        console.log('third')
                        minus = minus-cutArr[i]; 
                        break
                    }
                } 
            }
            if ((positive+minus) > high) {
                high = (positive+minus); 
            }; 
        } else if (num === 0) {
            zero = true; 
        } else if (num > negative || negative === 0) {
            negative = num; 
        } 
    }); 
    !high && !zero ? high = negative : high;   
    return high;
};

console.log(maxSubArray([2,1, -1]))