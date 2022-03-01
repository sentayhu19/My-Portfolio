const hamList = document.querySelector("#ham_menu");
const section = document.querySelectorAll("#n2");
const close = document.querySelector("#coverItem");
hamList.addEventListener("click", function () {
  document.getElementById("cover").style.cssText =
    " width: 100%; height: 100%; ";
  document.getElementById("coverItem").style.cssText = "display: block";
  document.getElementById("menu").style.cssText = "display: flex; z-index: 2;";
  document.getElementById("body").style.cssText = "overflow: hidden;";
});
section.forEach((e) => {
  e.addEventListener("click", () => {
    document.getElementById("cover").style.cssText = " width: 0%; height: 0%; ";
    document.getElementById("body").style.cssText = "overflow: none;";
  });
});
close.addEventListener("click", function () {
  document.getElementById("cover").style.cssText = " width: 0%; height: 0%; ";
  document.getElementById("body").style.cssText = "overflow: none;";
});
