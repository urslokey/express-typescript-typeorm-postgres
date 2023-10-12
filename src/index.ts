import express, { Express } from 'express';
import { dbConfig } from './dbconfig';
import userRoutes from './routes/user'

const app: Express = express();
const port = 3000;

app.use(express.urlencoded({ extended : false }));
app.use(express.json());

dbConfig.initialize();

app.use('/',userRoutes);


app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
