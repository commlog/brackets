module.exports = function check(str, bracketsConfig) {
  function check(str, bracketsConfig) {
    var stack = [];
    for (var i = 0; i < str.length; i++) {
        var currentBracket = str[i];
        for (var j = 0; j < bracketsConfig.length; j++) {
            var openBracket = bracketsConfig[j][0];
            var closeBracket = bracketsConfig[j][1];
            if (currentBracket === openBracket) {
                stack.push(currentBracket);
                break;
            }
            else if (currentBracket === closeBracket) {
                if (stack.length === 0 || stack[stack.length - 1] !== openBracket) {
                    return false;
                }
                else {
                    stack.pop();
                    break;
                }
            }
        }
    }
    return stack.length === 0;
}
