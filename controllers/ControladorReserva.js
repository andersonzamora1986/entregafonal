//una clase controlador establñece los metodos (ACCIONES)
//que vamos a realizar en BD
//DEFINO LAS RUTAS PARA EL ARCHIVO DE RUTAS

import{ServicioReserva} from '../services/servicioReserva.js'
export class ControladorReserva{

    constructor(){}

    agregarReserva(request,response){

        let datosARegistrar=request.body
        let objetoServicio=new ServicioReserva()
        try{
            await objetoServicio.agregarReserva(datosARegistrar)
            response.status(200).json({
                "mensaje":"Exito en la operacion",
                "datos":null
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"Fallamos en la consulta"+error,
                "datos":null
            })
        }
    }

    consultarReservas(request,response){
        let objetoServicio=new ServicioReserva()
        try{
            response.status(200).json({
                "mensaje":"Exito en la operacion de busqueda de reservas",
                "datos": await objetoServicio.buscarTodasReservas()
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"Fallo en la operacion"+error,
                "datos":null
            })
        }
    }

    consultarReserva(request,response){
        let id=request.params.id
        let objetoServicio=new ServicioReserva()
        try{
            response.status(200).json({
                "mensaje":"Exito en la operacion de busqueda de una reserva",
                "datos": await objetoServicio.buscarReservaPorId(id)
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"fallo en la operacion"+error,
                "datos":null
            })
        }
    }

    editarReserva(request,response){
        let id=request=params.id
        let datosAEditar=request.body
        let objetoServicio=new ServicioReserva()
        try{
            await objetoServicio.editarReserva(id,datosAEditar)
            response.status(200).json({
                "mensaje":"Exito en la operacion de edicion",
                "datos":
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"Exito en la operacion"+error,
                "datos":null
            })
        }
    }

    
}