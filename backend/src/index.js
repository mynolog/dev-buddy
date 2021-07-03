import './db'
import './models/Post'
import app from './app'

const PORT = 4040

const handleListening = () =>
  console.log(`✅ Server listening on: http://localhost:${PORT}`)

app.listen(PORT, handleListening)
