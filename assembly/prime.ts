/**
 * Является ли число простым (полный перебор)
 * @param {i32} num число
 * @return {boolean} true / false
 */
function isPrimeDump(num: i32): boolean {
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
 * @param {i32} num число
 * @return {boolean} true / false
 */
function isPrimeSmart(num: i32): boolean {
  if (num <= 1) {
    return false;
  }
  const sqrt = Math.sqrt(<f64>num);

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
 * @param {i32[]} arr массив чисел
 * @return {i32} простое число или null 
 */
export function getPrimeDump(arr: i32[]): i32 {
  const len = arr.length;
  for (let i = 0; i < len; ++i) {
    if (isPrimeDump(arr[i])) {
      return arr[i];
    }
  }

  return -1;
}

/** 
 * Получение первого простого числа в массиве (перебор до корня)
 * @export
 * @param {i32[]} arr массив чисел
 * @return {i32} простое число или null 
 */
export function getPrimeSmart(arr: i32[]): i32 {
  const len = arr.length;
  for (let i = 0; i < len; ++i) {
    if (isPrimeSmart(arr[i])) {
      return arr[i];
    }
  }

  return -1;
}