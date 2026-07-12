import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));
app.use(helmet());
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);

app.get('/', (req, res) => {
  res.json({ message: 'The server is running successfully', status: 'ok' });
});

app.get('/api/about', (req, res) => {
  res.json({ message: 'Information about this API', status: 'ok' });
});

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the API', timestamp: Date.now() });
});

app.use((req, res) => {
  res
    .status(404)
    .json({ message: 'The requested route was not found', status: 'error' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    message:
      err.message ||
      'An unexpected error occurred while processing your request',
    status: 'error',
  });
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
