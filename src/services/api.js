function localCard(userData) {

    return fetch('https://dev.adalab.es/api/card', {
        method: 'POST', // Para enviar datos
        body: JSON.stringify(userData),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => response.json())
        .then(responseJson => {
            if (responseJson.success) {
                return responseJson.cardURL;

            } else {
                return ('Faltan datos por rellenar, no seas vago.');
            }
        });
}
export default localCard;