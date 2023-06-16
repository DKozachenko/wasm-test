/**
 * Сортировка массива чисел
 * @export
 * @param {i32[]} arr массив чисел
 * @return {i32[]} отсортированный массив чисел
 */
export function sortArray(arr: i32[]): i32[] {
  arr.sort((a, b) => a - b);
  return arr;
}