/**
 * 1 可以直接在入参处赋值，但是要在最后处使用（最佳实践），
 * 因为如果调用时一定是有限对应靠前的入参；
 * 2 可以和解构赋值一起使用
 * */
function greetings(greeting, name = "MR./MS.") {
    console.log(`${greeting},${name}!`)
}
greetings("HI","Jane");
greetings("hello");
// 上面如果为greeting设置默认参数不会生效，因为一定先为greeting赋值"hello"

function exercise({name="Mr.someone",sports="ping-pang"}){
    console.log(`${name} is playing ${sports}!`);
}
exercise({});
