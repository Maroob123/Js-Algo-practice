const romanHash = {
    I :1,
    V :5,
    X :10,
    L :50,
    C :100,
    D :500,
    M :1000
}
var romanToInt = function(s){
    let temp = 0;
    for (let i = 0; i< s.length; i++){
        switch(true){
            case s[i] === "I" && s[i+1] === "V":
                temp += 4;
                i++;
                break;
            case s[i] === "I" && s[i+1] === "X":
                temp += 9;
                i++;
                break;
            case s[i] === "X" && s[i+1] === "L":
                temp += 40;
                i++;
                break;
            case s[i] === "X" && s[i+1] === "C":
                temp += 90;
                i++;
                break;
            case s[i] === "C" && s[i+1] === "D":
                temp += 400;
                i++;
                break;
            case s[i] === "C" && s[i+1] === "M":
                temp += 900;
                i++;
                break;
            default:
                temp += romanHash[s[i]];
        }
    }
    return temp;
}
console.log(romanToInt("LVIII"));