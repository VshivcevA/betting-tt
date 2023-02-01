let range = document.getElementById("percent");
let rangeOutput = document.getElementById("percentOutput");
let type = document.querySelector(".type");
let typeLabel = type.querySelector(".type__label");
let typeInput = type.querySelector(".type__input");
let typeTitle = type.querySelector(".type__title");
let typeList = type.querySelector(".type__list");
let typeItemArray = typeList.querySelectorAll(".type__item");
let typeArrow = type.querySelector(".type__arrow");

rangeOutput.innerHTML = range.value + " %";
range.addEventListener("input", () => {
  rangeOutput.innerHTML = range.value + "%";
});

typeList.classList.add("hidden");

typeLabel.addEventListener("mousedown", () => {
  typeList.classList.toggle("hidden");
  typeArrow.classList.toggle("type__arrow-rotate180");
  typeLabel.classList.toggle("type__label--open");
  type.addEventListener("mouseleave", () => {
    typeList.classList.add("hidden");
    typeLabel.classList.remove("type__label--open");
  });
});

typeItemArray.forEach((item) =>
  item.addEventListener("click", (evt) => {
    typeTitle.textContent = evt.target.textContent;
    typeInput.value = evt.target.textContent;
    typeArrow.classList.toggle("type__arrow-rotate180");
    typeList.classList.add("hidden");
    typeLabel.classList.remove("type__label--open");
  })
);
