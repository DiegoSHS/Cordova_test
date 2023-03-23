import { openDB } from 'https://cdn.jsdelivr.net/npm/idb@7/+esm'

const initdb = async() => {
    const db = await openDB('users', 1, {
        upgrade(db, oldVersion, newVersion, transaction, event) {
            const users = db.createObjectStore('users', {
                keyPath: 'id',
                autoIncrement: true,
            })
            users.createIndex('user', 'user', { unique: true })
            users.createIndex('pass', 'pass', { unique: false })
            users.createIndex('email', 'email', { unique: false })
            users.createIndex('image', 'image', { unique: false })
            const blogs = db.createObjectStore('blogs', { keyPath: 'id', autoIncrement: true })
            blogs.createIndex('owner', 'owner', { unique: false })
            blogs.createIndex('content', 'content', { unique: false })
            blogs.createIndex('image', 'image', { unique: false })
        },
        blocked(currentVersion, blockedVersion, event) {
            // …
        },
        blocking(currentVersion, blockedVersion, event) {
            // …
        },
        terminated() {
            // …
        }
    })
    return db
}

export const getBlogs = async() => {
    const db = await initdb()
    const store = db.transaction('blogs').objectStore('blogs')
    const value = await store.getAll()
    return value
}

export const addBlog = async(blog) => {
    const db = await initdb()
    const tx = db.transaction('blogs', 'readwrite')
    const store = tx.objectStore('blogs')
    const value = await store.add(blog)
    return value
}

export const deleteBlog = async(id) => {
    const db = await initdb()
    const tx = db.transaction('blogs', 'readwrite')
    const store = tx.objectStore('blogs')
    const value = await store.delete(Number(id))
    return value
}
