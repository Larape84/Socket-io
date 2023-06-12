import Server from './class/server';
import { router } from './routes/routes';
import bodyparser from 'body-parser';
import cors from 'cors'

const server = Server.instance;

server.app.use(cors({
    origin: true,  // Especifica el origen permitido
    // methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',  // Especifica los métodos HTTP permitidos
    // allowedHeaders: ['Content-Type', 'Authorization', 'X-Custom-Header'],
    credentials: true 
  }));


server.app.use(bodyparser.urlencoded({extended:true}));
server.app.use(bodyparser.json());

// server.app.use(cors({ origin: true , credentials : true}));

  

server.app.use('/', router)

server.start(()=>{
    console.log(`Servidor corriendo en el puerto ${server.port}`);
})