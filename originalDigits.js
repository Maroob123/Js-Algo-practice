
var originalDigits = function (s) {
    var result = [0,0,0,0,0,0,0,0,0,0];
    for (let index = 0; index < s.length; index++) {
        if (s[index] === 'z') {
            result[0]++; 
        }
        if (s[index] === 'w') {
            result[2]++; 
        }
        if (s[index] === 'g') {
            result[8]++; 
        }
        if (s[index] === 'x') {
            result[6]++; 
        }
        if (s[index] === 'v') {
            result[5]++; 
        }
        if (s[index] === 'o') {
            result[1]++; 
        }
        if (s[index] === 's') {
            result[7]++; 
        }
        if (s[index] === 'f') {
            result[4]++; 
        }
        if (s[index] === 'h') {
            result[3]++; 
        }
        if (s[index] === 'i') {
            result[9]++; 
        }
    }
    result[7] -= result[6];
    result[5] -= result[7];
    result[4] -= result[5]
    result[3] -= result[8];
    result[9] -= result[8] + result[5] + result[6];
    result[1] -= result[0] + result[2] + result[4];

    var res = [];
    for (let i = 0; i < result.length; i++) {
        if(result[i] > 0){
            for(let k=0; k < result[i]; k++){
                res.push(i)
            }
        }
    }
    // result.sort();
    res = res.join('');
    return res;
};
console.log(originalDigits("owoztneoer"));
console.log(originalDigits("fviefuro"));
console.log(originalDigits("zerozero"));
console.log(originalDigits("zeroonetwothreefourfivesixseveneightnine"));
