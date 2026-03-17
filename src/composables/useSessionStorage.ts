import { ref, watch } from 'vue'

export function useSessionStorage<T>(key: string, initialValue: T) {
  const storedValue = sessionStorage.getItem(key)

  const data = ref<T>(storedValue ? JSON.parse(storedValue) : initialValue)

  watch(
    data,
    (newValue) => {
      sessionStorage.setItem(key, JSON.stringify(newValue))
    },
    { deep: true },
  )

  const setValue = (value: T) => {
    data.value = value
  }

  const remove = () => {
    sessionStorage.removeItem(key)
    data.value = initialValue
  }

  return {
    data,
    setValue,
    remove,
  }
}
