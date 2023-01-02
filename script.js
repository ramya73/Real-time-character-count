const textarea = document.getElementById("textarea");
const total = document.getElementById("total");
const remaining = document.getElementById("remaining");

textarea.addEventListener("keyup", () => {
  total.innerText = textarea.value.length;
  remaining.innerText =
    textarea.getAttribute("maxlength") - textarea.value.length;
});
