export const formatDisplayedPercentage = (value: number) => {
  return isNaN(value) ? '-' : `${value.toFixed(2)}%`
}

export const formatUSPhoneNumber = (phone?: string) => {
  if (!phone) return '-'

  const digits = phone.toString().replace(/\D/g, '')

  if (digits.length !== 10) {
    return phone
  }

  const area = digits.slice(0, 3)
  const prefix = digits.slice(3, 6)
  const line = digits.slice(6)

  return `(${area}) ${prefix}-${line}`
}
