// ----------------------------------------------------------------------

export function randomNumber(number: number) {
  return Math.floor(Math.random() * number) + 1;
}

export function randomNumberRange(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomInArray<T>(array: T[]) {
  return array[Math.floor(Math.random() * array.length)];
}

export function randomSubArray<T>(array: T[]): T[] {
  const start = Math.floor(Math.random() * array.length);
  const end = start + Math.floor(Math.random() * (array.length - start));
  
  const newArr = array.slice(start, end)
  return newArr.length === 0 ? [array[0]] : newArr.slice(0,3);
}
