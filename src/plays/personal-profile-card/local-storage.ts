const set = (key: string, value: object) => {
  try {
    localStorage.setItem(key, JSON.stringify(value))
    return true
  } catch (error) {
    return false
  }
}

const get = (key: string) => {
  try {
    return JSON.parse(localStorage.getItem(key))
  } catch (error) {
    return false
  }
}

const remove = (key: string) => {
  try {
    localStorage.removeItem(key)
    return true
  } catch (error) {
    return false
  }
}

export { set, get, remove }
