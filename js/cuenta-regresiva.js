// Hola de nuevo.
// Tengo un problema con setInterval
// Tengo esta función para que me muestre un contador regresivo que funciona bien. La el problema es cuando quiero cambiarle el valor de fecha y hora a finalizar. vuelvo a llamar a la función sin recargar la página y se crea un nuevo setInterval, y funcionan los dos a la vez (dos o tantas veces llamo a la función), mostrando simultaneamente en el mismo DOM todos los resultados siendo un caos. Solo quiero que se muestre el último resultado, que se deje de mostrar el anterior.
function cuentaregresiba(ao, mes, dia, hora, minu, indice) {
    let end = new Date(ao, mes, dia, hora, minu);
    let _second = 1000;
    let _minute = _second * 60;
    let _hour = _minute * 60;
    let _day = _hour * 24;
    let timer;
    timer = setInterval(e => {
        let now = new Date();
        distance = end - now;
        if (distance < 0) {
            clearInterval(timer);
            document.getElementById('countdown' + indice).innerHTML = 'Finalizado!';
            return;
        }
        let days = Math.floor(distance / _day);
        let hours = Math.floor((distance % _day) / _hour);
        let minutes = Math.floor((distance % _hour) / _minute);
        let seconds = Math.floor((distance % _minute) / _second);
        let resultado = '',
            condias = '';
        if (days > 0) condias = days + ' d ';
        resultado = condias + ' ' + ('0' + hours).slice(-2) + ':' + ('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2);
        document.getElementById('countdown' + indice).innerHTML = resultado;
    }, 1000);
}
cuentaregresiba(2020, 9, 10, 10, 15, "A"); // Este seria el resultado ejemplo "3 d 20:59:06"
// Si lo vuelvo a llamar, cambiando por ejemplo a un dia más
// cuentaregresiba (2020, 09, 10, 11, 15, A); // el resultado es que me intenta mostrar simultaneamente "3 d 20:59:06" y "4 d 20:59:06"