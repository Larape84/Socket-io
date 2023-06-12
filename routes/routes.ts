import { Response, Request , Router } from 'express'
import Server from '../class/server';

export const router = Router();

router.get('/mensajes', (request : Request, response : Response)=>{
    response.json({
        ok: true,
        mensaje: 'Todo esta bien'
    })
})

router.post('/mensajes', (request : Request, response : Response)=>{

    const {cuerpo, de} = request.body

    const server = Server.instance;
    const payload = {
        de,
        cuerpo
    }
    server.io.emit('mensaje-nuevo', payload)

    response.json({
        ok: true,
        mensaje: 'POST - Listo',
        cuerpo,
        de
    })
})

router.post('/mensajes/:id', (request : Request, response : Response)=>{
    
    const {cuerpo, de} = request.body
    const id = request.params.id

    const server = Server.instance;
    const payload = {
        de,
        cuerpo
    }
    server.io.emit('mensaje-nuevo', payload)

    response.json({
        ok: true,
        mensaje: 'POST - Listo',
        cuerpo,
        de,
        id
    })
})