export const getSession = () => {
    const session = JSON.parse(localStorage.getItem('session'))
    return session ? session : {}
}
export const setSession = (session) => {
    localStorage.setItem('session', JSON.stringify(session))
}
export const deleteSession = () => {
    localStorage.removeItem('session')
}