import { formatDisplayedPercentage, formatUSPhoneNumber } from '@/utils/formatters/formatters'

describe('formatters', () => {
  describe('`formatDisplayedPercentage`', () => {
    it('should return formatted value if number is valid', () => {
      const someValue = 23.18292229

      expect(formatDisplayedPercentage(someValue)).toBe('23.18%')
    })

    it('should return `-` if number is invalid', () => {
      const someInvalidValue = NaN

      expect(formatDisplayedPercentage(someInvalidValue)).toBe('-')
    })
  })

  describe('`formatUSPhoneNumber`', () => {
    it('should return formatted phone if value is valid', () => {
      const somePhone = '2930829382'

      expect(formatUSPhoneNumber(somePhone)).toBe('(293) 082-9382')
    })

    it('should return value itself if it is invalid', () => {
      const somePhone = '293032'

      expect(formatUSPhoneNumber(somePhone)).toBe('293032')
    })

    it('should return `-` if phone is falsy', () => {
      const somePhone = undefined

      expect(formatUSPhoneNumber(somePhone)).toBe('-')
    })
  })
})
