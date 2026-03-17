export function evalAverage(values: number[]) {
  let sum = 0
  let counter = 0

  values.forEach((value) => {
    if (!isNaN(value)) {
      sum += value
      counter += 1
    }
  })

  return sum / counter
}
