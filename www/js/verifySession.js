import { getSession } from "./session.js"

const validSession = () => {
  const session = getSession()
  if (session) {
    return true
  }
  return false
}
const sesion = validSession()
if (sesion) {
    location.href = "index.html"
}