$(function () {
    $(btn1).click(function () {
        $(form1).css("left", "50px");
        $(form2).css("left", "450px");
        $(btn).css("left", "0px");
    })
    $(btn2).click(function () {
        $(form1).css("left", "-400px");
        $(form2).css("left", "50px");
        $(btn).css("left", "200px");
    })
})
/*
var x = document.getElementById("form1");
var y = document.getElementById("form2");
var z = document.getElementById("btn");
var text = document.getElementsByClassName("if_tab");

function form1() {
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px"
}

function form2() {
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "200px"
}
*/