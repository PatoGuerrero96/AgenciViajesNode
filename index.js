import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

const app = express();


//conectar la base de datos
db.authenticate()
    .then(() => {
        console.log('base de datos conectada')
        
    }).catch((err) => {
        console.log(err)
        
    });

// definir puerto
const port = process.env.PORT || 4000;

//Habilitar pug
app.set('view engine', 'pug');

//Definir carpeta publica
app.use(express.static('public'));

//Middleware año actual
app.use((req, res, next) =>{
    const year = new Date();

    res.locals.actualYear  = year.getFullYear();
    res.locals.nombresitio = 'Agencia de Viajes';
    next();
});

//agregar body Parse para leer datos del formulario
app.use(express.urlencoded({extended: true}));



//agregar router
app.use('/',router);


app.listen(port,()=>{
    console.log(`servidor funcionando ${port} `)

})