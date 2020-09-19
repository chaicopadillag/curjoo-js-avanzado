((c, w, d) => {
  // TODO: funcion AjaxXHR Include HTML
  const IncludeHTML = (contenedor, url) => {
    const ajaXHR = new XMLHttpRequest();

    ajaXHR.addEventListener("readystatechange", (e) => {
      if (ajaXHR.readyState !== 4) return;
      if (ajaXHR.status >= 200 && ajaXHR.status < 300) {
        contenedor.outerHTML = ajaXHR.responseText;
      } else {
        contenedor.outerHTML = `<d class="alert alert-danger d-block w-100 mt-3"><b>Error:</b> codigo ${
          ajaXHR.status || "Desconocido"
        }, ${
          ajaXHR.statusText ||
          "Error al cargar el archvo, asegurase de estar haciendo un petición <b>HTTP ó HTTPS</b>"
        }</d>`;
      }
    });
    ajaXHR.open("GET", url);
    ajaXHR.setRequestHeader("Content-type", "text/html;charset=utf-8");
    ajaXHR.send();
  };

  //  FIXME: llamando y llenando los secciones con data-include
  d.addEventListener("DOMContentLoaded", (e) => {
    //   c.log(d.querySelectorAll("[data-include]"));
    d.querySelectorAll("[data-include]").forEach((contenedor) => {
      IncludeHTML(contenedor, contenedor.getAttribute("data-include"));
    });
  });
  // TODO: slide responsive
  let active = 0;
  d.addEventListener("click", (e) => {
    const $slides = d.querySelectorAll(".carousel-item"),
      $btnNext = d.querySelector(".carousel-control-next"),
      $btnPrev = d.querySelector(".carousel-control-prev");

    if (e.target === $btnPrev) {
      e.preventDefault();
      $slides[active].classList.remove("active");
      active--;
      if (active < 0) {
        active = $slides.length - 1;
      }
      $slides[active].classList.add("active");
      //   c.log(active);
    }
    if (e.target === $btnNext) {
      e.preventDefault();
      $slides[active].classList.remove("active");
      active++;
      if (active >= $slides.length) {
        active = 0;
      }
      $slides[active].classList.add("active");
      //   c.log(active);
    }
  });
})(console, window, document);
