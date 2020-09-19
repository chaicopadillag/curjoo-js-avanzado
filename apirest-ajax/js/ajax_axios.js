((d, c, w) => {
  const $articles = d.getElementById("articles"),
    $template = d.getElementById("templete-articulo").content,
    $fragmento = d.createDocumentFragment(),
    $form = d.getElementById("form_articulo");

  const obtenerArticulos = async () => {
    try {
      const respuesta = await axios.get(
          "http://curso-de-js.local/apirest-ajax/json/db.json"
        ),
        json = respuesta.data;
      //   c.log(json);
      json.articulos.forEach((art) => {
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
      //   c.log(error);
      $articles.innerHTML = `<div class="alert alert-danger w-100" role="alert">
  <p>${error}</p>
</div>`;
      c.error(`Codigo de Error: ${error.codigo}, ${error.mensaje}`);
    }
  };

  $form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!$form.id.value) {
      try {
        const options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json; charset=utf-8",
            },
            data: JSON.stringify({
              titulo: $form.titulo.value,
              descripcion: $form.descripcion.value,
              palabras_claves: $form.palabras_claves.value,
              ruta: $form.ruta.value,
              contenido: $form.contenido.value,
              img: $form.img.value,
            }),
          },
          respuesta = await axios(
            "http://curso-de-js.local/apirest-ajax/json/db.json",
            options
          ),
          json = respuesta.data;
        location.reload();
      } catch (error) {
        $form.insertAdjacentHTML(
          "afterend",
          `<div class="alert alert-danger w-100" role="alert">
          <p>${error}</p>
        </div>`
        );
        c.error(`Codigo de Error: ${error}`);
      }
    } else {
      try {
        const options = {
            method: "PUT",
            headers: {
              "Content-Type": "application/json; charset=utf-8",
            },
            data: JSON.stringify({
              titulo: $form.titulo.value,
              descripcion: $form.descripcion.value,
              palabras_claves: $form.palabras_claves.value,
              ruta: $form.ruta.value,
              contenido: $form.contenido.value,
              img: $form.img.value,
            }),
          },
          respuesta = await axios(
            `http://curso-de-js.local/apirest-ajax/json/dfb.json/${$form.id.value}`,
            options
          ),
          json = respuesta.data;
        location.reload();
      } catch (error) {
        $form.insertAdjacentHTML(
          "afterend",
          `<div class="alert alert-danger w-100" role="alert">
          <p>${error}</p>
        </div>`
        );
        c.error(`Codigo de Error: ${error}`);
      }
    }
  });

  d.addEventListener("click", async (e) => {
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
            respuesta = await axios(
              `http://curso-de-js.local/apirest-ajax/json/dfb.json/${e.target.dataset.id}`,
              options
            ),
            json = respuesta.data;
          // location.reload();
        } catch (error) {
          alert(`Codigo de Error: ${error}`);
          c.error(`Codigo de Error: ${error}`);
        }
      }
    }
  });
  obtenerArticulos();
})(document, console, window);
