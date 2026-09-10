import { app } from './app.js';

const PORT = process.env.PORT ?? 4000;

console.log('CORS_ORIGIN:', process.env.CORS_ORIGIN);

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
