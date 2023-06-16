import { getPrimeDump as getPrimeDumpWasm, 
  getPrimeSmart as getPrimeSmartWasm, 
  getRandomArray as getRandomArrayWasm, 
  sortArray as sortArrayWasm } from "../build/release/release.js";
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
  let resultWasm, resultJs;
  switch (operationKey) {
    case 'prime-number-dump':
      resultWasm = markTime('getPrimeDumpWasm', getPrimeDumpWasm, testArray);
      resultJs = markTime('getPrimeDump', getPrimeDump, testArray);
      return [resultWasm, resultJs];
    case 'prime-number-smart':
      resultWasm = markTime('getPrimeSmartWasm', getPrimeSmartWasm, testArray);
      resultJs = markTime('getPrimeSmart', getPrimeSmart, testArray);
      return [resultWasm, resultJs];
    case 'sort':
      resultWasm = markTime('sortArrayWasm', sortArrayWasm, testArray);
      resultJs = markTime('sortArray', sortArray, testArray);
      return [resultWasm, resultJs];
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

  const array = markTime('getRandomArray', getRandomArrayWasm, lengthValue);
  const [ resultWasm, resultJs ] = executeOperation(selectValue, array);

  if (!selectValue.includes('sort')) {
    resultTitle.textContent = `Результ: ${resultWasm}, ${resultJs}`;
  }
  if (!selectValue.includes('prime')) {
    resultTitle.textContent = `Массив отсортирован`;
  }
  // console.log(result);

});