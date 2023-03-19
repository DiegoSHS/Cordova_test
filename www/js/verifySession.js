import { getSession } from "./session.js"

const relocate = () => {
  if (!getSession()) {
    location.href = "../index.html"
  }
}
relocate()