import { usuario } from "./usuario";



export class usuariosLista {


    private lista : usuario [] = []

    constructor(){

    }

    /**
     * 
     * @param usuario agrega un usuario
     * @returns 
     */

    public agregarUsuario( usuario : usuario): usuario {
        this.lista.push(usuario)
        console.log('Usuarios conectados',this.lista);
        
        return usuario
    }


    /**
     * 
     * @param id 
     * @param nombre 
     */
    public actualizarNombre( id : string, nombre: string ): void {

        this.lista.forEach((item)=>{
            if(item.id === id){
                item.nombre = nombre;
                
            }

        })

        console.log('actualizando usuario', this.lista);
        

    }

    /**
     * 
     * @returns 
     */
    public obtenerListaUsuarios(): usuario[] {
        return this.lista
    }

    /**
     * 
     * @param id 
     * @returns 
     */
    public obtenerUsuario(id: string): usuario | undefined {
        return this.lista.find((item)=>{  item.id===id});
    }

    /**
     * 
     * @param sala 
     * @returns 
     */
    public obtenerUsuariosSala(sala:string): usuario[] {
        return this.lista.filter((item)=>item.sala === sala)
    }


    /**
     * 
     * @param id se borra un usuario
     * @returns 
     */
    public borrarUsuario(id:string): usuario | undefined {

        const tempUser = this.obtenerUsuario(id);

        this.lista = this.lista.filter((item)=>{item.id !== id})

        return tempUser;
    }

}