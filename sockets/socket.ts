import { Socket } from "socket.io";
import socketIO from 'socket.io';


interface Ipayload {
    de:string, 
    cuerpo:string
}

export const desconectar = (cliente : Socket)=>{
    cliente.on('disconnect', ()=>{
        console.log('cliente desconectado');
        
    })
}

export const mensaje = (cliente: Socket, io: socketIO.Server)=>{

    cliente.on('mensaje', ( payload : Ipayload)=>{

        console.log('mensaje recibido =>', payload);

        io.emit('mensaje-nuevo', payload);
        
    })

}