const hamList = document.querySelector("#ham_menu");
const section = document.querySelectorAll("#n1");
const close = document.querySelectorAll("#coverItem");
hamList.addEventListener("click", () => {
  const ham = document.getElementById("ham_menu");
  document.getElementById("cover").style.cssText =
    " width: 100%; height: 100%; ";
  document.getElementById("coverItem").style.cssText = "display: block";
  document.getElementById("menu").style.cssText = "display: flex; z-index: 2;";
});
section.forEach((e) => {
  e.addEventListener("click", function () {
    document.getElementById("cover").style.cssText = " width: 0%; height: 0%; ";
  });
});
