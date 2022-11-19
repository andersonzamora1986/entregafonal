import express from 'express'
import {rutas} from '../routes/rutasAPI.js'
import { conectarConBaseDatos } from '../database/conexion.DataBase.js'

export class API{

    constructor(){
        this.app = express()
        this.conectarConBD()
        this.atenderPeticiones()
    }
        
    levantarServidor(){
        this.app.listen(process.env.PORT,function(){
            console.log("Servidor encendido"+process.env.PORT)
        })
    }

    conectarConBD(){
        conectarConBaseDatos()
    }

    atenderPeticiones(){
        
        this.app.use(express.json()) //habilita la recepcion de datos por el body de la peticion
        this.app.use('/',rutas)
        
    }

}