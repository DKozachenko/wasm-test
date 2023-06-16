

// http://stackoverflow.com/questions/962802#962890
function shuffle(array) {
  let tmp, current, top = array.length;
  if (top) {
    while (--top) {
      current = Math.floor(Math.random() * (top + 1));
      tmp = array[current];
      array[current] = array[top];
      array[top] = tmp;
    }
  }
  return array;
}

/**
 * Получение случайного числа (включая границы диапазона)
 * @param {number} min нижняя граница
 * @param {number} max верхняя граница
 * @return {number} случайное число
 */
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Получение массива со случайными числами
 * @export
 * @param {number} length длина массива
 * @return {number[]} массив
 */
export function getRandomArray(length) {
  const arr = [];
  for (let i = 0; i < length; ++i) {
    arr.push(getRandomInt(1, length + 1)); 
  }
  return arr;
}

/**
 * Отслеживание времени исполнения функции
 * @export
 * @param {string} label подпись
 * @param {Function} callback функция
 * @param {any[]} rest аргументы функции
 * @return {any} значение функции
 */
export function markTime(label, callback, ...rest) {
  console.time(label);
  const result = callback(...rest);
  console.timeEnd(label);
  return result;
}