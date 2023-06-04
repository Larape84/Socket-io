import Server from './class/server';
import { router } from './routes/routes';
import bodyparser from 'body-parser';
import cors from 'cors'

const server = new Server();


server.app.use(bodyparser.urlencoded({extended:true}));
server.app.use(bodyparser.json());

server.app.use(cors({ origin: true , credentials : true}));


server.app.use('/', router)

server.start(()=>{
    console.log(`Servidor corriendo en el puerto ${server.port}`);
})