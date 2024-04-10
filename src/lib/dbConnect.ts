import mongoose from 'mongoose'

type connectionObject = {
  isConnected?: number
}

const connection: connectionObject = {}

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log('Already connected to database')
    return
  }

  try {
    const db = await mongoose.connect(process.env.DATABASE_URI as string)

    console.log('db object', db)
    console.log('connection object', db.connections)

    connection.isConnected = db.connections[0].readyState

    console.log('Database connection established')
  } catch (error) {
    console.log('Database connection failed')
    console.log(error)
    process.exit(1)
  }
}

export default dbConnect
