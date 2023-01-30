let range = document.getElementById('percent');
let rangeOutput = document.getElementById('percentOutput');
rangeOutput.innerHTML = range.value+" %"
range.addEventListener('input',()=> {
  rangeOutput.innerHTML = range.value+"%"
})

const type = document.querySelector('.type')
const typeLabel = type.querySelector('.type__label')
const typeInput = type.querySelector('.type__input')
const typeTitle = type.querySelector('.type__title')
const typeList = type.querySelector('.type__list')
const typeItemArray = typeList.querySelectorAll('.type__item')
const typeArrow = type.querySelector('.type__arrow')

typeList.classList.add('hidden')

typeLabel.addEventListener('mousedown', () => {
  typeList.classList.toggle('hidden');
  typeArrow.classList.toggle('type__arrow-rotate180');
  typeLabel.classList.toggle('type__label--open');
  type.addEventListener('mouseleave', () => {
    typeList.classList.add('hidden');
    typeLabel.classList.remove('type__label--open');
  })
})

typeItemArray.forEach(item =>
  item.addEventListener('click', (evt) => {
    typeTitle.textContent = evt.target.textContent;
    typeInput.value = evt.target.textContent;
    typeArrow.classList.toggle('type__arrow-rotate180');
    typeList.classList.add('hidden');
    typeLabel.classList.remove('type__label--open');
  }))
