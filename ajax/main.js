// TODO: XMLHttpRequest
((c, d, w) => {
  const ajaxht = new XMLHttpRequest(),
    $lista = d.getElementById("lista_articulos");

  ajaxht.withCredentials = true;
  ajaxht.addEventListener("readystatechange", () => {
    if (ajaxht.readyState !== 4) return;
    if (ajaxht.status >= 200 && ajaxht.status < 300) {
      let OBJson = JSON.parse(ajaxht.responseText);
      let $fragmento = d.createDocumentFragment();
      //   c.log(OBJson.articulos);
      OBJson.articulos.forEach((art) => {
        let $li = d.createElement("li");
        $li.classList.add("list-group-item");
        $li.innerHTML = `<b>${art.titulo}:</b> ${art.descripcion}`;
        $fragmento.appendChild($li);
      });
      $lista.appendChild($fragmento);
    } else {
      let $li = d.createElement("li");
      $li.classList.add("list-group-item");
      $li.innerHTML = `<b>Codigo de Error:</b> ${ajaxht.status} - ${
        ajaxht.statusText || "Ocurrio un error"
      }`;
      $lista.appendChild($li);
    }
  });
  ajaxht.open("GET", "articulos.json");
  //   ajaxht.setRequestHeader(
  //     "Authorization",
  //     "Basic UjJhUjA3Umtqazh1aDgyNThmZHNrRU9JRU4yNXU4bERCYkhGTWVmbTdoVno2L0xYYjlkZkU0Rm1xYThxOlQyYVQwN1Rrams4dWg4MjU4ZmRza0VPSUVOMjV1ai9IWXg0RUNZbVNOMHZLdHNRMVdsVENPQ2RQby9zUw=="
  //   );
  ajaxht.send();
})(console, document, window);

// FIXME:Fetch API

((c, d, w) => {
  const $lista = d.getElementById("lista_articulos2"),
    $fragmento = d.createDocumentFragment();

  fetch("articulos.json")
    .then((respuesta) =>
      respuesta.ok ? respuesta.json() : Promise.reject(respuesta)
    )
    .then((json) => {
      json.articulos.forEach((art) => {
        let $li = d.createElement("li");
        $li.classList.add("list-group-item");
        $li.innerHTML = `<b>${art.titulo}:</b> ${art.descripcion}`;
        $fragmento.appendChild($li);
      });
      $lista.appendChild($fragmento);
    })
    .catch((error) => {
      let $li = d.createElement("li");
      $li.classList.add("list-group-item");
      $li.innerHTML = `<b>Codigo de Error:</b> ${error.status} - ${
        error.statusText || "Ocurrio un error"
      }`;
      $lista.appendChild($li);
      // c.log(error);
    })
    .finally(() => {
      // c.log("Independiente del Promise");
    });
})(console, document, window);

// TODO:API Fetch + Async-Await

((c, d, w) => {
  const $lista = d.getElementById("lista_articulos3"),
    $fragmento = d.createDocumentFragment();

  async function FetchApiAsyncAwait() {
    try {
      let respuesta = await fetch("articulos.json"),
        json = await respuesta.json();
      if (!respuesta.ok) {
        throw {
          status: respuesta.status,
          statusText: respuesta.statusText,
        };
      }
      json.articulos.forEach((art) => {
        let $li = d.createElement("li");
        $li.classList.add("list-group-item");
        $li.innerHTML = `<b>${art.titulo}:</b> ${art.descripcion}`;
        $fragmento.appendChild($li);
      });
      $lista.appendChild($fragmento);
    } catch (error) {
      let $li = d.createElement("li");
      $li.classList.add("list-group-item");
      $li.innerHTML = `<b>Codigo de Error:</b> ${
        error.status || "No defenido por el Proveedor"
      } - ${error.statusText || "Ocurrio un error"}`;
      $lista.appendChild($li);
    } finally {
      // c.log("Independiente del try catch");
    }
  }

  FetchApiAsyncAwait();
})(console, document, window);
// FIXME: Ajax con Axios
((c, d, w) => {
  const $lista = d.getElementById("lista_articulos4"),
    $fragmento = d.createDocumentFragment();
  axios
    .get("articulos.json")
    .then((respuesta) => {
      let json = respuesta.data;
      json.articulos.forEach((art) => {
        let $li = d.createElement("li");
        $li.classList.add("list-group-item");
        $li.innerHTML = `<b>${art.titulo}:</b> ${art.descripcion}`;
        $fragmento.appendChild($li);
      });
      $lista.appendChild($fragmento);
    })
    .catch((error) => {
      let $li = d.createElement("li");
      $li.classList.add("list-group-item");
      $li.innerHTML = `<b>Codigo de Error:</b> ${
        error.response.status || "No defenido por el Proveedor"
      } - ${error.response.statusText || "Ocurrio un error"}`;
      $lista.appendChild($li);
    })
    .finally(() => {
      // c.log("independiente de then y catch axios");
    });
})(console, document, window);

// TODO: Ajax con Axios + Async-Await
((c, d, w) => {
  const $lista = d.getElementById("lista_articulos5"),
    $fragmento = d.createDocumentFragment();
  async function getDataAxiosAsyncAwait() {
    try {
      let respuesta = await axios.get("articulos.json"),
        json = await respuesta.data;
      json.articulos.forEach((art) => {
        let $li = d.createElement("li");
        $li.classList.add("list-group-item");
        $li.innerHTML = `<b>${art.titulo}:</b> ${art.descripcion}`;
        $fragmento.appendChild($li);
      });
      $lista.appendChild($fragmento);
    } catch (error) {
      // c.log(error);
      let $li = d.createElement("li");
      $li.classList.add("list-group-item");
      $li.innerHTML = `<b>Codigo de Error:</b> ${
        error.response.status || "No defenido por el Proveedor"
      } - ${error.response.statusText || "Ocurrio un error"}`;
      $lista.appendChild($li);
    } finally {
    }
  }
  getDataAxiosAsyncAwait();
})(console, document, window);
