import 'dotenv/config'
import app from './app'
import './config/db'

const PORT = process.env.PORT || 4040

const handleListening = () =>
  console.log(`✅ Server listening on: http://localhost:${PORT}/api`)

app.listen(PORT, handleListening)
