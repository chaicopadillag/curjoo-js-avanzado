((d, w, c) => {
  const $archivo = d.querySelector("#archivo"),
    $resultado = d.getElementById("resultado"),
    $dragDrop = d.getElementById("dragDrop");
  const subirArchivo = (archivo) => {
    const ajaXHR = new XMLHttpRequest(),
      formData = new FormData();
    formData.append("archivo", archivo);

    ajaXHR.addEventListener("readystatechange", (e) => {
      if (ajaXHR.readyState !== 4) return;

      if (ajaXHR.status >= 200 && ajaXHR.status < 300) {
        let resultado = JSON.parse(ajaXHR.responseText);
        $resultado.innerHTML += `<div class="alert alert-success mb-2" role="alert"><b>Correcto: </b> ${resultado.statusText}</div>`;
        c.log(ajaXHR.responseText);
      } else {
        $resultado.innerHTML = `<div class="alert alert-danger" role="alert"><b>Error: </b>${ajaXHR.status}, ${ajaXHR.statusText}</div>`;
        c.log(ajaXHR.statusText, ajaXHR.status);
      }
    });
    ajaXHR.open("POST", "server/SubirArchivo.php");
    ajaXHR.setRequestHeader("enc-type", "multipart/form-data");
    ajaXHR.send(formData);
  };
  const progressBar = (arch) => {
    const $progresos = d.getElementById("progresos"),
      $progress = d.createElement("div"),
      $progressBar = d.createElement("div");

    $progress.classList.add("progress", "mb-2");
    $progressBar.classList.add("progress-bar", "bg-success");
    $progress.appendChild($progressBar);
    $progresos.insertAdjacentElement("beforeend", $progress);

    const fileReader = new FileReader();
    fileReader.readAsDataURL(arch);

    fileReader.addEventListener("progress", (e) => {
      let progress = parseInt((e.loaded * 100) / e.total);
      $progressBar.style.width = `${progress}%`;
      $progressBar.textContent = `${arch.name}, '${progress}%'`;
    });

    fileReader.addEventListener("loadend", (e) => {
      subirArchivo(arch);
      setTimeout(() => {
        $progresos.innerHTML = "";
        $archivo.value = "";
      }, 5000);
    });
  };
  $archivo.addEventListener("change", (e) => {
    let archivos = Array.from($archivo.files);
    $resultado.innerHTML = "";
    archivos.forEach((arch) => progressBar(arch));
  });
  $dragDrop.addEventListener("dragover", (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.target.classList.remove("bg-white");
    e.target.classList.add("bg-success");
  });
  $dragDrop.addEventListener("dragleave", (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.target.classList.add("bg-white");
    e.target.classList.remove("bg-success");
  });
  $dragDrop.addEventListener("drop", (e) => {
    e.preventDefault();
    e.stopPropagation();
    const _archivos = Array.from(e.dataTransfer.files);
    _archivos.forEach((arh) => progressBar(arh));
    // c.log(_archivos);
    e.target.classList.add("bg-white");
    e.target.classList.remove("bg-success");
  });
})(document, window, console);
