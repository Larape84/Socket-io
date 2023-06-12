import express from 'express';
import { SERVER_PORT } from '../global/environment';
import socketIO from 'socket.io';
import http from 'http';
import * as socketfunction from '../sockets/socket'

export default class Server {

    public app : express.Application;
    public port: number ;
    private static _instance : Server;
    public io : socketIO.Server;
    private httpServer : http.Server;

    private constructor () {
        this.app = express();
        this.port = SERVER_PORT;

        this.httpServer = new http.Server(this.app);
        this.io = new socketIO.Server(this.httpServer, {
            cors: {
                origin: 'http://localhost:4200',
                methods: ['GET', 'POST'],
                allowedHeaders: ['Content-Type', 'Authorization']
              }
        });
        this.escucharSocket();
    }

    public static get instance () : Server {
        return this._instance || ( this._instance = new this())
    }

    public start(callback: any) {
        this.httpServer.listen(this.port, callback );
    }

    private escucharSocket(){

        console.log('escuchando sockets');
        
        this.io.on('connection', cliente=>{

            console.log('cliente conectado')

            socketfunction.mensaje(cliente, this.io);

            socketfunction.desconectar(cliente);
        })
    }

}