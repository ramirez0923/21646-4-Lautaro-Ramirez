import express from 'express';
import { taskRouter } from './src/routes/task.routes.js';
import { startDb } from './src/config/database.js';
import cors from 'cors'
import morgan from 'morgan';
import helmet from 'helmet';

const app = express();

//middlewares
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
app.use(helmet({
    contentSecurityPolicy: false
}))

const port = 3000

app.use('/', taskRouter)

app.listen(port, () => {
    console.log(`server listening http://localhost:${port}`)
    startDb()
})