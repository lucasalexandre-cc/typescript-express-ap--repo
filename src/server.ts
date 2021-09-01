import express, { Request, Response } from 'express';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (_req: Request, res: Response) => {
  res.status(200).send('Ok!');
});

app.listen(8080, () => console.log('Server running on port 8080'));
