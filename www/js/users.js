const getUsers = () => {
    const users = localStorage.getItem('users')
    return users ? JSON.parse(users) : []
},
    setUsers = (users) => {
        localStorage.setItem('users', JSON.stringify(users))
    },
    addUser = (id, { user, pass, email }) => {
        const curruser = { id, user, pass, email }
        const users = getUsers()
        users.push(curruser)
        setUsers(users)
    },
    getUser = (id) => {
        const users = getUsers()
        return users.find(u => u.id === id)
    },
    removeUser = (user) => {
        const users = getUsers()
        const newUsers = users.filter(u => u.user !== user)
        setUsers(newUsers)
    },
    updateUser = (user, newUser) => {
        const users = getUsers()
        const newUsers = users.map(u => u.user === user ? newUser : u)
        setUsers(newUsers)
    },
    getPass = (pass) => {
        const users = getUsers()
        return users.find(u => u.pass === pass)
    },
    updatePass = (pass, newPass) => {
        const users = getUsers()
        const newUsers = users.map(u => u.pass === pass ? newPass : u)
        setUsers(newUsers)
    },
    getMail = (mail) => {
        const users = getUsers()
        return users.find(u => u.mail === mail)
    },
    updateMail = (mail, newMail) => {
        const users = getUsers()
        const newUsers = users.map(u => u.mail === mail ? newMail : u)
        setUsers(newUsers)
    }

export { getUsers, setUsers, getUser, addUser }