/**
 * Является ли число простым (полный перебор)
 * @param {number} num число
 * @return {boolean} true / false
 */
function isPrimeDump(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i < num; ++i) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

/**
 * Является ли число простым (перебор до корня)
 * @param {number} num число
 * @return {boolean} true / false
 */
function isPrimeSmart(num) {
  if (num <= 1) {
    return false;
  }
  const sqrt = Math.sqrt(num);

  for (let i = 2; i < sqrt; ++i) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

/** 
 * Получение первого простого числа в массиве (полный перебор)
 * @export
 * @param {number[]} arr массив чисел
 * @return {number | null} простое число или null 
 */
export function getPrimeDump(arr) {
  const len = arr.length;
  for (let i = 0; i < len; ++i) {
    if (isPrimeDump(arr[i])) {
      return arr[i];
    }
  }

  return null;
}

/** 
 * Получение первого простого числа в массиве (перебор до корня)
 * @export
 * @param {number[]} arr массив чисел
 * @return {number | null} простое число или null 
 */
export function getPrimeSmart(arr) {
  const len = arr.length;
  for (let i = 0; i < len; ++i) {
    if (isPrimeSmart(arr[i])) {
      return arr[i];
    }
  }

  return null;
}