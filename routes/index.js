
import express from 'express';
import { paginaInicio, paginaNosotros, paginaTestimoniales, paginaViajes,paginaDetalleViaje } from '../controllers/paginasController.js'
import { guardarTestimonial}from '../controllers/testimonialController.js';
const router = express.Router();
//req = es la peticion que hacesmos | res = es la respuesta que obtenemos
router.get('/', paginaInicio );
router.get('/nosotros', paginaNosotros);
router.get('/viajes', paginaViajes);
router.get('/testimoniales',paginaTestimoniales); 
router.post('/testimoniales', guardarTestimonial);
router.get('/viajes/:slug', paginaDetalleViaje);



export default router;