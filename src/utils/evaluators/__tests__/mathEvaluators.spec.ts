import { evalAverage } from '@/utils/evaluators/mathEvaluators'

describe('`evalAverage` function', () => {
  it('should return the average of list of valid numbers', () => {
    const list = [1, 2, 3, 4, 5]

    expect(evalAverage(list)).toBe(3)
  })

  it('should return the average of list of numbers ignoring NaN values', () => {
    const list = [1, NaN, 2, 3, 4, NaN, 5]

    expect(evalAverage(list)).toBe(3)
  })

  it('should return NaN if list has no valid values', () => {
    const list = [NaN, NaN, NaN, NaN, NaN]

    expect(evalAverage(list)).toBe(NaN)
  })
})
