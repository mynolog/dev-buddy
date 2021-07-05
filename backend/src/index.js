import 'dotenv/config'
import './config/db'
import app from './app'

const PORT = 4040

const handleListening = () =>
  console.log(`✅ Server listening on: http://localhost:${PORT}/api`)

app.listen(PORT, handleListening)
