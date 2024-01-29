import axios from 'axios';
import ejs from 'ejs';

const link = 'http://localhost:7777'                   //DEV
//const link = 'https://bitakoapi.vercel.app/'           //PROD


export const get_index = async (req, res) => {
    try {
        const html = await ejs.renderFile('src/views/index.ejs');
        res.send(html);
    } catch (error) {
        console.error("Error al renderizar la vista:", error.message);
        res.status(500).send("Error al renderizar la vista: " + error.message);
    }
};


export const get_register = async (req, res) => {
    try {
        const html = await ejs.renderFile('src/views/register.ejs');
        res.send(html);
    } catch (error) {
        console.error("Error al renderizar la vista:", error.message);
        res.status(500).send("Error al renderizar la vista: " + error.message);
    }
};
export const post_register = (req, res) => {
    const { UserName, Password } = req.body;

    if (!UserName || !Password) {
        return res.status(400).send("Nombre de usuario y contraseña son obligatorios.");
    }

    // Solicitud post a la API para registro
    axios.post(link + '/api/register', { UserName, Password })
    .then(response => {
        // Aquí podrías realizar alguna lógica para manejar la respuesta de la API
        // const token = response.data.access_token
        
        console.log(response.data.msg + " >> username: " + UserName);
        res.status(response.status).send(response.data.msg);
        // console.log("token: " + token)
    })
    .catch(error => {   
        if (error.response) {
            // El servidor respondió con un código de estado diferente de 2xx
            console.error("Error en el registro:", error.response.data.msg);
            res.status(error.response.status).send("Error en el registro: " + error.response.data.msg);
        } else if (error.request) {
            // La solicitud fue realizada pero no se recibió respuesta
            console.error("Error en el registro: No se recibió respuesta del servidor.");
            res.status(500).send("Error en el registro: No se recibió respuesta del servidor.");
        } else {
            // Algo sucedió al configurar la solicitud que desencadenó un error
            console.error("Error en el registro:", error.message);
            res.status(500).send("Error en el registro: " + error.message);
        }
    });
};


export const get_login = async (req, res) => {
    try {
        const html = await ejs.renderFile('src/views/login.ejs');
        res.send(html);
    } catch (error) {
        console.error("Error al renderizar la vista:", error.message);
        res.status(500).send("Error al renderizar la vista: " + error.message);
    }
};
export const post_login = async (req, res) => {
    const { UserName, Password } = req.body;

    if (!UserName || !Password) {
        return res.status(400).send("Nombre de usuario y contraseña son obligatorios.");
    }

    try {
        // Solicitud post a la API para iniciar sesión
        const response = await axios.post(link + '/api/login', { UserName, Password });

        // Aquí podrías realizar alguna lógica para manejar la respuesta de la API
        // const token = response.data.access_token
        console.log(response.data.msg + " >> username: " + UserName);

        // Renderizar una plantilla HTML si el inicio de sesión fue exitoso
        const html = await ejs.renderFile('src/views/app.ejs', { UserName });
        res.status(response.status).send(html);
        // console.log("token: " + token)
    } catch (error) {
        if (error.response) {
            // El servidor respondió con un código de estado diferente de 2xx
            console.error("Error en el inicio de sesión:", error.response.data.msg);
            res.status(error.response.status).send("Error en el inicio de sesión: " + error.response.data.msg);
        } else if (error.request) {
            // La solicitud fue realizada pero no se recibió respuesta
            console.error("Error en el inicio de sesión: No se recibió respuesta del servidor.");
            res.status(500).send("Error en el inicio de sesión: No se recibió respuesta del servidor.");
        } else {
            // Algo sucedió al configurar la solicitud que desencadenó un error
            console.error("Error en el inicio de sesión:", error.message);
            res.status(500).send("Error en el inicio de sesión: " + error.message);
        }
    }
};