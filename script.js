// Select all html id
const mainContainer = document.getElementById("main-container");
const inputBox = document.getElementById("my-input");
const copyBtn = document.getElementById("myBtnOne");
const buttonTwo = document.getElementById("myBtnTwo");

// onload function
window.onload = () => {
  mainFun();
};

// mainFun function
function mainFun() {
  buttonTwo.addEventListener("click", function () {
    const bgColor = generatedHexColor();
    mainContainer.style.backgroundColor = bgColor;
    inputBox.value = bgColor;
  });
  copyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(inputBox.value);
  });
}

// generated HexColor function
function generatedHexColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}
