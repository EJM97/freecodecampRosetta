'use strict';
// https://www.freecodecamp.org/learn/coding-interview-prep/rosetta-code/24-game

function solve24 (numStr) {
    const solve24 = 24
    const numbers = numStr.split("");
    // const fail ="no solution exists";
    let output;
    // let factors = [[1,24],[2,12],[3,8],[6,4]];
    const a = Number(numbers[0]);
    const b = Number(numbers[1]);
    const c = Number(numbers[2]);
    const d = Number(numbers[3]);

    // console.log(a+b+c+d)
// Case0.1 - sum of 4
    if (a+b+c+d === solve24){
        output = a+"+"+b+"+"+c+"+"+d
    }
// Case1 - sum of 2 combinations * sum of other 2 combinations
    else{
        output = case1(a,b,c,d, solve24);
    }





    return output;
}
// Case1 - sets of 2
function case1(a,b,c,d, solve24){
    let out = "-1";
    let breaker = false;
    let nums = [a,b,c,d];
    const count = nums.length;

    for (let i = 0; i < count && !breaker; i++) {
        let a =nums[i];
        for (let j = 0; j < count && !breaker; j++) {
            if (i!==j){
                let b =nums[j];
                for (let k = 0; k < count && !breaker; k++) {
                    if(k!==i && k!==j){
                        let c = nums[k];
                        for (let l = 0; l < count && !breaker; l++){
                            if(l!==i && l!==j && l!==k ){
                                let d = nums[l];
                                if ((a+b)*(c+d)===solve24){  //1234
                                    out = "(" + a + "+" + b + ")*(" + c + "+" + d + ")";
                                    breaker = true
                                }
                                else if(a*b+c*d===solve24){ //6323
                                    out = a + "*" + b + "+" + c + "*" + d ;
                                    breaker = true
                                }
                                else if(a*b-c*d===solve24){ //8442
                                    out = a + "*" + b + "-" + c + "*" + d ;
                                    breaker = true
                                }
                                else if(a*b*c+d===solve24){ //1448
                                    out = a + "*" + b + "*" + c + "+" + d ;
                                    breaker = true
                                }
                                else if(a*b*c-d===solve24){ //8442
                                    out = a + "*" + b + "*" + c + "-" + d ;
                                    breaker = true
                                }
                                else if(a+b+c-d===solve24){ //
                                    out = a + "+" + b + "+" + c + "-" + d ;
                                    breaker = true
                                }
                                else if(a*b+c+d===solve24){ //
                                    out = a + "*" + b + "+" + c + "+" + d ;
                                    breaker = true
                                }
                                else if(a*b+c-d===solve24){ //
                                    out = a + "*" + b + "+" + c + "-" + d ;
                                    breaker = true
                                }
                                else if(a*b-c-d===solve24){ //
                                    out = a + "*" + b + "-" + c + "-" + d ;
                                    breaker = true
                                }
                                else if(a*b*c/d===solve24){ //
                                    out = a + "*" + b + "*" + c + "/" + d ;
                                    breaker = true
                                }
                                else if(a+b+c/d===solve24){ //
                                    out = a + "+" + b + "+" + c + "/" + d ;
                                    breaker = true
                                }
                                else if(a+(b+c)/d===solve24){ //
                                    out = a + "+(" + b + "+" + c + ")/" + d ;
                                    breaker = true
                                }
                                else if((a+b+c)/d===solve24){ //
                                    out = "("+ a + "+" + b + "+" + c + ")/" + d ;
                                    breaker = true
                                }
                                else if((a+b+c)/d===solve24){ //
                                    out = "("+ a + "+" + b + "+" + c + ")/" + d ;
                                    breaker = true
                                }
                                else if((a-b/c)*d===solve24){ //
                                    out = "("+ a + "-" + b + "/" + c + ")*" + d ;
                                    breaker = true
                                }
                                else if((a-b+c)*d===solve24){ //
                                    out = "("+ a + "-" + b + "+" + c + ")*" + d ;
                                    breaker = true
                                }
                                else if((a*b-c)*d===solve24){ //
                                    out = "("+ a + "*" + b + "-" + c + ")*" + d ;
                                    breaker = true
                                }
                                else if ((a*b)/(c+d)===solve24){  //
                                    out = "(" + a + "*" + b + ")/(" + c + "+" + d + ")";
                                    breaker = true
                                }
                                else if ((a*b)/(c-d)===solve24){  //
                                    out = "(" + a + "*" + b + ")/(" + c + "-" + d + ")";
                                    breaker = true
                                }
                                else if ((a*b)*(c*d)===solve24){  //
                                    out = "" + a + "*" + b + "*" + c + "*" + d + "";
                                    breaker = true
                                }
                                else if ((a*b)*(c*d)===solve24){  //
                                    out = "(" + a + "*" + b + ")*(" + c + "*" + d + ")";
                                    breaker = true
                                }
                                else if ((a+b)*c/d===solve24){  //
                                    out = "(" + a + "+" + b + ")*(" + c + "/" + d + ")";
                                    breaker = true
                                }
                                else if ((a+b)*c-d===solve24){  //3565
                                    out = "(" + a + "+" + b + ")*" + c + "-" + d + "";
                                    breaker = true
                                }
                                else if ((a-b)*c/d===solve24){  //
                                    out = "(" + a + "-" + b + ")*(" + c + "/" + d + ")";
                                    breaker = true
                                }
                                else if (d/((a/b)-c)===solve24){  // 6541
                                    out = d+"/((" + a + "/" + b + ")-" + c + ")";
                                    breaker = true
                                }
                                else if(a*(b+c)+d===solve24){ //8118
                                    out =  a +"*("+ b + "+" + c + ")+" + d ;
                                    breaker = true
                                }




                            }
                        }
                    }

                }
            }
        }
    }
    return out;
}

console.log(solve24("1222"));
console.log(solve24("4878"));
console.log(solve24("1234"));
console.log(solve24("6789"));
console.log(solve24("1127"));

console.log(solve24("6323"));
console.log(solve24("8442"));
console.log(solve24("6523"));
