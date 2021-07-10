import 'dotenv/config'
import './config/db'
import app from './app'

const port = process.env.PORT || 4040

const handleListening = () =>
  console.log(`✅ Server listening on: http://localhost:${port}/api`)

app.listen(port, handleListening)
