import express from 'express'

import { ControladorHabitacion } from '../controllers/ControladorHabitacion.js'
import { ControladorReserva } from '../controllers/ControladorReserva.js'

//En el archivo de rutas crear una variable encargada de definir todos lo endpoints de mi API
//Por cada de servicio que ofrece mi API debo tener un endpoint o ruta

export let rutas=express.Router()

//creo un objeto d ela clase ControladorHabitacion
let controlHabitacion=new ControladorHabitacion()
let controlReserva=new ControladorReserva()

//Defino las rutas para cada servicio de mi API:
rutas.post('/api/hotel/habitaciones',controlHabitacion.agregarHabitacion)
rutas.get('/api/hotel/habitaciones',controlHabitacion.consultarHabitaciones)
rutas.get('/api/hotel/habitaciones/:id',controlHabitacion.consultarHabitacion)
rutas.put('/api/hotel/habitaciones/:id',controlHabitacion.editarHabitacion)

//rutas para servicio de reservas
rutas.post('/api/hotel/reservas',controlReserva.agregarReserva)
rutas.get('/api/hotel/reservas',controlReserva.consultarReservas)
rutas.get('/api/hotel/reservas/:id',controlReserva.consultarReserva)
rutas.put('/api/hotel/reservas/:id',controlReserva.editarReserva)