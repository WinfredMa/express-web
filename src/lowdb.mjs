import { Low, JSONFile } from 'lowdb'
import { join, dirname, resolve } from 'path'

const database = resolve('src/database')
const file = join(database, 'lowdb.json')
const adapter = new JSONFile(file)
const db = new Low(adapter)

db.data = db.data || { posts: [] } 
db.data.posts.push({id: 1, title: 'good news'})
await db.write()