/**
 * 剩余参数为 ...参数名 的形式，且必须要在最后！
 * 此时剩余参数就是数组，而arguments缺少数数组特性
 * 官网参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/rest_parameters
 * */
function singUp(greetings, ...users) {
    console.log(greetings, users);
}

singUp("HELLO!", "Peppa Pig", "George Pig", "Daddy Pig", "Mummy Pig");