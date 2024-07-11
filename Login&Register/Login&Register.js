// document.getElementById("loginBtn").addEventListener("click", function() {
//     document.querySelector(".login-form").classList.add("active");
//     document.querySelector(".register-form").classList.remove("active");
// });


// document.getElementById("registerBtn").addEventListener("click", function() {
//     document.querySelector(".register-form").classList.add("active");
//     document.querySelector(".login-form").classList.remove("active");
// });

function loginForm(){
    /*
    querySelector() 方法返回文档中第一个匹配指定选择器的元素。
    classList 方法用于操作元素的类名。
    classList.add() 方法向元素添加一个或多个类。
    classList.remove() 方法从元素中删除一个或多个类。
    并结合css中，先对两个表单都进行 none 隐藏，然后设置 active 显示，
    点击按钮时，将当前显示的表单隐藏，另一个表单显示。
    */
    document.querySelector(".login-form").classList.add("active");
    document.querySelector(".register-form").classList.remove("active");
}

function registerForm(){
    document.querySelector(".register-form").classList.add("active");
    document.querySelector(".login-form").classList.remove("active");
}

function submitForm() {
    window.open("../comment/commentSection.html");
    // setTimeout(() => {console.log("停顿0.01秒后再关闭本页面");}, 10);
    // window.close();

}