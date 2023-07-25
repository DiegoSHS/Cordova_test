export const getSession = () => {
    const session = JSON.parse(localStorage.getItem('session'))
    return session ? session : false
},
    setSession = (session) => {
        localStorage.setItem('session', JSON.stringify(session))
    },
    deleteSession = () => {
        localStorage.removeItem('session')
    }
