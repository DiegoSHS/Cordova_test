export const initdb = () => {
    const database = window.indexedDB
    const req = database.open('insta_cordo', 1)
    
    req.onerror = (e) => {
        console.log('Error opening database')
    }
    req.onupgradeneeded = (e) => {
        const db = req.result
        const users = db.createObjectStore('users', { keyPath: 'id', autoIncrement: true })
        users.createIndex('user', 'user', { unique: true })
        users.createIndex('pass', 'pass', { unique: false })
        users.createIndex('email', 'email', { unique: false })
        const blogs = db.createObjectStore('blogs', { keyPath: 'id', autoIncrement: true })
        blogs.createIndex('owner', 'owner', { unique: false })
        blogs.createIndex('content', 'content', { unique: false })
        blogs.createIndex('image', 'image', { unique: false })
        console.log('Databases created')
    }
    req.onsuccess = (e) => {
        console.log('Database opened')
    }
    return req
}
