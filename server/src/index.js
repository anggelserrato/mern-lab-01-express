import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const app = express()

app.use(morgan('dev'))
app.use(helmet())
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
)

app.get('/', (req, res) => {
  res.json({ message: 'Servidor funcionando', status: 'ok' })
})

app.get('/api/about', (req, res) => {
  res.json({ message: 'Acerca de la API', status: 'ok' })
})

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hola desde la API', timestamp: Date.now() })
})

app.use((req, res) => {
  res.status(404).json({ message: 'Ruta no encontrada', status: 'error' })
})

app.listen(process.env.PORT, () => {
  console.log(`Servidor escuchando en el puerto ${process.env.PORT}`)
})
