import { transaction } from "./indexdb.js"

const getUsers = () => {
    const users = transaction('users', 'readwrite')
    const allusers = users.getAll()
    const ussers = allusers.result
    return ussers
}
const createUser = (user) => {
    const users = transaction('users', 'readwrite')
    users.put(user)
}
const getUser = (user, pass) => {
    const users = transaction('users', 'readwrite')
    const userIndex = users.index('user', 'pass')
    const req = userIndex.get([user, pass])
    const currentUser = req.result
    return currentUser
}