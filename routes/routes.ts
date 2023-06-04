import { Response, Request , Router } from 'express'

export const router = Router();

router.get('/mensajes', (request : Request, response : Response)=>{
    response.json({
        ok: true,
        mensaje: 'Todo esta bien'
    })
})

router.post('/mensajes', (request : Request, response : Response)=>{

    const {cuerpo, de} = request.body

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

    response.json({
        ok: true,
        mensaje: 'POST - Listo',
        cuerpo,
        de,
        id
    })
})