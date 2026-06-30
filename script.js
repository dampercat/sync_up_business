const scroller = document.querySelector(".scroller")
const problem = document.querySelector(".problem")
const solution = document.querySelector(".solution")

scroller.addEventListener("click", function () {
    problem.style.display = "block"
    solution.style.display = "block"
});
