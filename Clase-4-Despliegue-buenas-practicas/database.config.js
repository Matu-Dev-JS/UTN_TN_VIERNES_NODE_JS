/* 
PASOS:
1- Crear cluster en mongo atlas
2- Clusters > Connect > copiar el connection string
3- Database Access > Add database access (credenciales y role de administrador de atlas)
4- Añadir la contraseña generada al connection string 
5- Network Access > Add Ip Adress > allow access from anywhere
6- Instalar mongoose

*/


/* Conexion con MongoDB */
import dotenv from "dotenv"
import mongoose from "mongoose";

dotenv.config()

const MONGO_URI = process.env.MONGO_URI


async function connectToMongoDB (){
    try{
        await mongoose.connect(MONGO_URI)
        console.log('Conexion con MongoDB establecida')
    }
    catch(error){
        console.error('Error al conectarse con MongoDB', error)
    }
}

export default connectToMongoDB
