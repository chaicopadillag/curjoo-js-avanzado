!(function(c) {
    const json = {
        nombre: "Gerardo",
        apellidos: "Chaico Padilla",
        correo: "code@gmail.com",
        edad: 20,
        estado_civil: true,
        peso: null,
        musica: ["Trance", "Techno", "Hardstyle", "Dance"],
        redes: {
            facebook: "https://facebook.com",
            twtter: "https://twtter.com",
            instagram: "https://instagram.com",
            tiktok: "https://tiktok.com",
            tumblr: "https://tumblr.com",
        },
    };
    const json_string = JSON.stringify(json);
    c.log("Objeto a Json: de Objeto a json valido");
    c.log(json_string);
    const json_obj = JSON.parse(json_string);
    c.log("Json a Objeto: Json valido a Objeto");
    c.log(json_obj);
    // TODO: apirest-valido
    const texto_voz = "Hola, soy tu amigo Bot hecho en Javascript";
    const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
    hablar(texto_voz);
})(console);