import { Socket } from "socket.io";
import socketIO from 'socket.io';
import { usuariosLista } from "../class/usuarios-lista";
import { usuario } from "../class/usuario";


interface Ipayload {
    de:string, 
    cuerpo:string
}

interface Iusuario {
    nombre : string
}

export const usuariosConectados = new usuariosLista();

export const desconectar = (cliente : Socket)=>{
    cliente.on('disconnect', ()=>{
        console.log('cliente desconectado');
        usuariosConectados.borrarUsuario(cliente.id);
        
    })
}

export const mensaje = (cliente: Socket, io: socketIO.Server)=>{

    cliente.on('mensaje', ( payload : Ipayload)=>{

        console.log('mensaje recibido =>', payload);

        io.emit('mensaje-nuevo', payload);
        
    })

}

export const configurarUsuario = (cliente: Socket, io: socketIO.Server)=>{

    cliente.on('configurar-usuario', ( payload : Iusuario, callback: Function )=>{

        usuariosConectados.actualizarNombre(cliente.id, payload.nombre);
        
        callback({
            ok:true,
            mensaje: ` Usuario ${payload.nombre} configurado`
        });
        
    })

}

export const conectarCliente = (cliente: Socket,)=>{

    const usuarioConect = new usuario(cliente.id);

    usuariosConectados.agregarUsuario(usuarioConect);
    
    

}