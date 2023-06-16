/**
 * Сортировка массива чисел
 * @export
 * @param {number[]} arr массив чисел
 * @return {number[]} отсортированный массив чисел
 */
export function sortArray(arr) {
  arr.sort((a, b) => a - b);
  return arr;
}