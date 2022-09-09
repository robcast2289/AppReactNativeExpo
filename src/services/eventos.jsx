
const apiURL = 'https://eventos.galileo.edu/api/eventoslogin';
const apiURL2 = 'https://eventos.galileo.edu/api/detallelogin/';

export const EventosLogin = () => {
    return fetch(apiURL)
    .then(res => res.json())
    .then(response => {
        const eventos = response.Eventos;
        return eventos;
    })
}

export const DetalleLogin = (evento) => {
    return fetch(apiURL2+evento)
    .then(res => res.json())
    .then(response => {
        const evento = response;
        return evento;
    })
}
