import axios from 'axios';

export const addTask = (req, res) => {
    const { username, password } = req.body;

    //Solicitud post a la api para login
    axios.post('https://bitako-api.vercel.app/api/add_task', { username, password })
        .then(response => {
            // Aquí podrías realizar alguna lógica para manejar la respuesta de la API
            const token = response.data.access_token
            
            res.send(response.data.msg);
            
            console.log(response.data.msg + " >> username: " + username);
            console.log("token: " + token)
        })
        .catch(error => {
            console.error(error.response.data.msg);
            res.status(500).send("Error en el login: " + error.response.data.msg);
        });
}
