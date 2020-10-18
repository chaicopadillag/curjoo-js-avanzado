!(function (c, d) {
  // TODO: menu
  const $iconMenu = d.getElementById("icon-menu"),
    $menu = d.querySelector(".nav"),
    $icono = d.getElementById("icono"),
    $menu_links = d.querySelectorAll(".menu .link_menu"),
    $audio = d.createElement("audio");
  const menuToogle = (e) => {
    $menu.classList.toggle("active");
    if ($icono.classList.contains("fa-bars")) {
      $icono.classList.replace("fa-bars", "fa-times");
    } else {
      $icono.classList.replace("fa-times", "fa-bars");
    }
    // c.log(e.target);
    // c.log(e.type);
    // c.log($icono);
  };
  $iconMenu.addEventListener("click", menuToogle);
  // d.addEventListener('click', e => {
  //     if (e.target.matches('.menu .link_menu')) {
  //         $menu.classList.remove('active');
  //     }
  // });
  $menu_links.forEach((link) => {
    link.addEventListener("click", (e) => {
      $menu.classList.remove("active");
      // c.log(e.target);
    });
  });
  //FIXME: reloj
  let iniciar_reloj, iniciar_alarma;
  d.querySelector("#btn_reloj_ini").addEventListener("click", (e) => {
    iniciar_reloj = setInterval((e) => {
      const fecha = new Date();
      d.querySelector("#reloj").textContent = fecha.toLocaleTimeString();
    }, 1000);
    d.querySelector("#btn_reloj_ini").disabled = true;
  });
  d.querySelector("#btn_reloj_stop").addEventListener("click", (e) => {
    clearInterval(iniciar_reloj);
    d.querySelector("#reloj").textContent = "00:00:00";
    d.querySelector("#btn_reloj_ini").disabled = false;
  });
  // TODO: alarma
  $audio.src = "mp3/Avicii_Levels_Original_Version.mp3";
  d.querySelector("#btn_alarma_ini").addEventListener("click", (e) => {
    iniciar_alarma = setTimeout((e) => {
      $audio.play();
    }, 1000);
    d.querySelector("#btn_alarma_ini").disabled = true;
  });
  d.querySelector("#btn_alarma_stop").addEventListener("click", (e) => {
    clearTimeout(iniciar_alarma);
    $audio.pause();
    $audio.currentTime = 0;
    d.querySelector("#btn_alarma_ini").disabled = false;
  });
  // FIXME: Movimiento y colicion de DOM
  let x = 0,
    y = 0;
  d.addEventListener("keydown", (e) => {
    // c.log(e.target);
    // c.log(e.type);
    // c.log(e.key);
    // c.log(e.keyCode);
    // c.log(`Alt: ${e.altKey}`);
    // c.log(`Ctrl: ${e.ctrlKey}`);
    // c.log(`shift: ${e.shiftKey}`);
    // if (e.key === 'a' && e.altKey) {
    //     alert('message?: DOMString');
    // }
    // movimiento y colision
    const $espacio = d.querySelector("#espacio"),
      $bola = d.querySelector("#bola"),
      limiteEspacio = $espacio.getBoundingClientRect(),
      limiteBola = $bola.getBoundingClientRect();
    // c.log(limiteEspacio);
    // c.log(limiteBola);
    switch (e.keyCode) {
      case 37:
        if (limiteBola.left > limiteEspacio.left) {
          e.preventDefault();
          x--;
        }
        break;
      case 38:
        if (limiteBola.top > limiteEspacio.top) {
          e.preventDefault();
          y--;
        }
        break;
      case 39:
        if (limiteBola.right < limiteEspacio.right) {
          e.preventDefault();
          x++;
        }
        break;
      case 40:
        if (limiteBola.bottom < limiteEspacio.bottom) {
          e.preventDefault();
          y++;
        }
        break;
      default:
        break;
    }
    // c.log(x, y);
    $bola.style.transform = `translate(${x * 10}px,${y * 10}px)`;
  });
  // FIXME: Cuenta atrás
  // d.body.addEventListener("DOMContentLoaded", (e) => {
  //     d.querySelector("#cuenta_atras").textContent = "Felíz Navidad";
  // });
  const cuentaRegresiva = (e, fecha_final, text_content) => {
    let cuentaRegresivaUpdate = setInterval((e) => {
      let fecha_actual = new Date().getTime(),
        fecha_fin = new Date(fecha_final).getTime(),
        dias_faltantes = fecha_fin - fecha_actual,
        dias = Math.floor(dias_faltantes / (1000 * 60 * 60 * 24)),
        horas = (
          "0" +
          Math.floor(
            (dias_faltantes % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          )
        ).slice(-2),
        minutos = (
          "0" + Math.floor((dias_faltantes % (1000 * 60 * 60)) / (1000 * 60))
        ).slice(-2),
        segundos = (
          "0" + Math.floor((dias_faltantes % (1000 * 60)) / 1000)
        ).slice(-2);
      if (dias_faltantes < 0) {
        d.querySelector(text_content).textContent = `Feliz Navidad!!!`;
        clearInterval(cuentaRegresivaUpdate);
      }
      d.querySelector(
        text_content
      ).textContent = `Faltan: ${dias} días ${horas} horas ${minutos} minutos ${segundos} segundos; para la Navidad`;
    }, 1000);
  };
  d.body.addEventListener("click", (e) => {
    cuentaRegresiva(e, "Dec 25 2020 00:00:00", "#cuenta_atras");
  });
  // TODO: scrol top boton
  d.querySelector("#boton_arriba").addEventListener("click", (e) => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  });
  window.addEventListener("scroll", (e) => {
    let scrolltop = d.documentElement.scrollTop;
    if (scrolltop > 500) {
      d.querySelector("#boton_arriba").classList.remove("ocultar");
    } else {
      d.querySelector("#boton_arriba").classList.add("ocultar");
    }
  });
  // FIXME: Theme-dark
  let $themes = d.querySelectorAll("[data-theme]"),
    localdb = localStorage;
  const modoDark = () => {
    $themes.forEach((elemento) => elemento.classList.add("theme-dark"));
    d.querySelector(".btn-theme").textContent = "S";
    localdb.setItem("theme", "dark");
  };
  const modoLith = () => {
    $themes.forEach((elemento) => elemento.classList.remove("theme-dark"));
    d.querySelector(".btn-theme").textContent = "L";
    localdb.setItem("theme", "lith");
  };
  d.querySelector(".btn-theme").addEventListener("click", (e) => {
    const luna = "L",
      sol = "S";
    if (d.querySelector(".btn-theme").textContent === "L") {
      modoDark();
    } else {
      modoLith();
    }
  });
  window.addEventListener("load", (e) => {
    if (localdb.getItem("theme") === null) {
      localdb.setItem("theme", "lith");
    }
    if (localdb.getItem("theme") === "dark") {
      modoDark();
    }
    if (localdb.getItem("theme") === "lith") {
      modoLith();
    }
  });
  // TODO: Responsive Responsible
  const contenidoResponsiveResponsible = (
    $idClass,
    contenidoMobile,
    contenidoDesktop
  ) => {
    const mediaScreen = "(min-width: 1024px)";
    let breakpoint = window.matchMedia(mediaScreen);
    const responsive = (e) => {
      if (e.matches) {
        d.querySelector($idClass).innerHTML = contenidoDesktop;
      } else {
        d.querySelector($idClass).innerHTML = contenidoMobile;
      }
      // c.log(e.matches);
    };
    breakpoint.addListener(responsive);
    responsive(breakpoint);
  };
  contenidoResponsiveResponsible(
    ".youtube",
    `<a href="http://curso-de-js.local/" target="_blank" role="noopener">Ver Video</a>`,
    `<iframe src="http://curso-de-js.local/" width="560" height="315" frameborder="0" allowfullscreen></iframe>`
  );
  contenidoResponsiveResponsible(
    ".maps",
    `<a href="http://curso-de-js.local/" target="_blank" role="noopener">Ver Maps</a>`,
    `<iframe width="560" height="315" frameborder="0" allowfullscreen src="http://curso-de-js.local/"></iframe>`
  );
  // FIXME: Resposive Tester
  let newWindow;
  d.getElementById("form_test").addEventListener("submit", (e) => {
    e.preventDefault();
    const $form = d.getElementById("form_test");
    newWindow = window.open(
      $form.url.value,
      "Test",
      `innerWidth=${$form.ancho.value}, innerHeight=${$form.alto.value}`
    );
  });
  d.getElementById("btn_test_stop").addEventListener("click", (e) =>
    newWindow.close()
  );
  // TODO: Detección de Disposítivo
  const DetectarDispositivo = (e) => {
    const user_agent = navigator.userAgent,
      isMobile = {
        android: () => user_agent.match(/android/i),
        ios: () => user_agent.match(/iphone|ipad|ipod/i),
        windows: () => user_agent.match(/windows phone/i),
        auto: function () {
          return this.android() || this.ios() || this.windows();
        },
      },
      isDesktop = {
        linux: () => user_agent.match(/linux/i),
        macOS: () => user_agent.match(/mac os/i),
        windows: () => user_agent.match(/windows nt/i),
        auto: function () {
          return this.linux() || this.macOS() || this.windows();
        },
      },
      isBrowser = {
        firefox: () => user_agent.match(/firefox/i),
        chrome: () => user_agent.match(/chrome/i),
        safari: () => user_agent.match(/safari/i),
        opera: () => user_agent.match(/opera|opera mini/i),
        interExplorer: () => user_agent.match(/msie|iemobile/i),
        edge: () => user_agent.match(/edge/i),
        auto: function () {
          return (
            this.firefox() ||
            this.chrome() ||
            this.safari() ||
            this.opera() ||
            this.interExplorer() ||
            this.edge()
          );
        },
      };
    d.getElementById(
      "user_agent"
    ).innerHTML = `<b>User Agent:</b> ${user_agent}`;
    d.getElementById("s_o").innerHTML = `<b>Sistema Operativo:</b> ${
      isMobile.auto() ? isMobile.auto() : isDesktop.auto()
    }`;
    d.getElementById(
      "navegador"
    ).innerHTML = `<b>Navegador:</b> ${isBrowser.auto()}`;
    if (isMobile.auto()) {
      d.getElementById(
        "contenidoExclusivoMovil"
      ).innerHTML = `<mark>Este contenido es exclusivo en Dispositivo Movil</mark>`;
    }
    if (!isMobile.auto()) {
      d.getElementById(
        "contenidoExclusivoDesktop"
      ).innerHTML = `<mark>Este contenido es exclusivo en Dispositivo Desktop</mark>`;
      // c.log(isDesktop.auto());
    }
    if (isBrowser.chrome()) {
      d.getElementById(
        "contenidoExclusivoChrome"
      ).innerHTML = `<mark>Este contenido es exclusivo en Navegador Chrome</mark>`;
    }
    if (isBrowser.firefox()) {
      d.getElementById(
        "contenidoExclusivoFirefox"
      ).innerHTML = `<mark>Este contenido es exclusivo en Navegador Firefox</mark>`;
    }
  };
  DetectarDispositivo();
  // FIXME: detectar red de conexión
  const EstadoConexionRed = (e) => {
    let estadoRed = navigator.onLine;
    $div_estado_red = d.createElement("div");
    const StatusOnline = () => {
      if (estadoRed.onLine) {
        $div_estado_red.textContent = "Conexión Restablecida";
        $div_estado_red.classList.add("enlinea");
        $div_estado_red.classList.remove("sinconexion");
      } else {
        $div_estado_red.textContent = "Conexión Perdida";
        $div_estado_red.classList.add("sinconexion");
        $div_estado_red.classList.remove("enlinea");
      }
      d.body.insertAdjacentElement("afterbegin", $div);
      setTimeout(() => d.body.removeChild($div_estado_red), 3000);
    };
    window.addEventListener("online", StatusOnline);
    window.addEventListener("offline", StatusOnline);
  };
  EstadoConexionRed();
  // TODO: detección de web cam
  const iniciarWebCam = () => {
    let $webcam = d.getElementById("webcam");
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({
          video: true,
          audio: true,
        })
        .then((stream) => {
          $webcam.srcObject = stream;
          $webcam.play();
        })
        .cath((error) => {
          c.log("Sucedio el siguiente error: " + error);
        });
    } else {
      c.log("Su navegador no soparta este app");
    }
    c.log(navigator);
  };
  // iniciarWebCam();
  // FIXME: Geolocalización
  const geolocalizacion = (e) => {
    const $geoloca = d.getElementById("geolocalitation"),
      options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maxmumAge: 0,
      };
    const success = (position) => {
      let cord = position.coords;
      $geoloca.innerHTML = `<b>Su posicion actual es:</b><br>
<b>Latitud:</b>${cord.latitude}<br>
<b>Longitud:</b>${cord.longitude}<br>
<b>Presición:</b>${cord.accuracy} metros<br>
<a href="https://google.com/maps/@${cord.latitude},${cord.longitude},16z" target="_blank" rel="noopener">Ver en google maps</a>`;
    };
    const error = (error) => {
      $geoloca.innerHTML = `<b>Error ${error.code}: ${error.message}</b>`;
    };
    navigator.geolocation.getCurrentPosition(success, error, options);
  };
  geolocalizacion();
  //   TODO: filtro de Busqueda
  d.getElementById("filtrar").addEventListener("keyup", (e) => {
    let filter = e.target.value || "";
    c.log(filter);
    if (e.key === "Escape") e.target.value = "";
    d.querySelectorAll(".card").forEach((element) =>
      element.textContent.toLowerCase().includes(filter.toLowerCase())
        ? element.classList.remove("d-none")
        : element.classList.add("d-none")
    );
  });
  //   FIXME: Sorteo Digital
  const SorteoDigital = (idClassSelector) => {
    let $lista = document.querySelectorAll(idClassSelector),
      randon = Math.floor(Math.random() * $lista.length),
      $item_seleccionado = $lista[randon],
      ganador = $item_seleccionado.textContent;
    alert(`El ganador del Sorteo es: ${ganador}, Felicidades`);
    console.log(`El ganador del Sorteo es: ${ganador}, Felicidades`);
    console.log(Math.random());
  };
  d.getElementById("btn-sorteo").addEventListener("click", (e) =>
    SorteoDigital(".languaje")
  );
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
      c.log(active);
    }
    if (e.target === $btnNext) {
      e.preventDefault();
      $slides[active].classList.remove("active");
      active++;
      if (active >= $slides.length) {
        active = 0;
      }
      $slides[active].classList.add("active");
      c.log(active);
    }
  });
  // FIXME: Scroll Spy
  const ScrollSpy = () => {
    const $secctions = d.querySelectorAll("section[data-scroll-spy]"),
      spy = new IntersectionObserver(
        (intersecciones) => {
          // c.log(intersecciones);
          intersecciones.forEach((interseccion) => {
            // c.log(interseccion);
            let id = interseccion.target.getAttribute("id");
            // c.log(id);
            if (interseccion.isIntersecting) {
              d.querySelector(
                `a[data-scroll-spy][href="#${id}"]`
              ).classList.add("active");
            } else {
              d.querySelector(
                `a[data-scroll-spy][href="#${id}"]`
              ).classList.remove("active");
            }
          });
        },
        {
          // root,
          // rootMargin: "-250px",
          threshold: [0.5, 0.75],
        }
      );
    // c.log(spy);
    $secctions.forEach((elemento) => {
      spy.observe(elemento);
    });
  };
  ScrollSpy();
  // TODO: video inteligente
  const VideoAutoPlayDetected = () => {
    $videos = d.querySelectorAll("video[data-video-autoplay]");
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.play();
        } else {
          entry.target.pause();
        }
        window.addEventListener("visibilitychange", (e) => {
          if (d.visibilityState === "visible") {
            if (entry.isIntersecting) {
              entry.target.play();
            } else {
              entry.target.pause();
            }
          } else {
            entry.target.pause();
          }
        });
      });
    };
    const spia = new IntersectionObserver(callback, {
      threshold: [0.5, 0.75],
    });
    $videos.forEach((el) => spia.observe(el));
  };
  VideoAutoPlayDetected();
  // FIXME: Validación de Formulario Contacto
  const validarFormulario = (e) => {
    const $formulario = d.getElementById("form_contacto"),
      $inputs = d.querySelectorAll("#form_contacto [required]");
    $inputs.forEach((input) => {
      let $span_danger = d.createElement("span");
      $span_danger.classList.add("text-danger", "d-none");
      $span_danger.setAttribute("id", `error_${input.name}`);
      $span_danger.textContent = input.title;
      input.insertAdjacentElement("afterend", $span_danger);
    });
    d.addEventListener("keyup", (e) => {
      if (e.target.matches("#form_contacto [required]")) {
        let $campo = e.target,
          patron = $campo.pattern || $campo.dataset.pattern;
        if (patron && $campo.value !== "") {
          let expresionReg = new RegExp(patron);
          if (expresionReg.exec($campo.value)) {
            $campo.classList.add("is-valid");
            $campo.classList.remove("is-invalid");
            d.getElementById(`error_${$campo.name}`).classList.add("d-none");
          } else {
            $campo.classList.add("is-invalid");
            $campo.classList.remove("is-valid");
            d.getElementById(`error_${$campo.name}`).classList.remove("d-none");
          }
        }
        if (!patron) {
          if ($campo.value !== "") {
            $campo.classList.add("is-valid");
            d.getElementById(`error_${$campo.name}`).classList.add("d-none");
          } else {
            $campo.classList.add("is-invalid");
            d.getElementById(`error_${$campo.name}`).classList.remove("d-none");
          }
        }
      }
    });
    // FIXME: envio de correo por Ajax con FormSubmit.co
    $formulario.addEventListener("submit", (e) => {
      e.preventDefault();
      fetch("https://formsubmit.co/ajax/codecodero@gmail.com", {
        method: "POST",
        body: new FormData(e.target),
      })
        .then((respuesta) =>
          respuesta.ok ? respuesta.json() : Promise.reject(respuesta)
        )
        .then((json) => c.log(json))
        .catch((error) => c.error(error.status, error.statusText))
        .finally(() => {
          setTimeout(() => {
            c.info("Mostrando estado de envió");
          }, 3000);
        });
    });
  };
  validarFormulario();
  // TODO: Narrador de Voz
  const narradorVoz = () => {
    const $voces = d.getElementById("voces"),
      $texto = d.getElementById("texto"),
      $btn_leer = d.getElementById("btn_leer_text"),
      speechMessage = new SpeechSynthesisUtterance();
    let voces = [];
    window.speechSynthesis.addEventListener("voiceschanged", (e) => {
      voces = window.speechSynthesis.getVoices();
      c.log(100);
      voces.forEach((voz) => {
        $option = d.createElement("option");
        $option.value = voz.name;
        $option.textContent = `${voz.name} - ${voz.lang}`;
        $voces.appendChild($option);
      });
    });
    $voces.addEventListener("change", () => {
      speechMessage.voice = voces.find((voz) => voz.name === $voces.value);
      c.log(speechMessage);
    });
    $btn_leer.addEventListener("click", () => {
      speechMessage.text = $texto.value;
      window.speechSynthesis.speak(speechMessage);
    });
  };
  narradorVoz();
})(console, document);
