((d, c, w) => {
  const $articles = d.getElementById("articles"),
    $template = d.getElementById("templete-articulo").content,
    $fragmento = d.createDocumentFragment(),
    $form = d.getElementById("form_articulo");

  const obtenerArticulos = async () => {
    let cabecera = new Headers();
    cabecera.append(
      "Authorization",
      "Basic UjJhUjA3Umtqazh1aDgyNThmZHNrRU9JRU4yNXU4bERCYkhGTWVmbTdoVno2L0xYYjlkZkU0Rm1xYThxOlQyYVQwN1Rrams4dWg4MjU4ZmRza0VPSUVOMjV1ai9IWXg0RUNZbVNOMHZLdHNRMVdsVENPQ2RQby9zUw=="
    );
    cabecera.append("Content-Type", "application/json");
    cabecera.append("Accept", "application/json");
    cabecera.append("Access-Control-Allow-Origin", "*");
    // cabecera.append("Access-Control-Allow-Origin", "GET, OPTIONS");
    cabecera.append("Access-Control-Allow-Credentials", "true");

    try {
      const options = {
          method: "GET",
          mode: "cors",
          credentials: "include",
          // headers: cabecera,
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Basic UjJhUjA3Umtqazh1aDgyNThmZHNrRU9JRU4yNXU4bERCYkhGTWVmbTdoVno2L0xYYjlkZkU0Rm1xYThxOlQyYVQwN1Rrams4dWg4MjU4ZmRza0VPSUVOMjV1ai9IWXg0RUNZbVNOMHZLdHNRMVdsVENPQ2RQby9zUw==",
          },
          ridirect: "follow",
          referrerPolicy: "no-referrer",
        },
        respuesta = await fetch(
          "http://apirest-native-php.local/articulos",
          // "http://curso-de-js.local/apirest-ajax/json/db.json",

          options
        ),
        json = await respuesta.json();
      c.log(json);
      c.log(respuesta.ok);
      if (!respuesta.ok) {
        throw {
          codigo: respuesta.status,
          mensaje: respuesta.statusText || "Error Desconocido",
        };
      }

      json.articulos.forEach((art) => {
        // c.log(art);
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
        $template.querySelector(".contenido").textContent = art.contenido;
        $template.querySelector(".editar").dataset.id = art.id;
        $template.querySelector(".eliminar").dataset.id = art.id;

        let $clone_template = d.importNode($template, true);
        $fragmento.appendChild($clone_template);
      });
      $articles.appendChild($fragmento);
    } catch (error) {
      $articles.innerHTML = `<div class="alert alert-danger w-100" role="alert">
  <h4 class="alert-heading">Codigo de Error: ${error.codigo}</h4>
  <p>${error.mensaje}</p>
</div>`;
      c.error(`Codigo de Error: ${error.codigo}, ${error.mensaje}`);
    }
  };
  d.addEventListener("click", async function (e) {
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
        try {
          const options = {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json; charset=utf-8",
              },
            },
            respuesta = await fetch(
              `http://curso-de-js.local/apirest-ajax/json/db.json/${e.target.dataset.id}`,
              options
            ),
            json = respuesta.json();
          if (!respuesta.ok) {
            throw {
              codigo: respuesta.status,
              mensaje: respuesta.statusText || "Error Desconocido",
            };
          }
          location.reload();
        } catch (error) {
          alert(`Codigo de Error: ${error.codigo}, ${error.mensaje}`);
          c.error(`Codigo de Error: ${error.codigo}, ${error.mensaje}`);
        }
      }
    }
  });

  $form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!this.id.value) {
      try {
        const options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify({
              titulo: $form.titulo.value,
              descripcion: $form.descripcion.value,
              palabras_claves: $form.palabras_claves.value,
              ruta: $form.ruta.value,
              contenido: $form.contenido.value,
              img: $form.img.value,
            }),
          },
          respuesta = await fetch(
            "http://curso-de-js.local/apirest-ajax/json/db.json",
            options
          ),
          json = respuesta.json();
        if (!respuesta.ok) {
          throw {
            codigo: respuesta.status,
            mensaje: respuesta.statusText || "Error Desconocido",
          };
        }
        location.reload();
      } catch (error) {
        $form.insertAdjacentHTML(
          "afterend",
          `<div class="alert alert-danger w-100" role="alert">
          <h4 class="alert-heading">Codigo de Error: ${error.codigo}</h4>
          <p>${error.mensaje}</p>
        </div>`
        );
        c.error(`Codigo de Error: ${error.codigo}, ${error.mensaje}`);
      }
    } else {
      try {
        const options = {
            method: "PUT",
            headers: {
              "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify({
              titulo: this.titulo.value,
              descripcion: this.descripcion.value,
              palabras_claves: this.palabras_claves.value,
              ruta: this.ruta.value,
              contenido: this.contenido.value,
              img: this.img.value,
            }),
          },
          respuesta = await fetch(
            `http://curso-de-js.local/apirest-ajax/json/db.json/${this.id.value}`,
            options
          ),
          json = respuesta.json();
        if (!respuesta.ok) {
          throw {
            codigo: respuesta.status,
            mensaje: respuesta.statusText || "Error Desconocido",
          };
        }
        location.reload();
      } catch (error) {
        $articles.innerHTML = `<div class="alert alert-danger w-100" role="alert">
  <h4 class="alert-heading">Codigo de Error: ${error.codigo}</h4>
  <p>${error.mensaje}</p>
</div>`;
        c.error(`Codigo de Error: ${error.codigo}, ${error.mensaje}`);
      }
    }
  });
  obtenerArticulos();
})(document, console, window);
