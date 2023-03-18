export const getUsers = () => {
    const users = localStorage.getItem('users')
    return users ? JSON.parse(users) : []
}
export const setUsers = (users) => {
    localStorage.setItem('users', JSON.stringify(users))
}
export const addUser = (id,{user,pass,email}) => {
    const curruser = {id,user,pass,email}
    const users = getUsers()
    users.push(curruser)
    setUsers(users)
}
export const getUser = (id) => {
    const users = getUsers()
    return users.find(u => u.id === id)
}
const removeUser = (user) => {
    const users = getUsers()
    const newUsers = users.filter(u => u.user !== user)
    setUsers(newUsers)
}
const updateUser = (user, newUser) => {
    const users = getUsers()
    const newUsers = users.map(u => u.user === user ? newUser : u)
    setUsers(newUsers)
}
const getPass = (pass) => {
    const users = getUsers()
    return users.find(u => u.pass === pass)
}
const updatePass = (pass, newPass) => {
    const users = getUsers()
    const newUsers = users.map(u => u.pass === pass ? newPass : u)
    setUsers(newUsers)
}
const getMail = (mail) => {
    const users = getUsers()
    return users.find(u => u.mail === mail)
}
const updateMail = (mail, newMail) => {
    const users = getUsers()
    const newUsers = users.map(u => u.mail === mail ? newMail : u)
    setUsers(newUsers)
}