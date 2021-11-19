function addFunction(e) {
    const resultArea = document.querySelector(".text-content");
    console.log(e.target.innerHtml)
    resultArea.textContent += e.target.textContent;
}

const buttons = document.querySelectorAll(".key");
buttons.forEach((button) => {
    button.addEventListener("click", addFunction);
})