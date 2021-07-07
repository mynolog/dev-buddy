import 'dotenv/config'
import app from './app'
import './config/db'

const port = process.env.PORT || 4040

const handleListening = () =>
  console.log(`✅ Server listening on: http://localhost:${port}/api`)

app.listen(port, handleListening)
