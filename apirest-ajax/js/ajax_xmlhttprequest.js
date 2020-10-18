((d, c, w) => {
  const $articles = d.getElementById("articles"),
    $template = d.getElementById("templete-articulo").content,
    $fragmento = d.createDocumentFragment(),
    $form = d.getElementById("form_articulo");
  const Ajax_xhr = (
    options = { url, method, ApiKey, success, error, data }
  ) => {
    let { url, method, ApiKey, success, error, data } = options;
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", (e) => {
      if (xhr.readyState !== 4) return;
      if (xhr.status >= 200 && xhr.status < 300) {
        success(JSON.parse(xhr.responseText));
      } else {
        error({
          codigo: xhr.status,
          mensaje: xhr.statusText || "Error Desconocido",
        });
      }
    });
    xhr.open(method || "GET", url);
    xhr.setRequestHeader("Authorization", ApiKey);
    xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    xhr.mode = "CORS";
    xhr.send(data);
  };
  const obtenerArticulos = () => {
    Ajax_xhr({
      url: "http://apirest-native-php.local/articulos",
      method: "GET",
      ApiKey:
        "Basic UjJhUjA3Umtqazh1aDgyNThmZHNrRU9JRU4yNXU4bERCYkhGTWVmbTdoVno2L0xYYjlkZkU0Rm1xYThxOlQyYVQwN1Rrams4dWg4MjU4ZmRza0VPSUVOMjV1ai9IWXg0RUNZbVNOMHZLdHNRMVdsVENPQ2RQby9zUw==",
      success(objetoJSON) {
        objetoJSON.articulos.forEach((art) => {
          $template.querySelector(".titulo").textContent = art.titulo;
          $template
            .querySelector(".img")
            .setAttribute("src", "http://news-mag.local/" + art.img);
          $template.querySelector(".descripcion").textContent = art.descripcion;
          $template.querySelector(".ruta").textContent = art.ruta;
          let tags = JSON.parse(art.palabras_claves);
          let mi_tag = "";
          tags.forEach((tag, indice) => {
            indice < tags.length - 1 ? (mi_tag += tag + ", ") : (mi_tag += tag);
            // c.log(indice, tags.length);
          });
          $template.querySelector(".palabras_claves").textContent = mi_tag;
          $template.querySelector(".contenido").innerHTML = art.contenido;
          $template.querySelector(".editar").dataset.id = art.id;
          $template.querySelector(".eliminar").dataset.id = art.id;

          let $clone_template = d.importNode($template, true);
          $fragmento.appendChild($clone_template);
        });
        $articles.appendChild($fragmento);
      },
      error(error) {
        $articles.innerHTML = `<div class="alert alert-danger w-100" role="alert">
  <h4 class="alert-heading">Codigo de Error: ${error.codigo}</h4>
  <p>${error.mensaje}</p>
</div>`;
        c.error(`Codigo de Error: ${error.codigo}, ${error.mensaje}`);
      },
    });
  };
  d.addEventListener("click", (e) => {
    let $card_article = e.target.parentElement.parentElement;
    if (e.target.matches(".editar")) {
      e.preventDefault();
      d.getElementById("titulo_form").textContent = "Editando Articulo";
      $form.titulo.value = $card_article.querySelector(".titulo").textContent;
      $form.descripcion.value = $card_article.querySelector(
        ".descripcion"
      ).textContent;
      $form.ruta.value = $card_article.querySelector(".ruta").textContent;
      $form.palabras_claves.value = $card_article.querySelector(
        ".palabras_claves"
      ).textContent;
      $form.contenido.value = $card_article.querySelector(
        ".contenido"
      ).textContent;
      $form.img.value = $card_article.querySelector(".img").src;
      $form.id.value = e.target.dataset.id;
    }
    if (e.target.matches(".eliminar")) {
      e.preventDefault();
      if (
        confirm(
          `¿Esta Seguro de Eliminar el Articulo ${
            $card_article.querySelector(".titulo").textContent
          }?`
        )
      ) {
        Ajax_xhr({
          url: `http://curso-de-js.local/apirest-ajax/json/db.json/${e.target.dataset.id}`,
          method: "DELETE",
          success: (res) => location.reload(),
          error(error) {
            alert(`Codigo de Error: ${error.codigo}, ${error.mensaje}`);
            c.error(`Codigo de Error: ${error.codigo}, ${error.mensaje}`);
          },
        });
      }
    }
  });
  $form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!this.id.value) {
      // create POST
      Ajax_xhr({
        url: "http://curso-de-js.local/apirest-ajax/json/db.json",
        method: "POST",
        success: (res) => location.reload(),
        error(error) {
          $form.insertAdjacentHTML(
            "afterend",
            `<div class="alert alert-danger w-100" role="alert">
  <h4 class="alert-heading">Codigo de Error: ${error.codigo}</h4>
  <p>${error.mensaje}</p>
</div>`
          );
          c.error(`Codigo de Error: ${error.codigo}, ${error.mensaje}`);
        },
        data: {
          titulo: this.titulo.value,
          descripcion: this.descripcion.value,
          palabras_claves: this.palabras_claves.value,
          ruta: this.ruta.value,
          contenido: this.contenido.value,
          img: this.img.value,
        },
      });
    } else {
      // update PUT
      Ajax_xhr({
        url: `http://curso-de-js.local/apirest-ajax/json/db.json/${this.id.value}`,
        method: "PUT",
        success: (res) => location.reload(),
        error(error) {
          $form.insertAdjacentHTML(
            "afterend",
            `<div class="alert alert-danger w-100" role="alert">
  <h4 class="alert-heading">Codigo de Error: ${error.codigo}</h4>
  <p>${error.mensaje}</p>
</div>`
          );
          c.error(`Codigo de Error: ${error.codigo}, ${error.mensaje}`);
        },
        data: {
          titulo: this.titulo.value,
          descripcion: this.descripcion.value,
          palabras_claves: this.palabras_claves.value,
          ruta: this.ruta.value,
          contenido: this.contenido.value,
          img: this.img.value,
        },
      });
    }
  });
  obtenerArticulos();
})(document, console, window);
