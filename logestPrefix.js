var longestCommonPrefix = function (strs) {
    if (strs.length == 0) return '';
    var result = '';
    for (var i = 0; i < strs[0].length; i++) {
        if (strs.every(function (item) {
            return strs[0][i] === item[i];
        })) {
            result += strs[0][i];
        } else {
            break;
        }
    }
    return result;
};
// var longestCommonPrefix = function(strs) {
//     if (!strs[0] || strs.length ==  1) return strs[0] || "";
//     let i = 0;
//     while(strs[0][i] && strs.every(w => w[i] === strs[0][i]))
//       i++;
//     return strs[0].substr(0, i);
// }
console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));