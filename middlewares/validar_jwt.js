const { response, request } = require("express");
const User = require('../models/Users');
const jwt = require('jsonwebtoken');

const validar_jwt = async (req = request, res = response, next) => {
    
    const token = req.header('x-token');
    
    if(!token){
        return res.status(400).json({
            msg:'Token inválido'
        })
    };
    
    try {
        const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY)
        console.log("iud: ",uid)
        // Buscar el usuario con la base de datos
        const user = await User.findById(uid);

        if(!user){
            return res.status(401).json({
                msg:'Token inválido - usuario no existe'
            })
        }

        // Si existe el usuario, verificamos si está activo
        if(!user.active){
            return res.status(401).json({
                msg:'Token inválido - usuario no existe'
            })
        }

        // Se añaden los datos del usuario a la petición para que pueda ser leído
        // por los siguientes middlewares
        req.user = user;

        // Continuar al siguiente middleware
        next()
    } catch (error) {
        console.log('Error al verificar token: ', token);
        return res.status(401).json({
            msg:'Token inválido - Error al verificar token'
        })
    }
    

}


module.exports = {
    validar_jwt
};