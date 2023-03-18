import { getSession } from "./session.js"

const validSession = () => {
  const session = getSession()
  return session ? true : false
}
const sesion = validSession()
if (sesion) {
  location.href = "../index.html"
}