import { add, test, memory } from "../build/release/release.js";
import { getRandomArray, markTime } from './utils.js';
import { getPrimeDump, getPrimeSmart } from './prime.js';
import { sortArray } from './sort.js';

const operationSelect = document.querySelector('#operation');
const lengthInput = document.querySelector('#length');
const form = document.querySelector('.form');
const resultTitle = document.querySelector('.result');

/**
 * Выполнить операцию
 * @param {string} operationKey ключ операции
 * @param {number[]} testArray массив чисел
 * @return {number | number[]} первое простое число или отсортированный массив
 */
function executeOperation(operationKey, testArray) {
  switch (operationKey) {
    case 'prime-number-dump-wasm':
      break;
    case 'prime-number-dump-js':
      return getPrimeDump(testArray);
    case 'prime-number-smart-wasm':
      break;
    case 'prime-number-smart-js':
      return getPrimeSmart(testArray);
    case 'sort-wasm':
      break;
    case 'sort-js':
      return sortArray(testArray);
    default:
      console.log('Неизвестный тип операции');
  }

  return null;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const selectValue = operationSelect.value;
  const lengthValue = +lengthInput.value;
  console.log(selectValue, lengthValue)

  const array = markTime('getRandomArray', getRandomArray, lengthValue);
  const result = markTime('opexecuteOperation', executeOperation, selectValue, array);

  if (!selectValue.includes('sort')) {
    resultTitle.textContent = `Результ: ${result}`;
  }
  if (!selectValue.includes('prime')) {
    resultTitle.textContent = `Массив отсортирован`;
  }
  // console.log(result);

});