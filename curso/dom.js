!(function(c, d) {
    c.log(d.body);
    c.log(d.head);
    c.log(d.doctype);
    c.log(d.charset);
    c.log(d.links);
    c.log(d.forms);
    c.log("===============================");
    c.log(d.documentElement.lang);
    c.log(d.documentElement.getAttribute("lang"));
    c.log(d.querySelector(".link-dom").href);
    c.log(d.querySelector(".link-dom").getAttribute("href"));
    d.documentElement.lang = "es";
    c.log(d.documentElement.lang);
    d.documentElement.setAttribute("lang", "es-PE");
    c.log(d.documentElement.lang);
    // variables de DOM
    const $linkDom = d.querySelector(".link-dom");
    $linkDom.setAttribute("target", "_blank");
    $linkDom.setAttribute("rel", "noopener");
    $linkDom.setAttribute("href", "http://apirest-laravel.local");
    c.log($linkDom.hasAttribute("rel"));
    $linkDom.removeAttribute("rel");
    c.log($linkDom.hasAttribute("rel"));
    const $parrajo = d.getElementById("parrajo");
    const $dataDescripcion = $parrajo.getAttribute("data-description");
    c.log($dataDescripcion);
    c.log($parrajo.dataset);
    $parrajo.setAttribute("data-lectura", 50);
    c.log($parrajo.getAttribute("data-lectura"));
    c.log($parrajo.style);
    c.log($parrajo.getAttribute("style"));
    c.log($parrajo.style.color);
    $parrajo.style.setProperty("color", "#000");
    $parrajo.style.backgroundColor = "yellow";
    c.log($parrajo.style);
    const $html = d.documentElement;
    let cssColorRojo = getComputedStyle($html).getPropertyValue("--color-rojo");
    cssColorAmarrillo = getComputedStyle($html).getPropertyValue("--color-amarrillo");
    c.log(cssColorRojo, cssColorAmarrillo);
    // $parrajo.style.backgroundColor = cssColorRojo;
    // $parrajo.style.color = cssColorAmarrillo;
    // TODO: add y remove class css
    $parrajo.classList.add("alto");
    // $parrajo.classList.add('ancho');
    // $parrajo.classList.toggle('alto');
    // $parrajo.classList.remove('alto');
    // $parrajo.classList.replace('parrajo', 'alto');
    $parrajo.classList.contains('parrajo');
    // FIXME: text y html
    const texto = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro atque, explicabo, praesentium libero fugiat maiores quam? Eos, laborum nemo impedit in id maxime eveniet obcaecati doloribus. Nihil ut pariatur facere maiores atque amet, voluptatum illo iusto obcaecati aut nesciunt tempora praesentium molestias, odio soluta explicabo in cumque cupiditate fuga incidunt consequatur quam veniam inventore, eaque minus. Corporis doloremque quae eligendi, molestias, minima natus! Vero ullam voluptatibus eaque, dignissimos autem culpa doloribus tempora, aperiam fuga vel velit, fugiat itaque placeat consequuntur eveniet sequi, non quas debitis error distinctio officiis molestiae similique! Dolorem facere rerum, iste inventore vero, eaque nam, alias sunt, tempore maiores numquam officiis minus! Fugit deleniti, dolorum hic accusamus nesciunt sequi debitis pariatur doloremque, quaerat quasi earum ullam odio veniam fuga, alias vel impedit modi veritatis facere? Odit voluptate quo minus harum vitae explicabo fugiat, dolorum autem, accusamus quas cum officia, hic minima recusandae corporis doloremque accusantium! Nostrum suscipit quisquam ipsum adipisci illum, esse, quis modi et illo tempore cupiditate unde. Assumenda veniam magnam necessitatibus nam ducimus, recusandae numquam vero tenetur quam quasi aliquam delectus aut maxime adipisci dolorem repellendus illo voluptatum perspiciatis tempora explicabo quia error, eius natus harum! Dignissimos iure hic odio dolorem, in iusto eius nisi illum repellat voluptates quo nemo? Iure, necessitatibus soluta, reprehenderit quam eos nihil doloribus ad, beatae quidem dolor, corrupti! Praesentium necessitatibus incidunt aspernatur asperiores commodi in provident impedit at perspiciatis, quos pariatur quidem fugit repellat ab velit recusandae nobis obcaecati maxime voluptate dolorum corrupti similique! Dolore maxime necessitatibus rerum reprehenderit cumque amet nam! Consequuntur, veritatis sed eligendi impedit ullam corporis vitae accusantium esse repellat, sapiente, ipsum illo fugit cum eum expedita odit pariatur saepe velit amet? Sunt minus, doloremque iusto reiciendis sed id nobis in obcaecati. Suscipit ratione quaerat non, amet corrupti quisquam sed repellendus ipsam repudiandae, natus laborum, harum ut est laboriosam neque adipisci impedit iste. Tenetur, laborum, ut! Sed doloribus quidem aliquam dignissimos sequi eligendi nostrum voluptatem officiis, repudiandae, esse id quam! Consequatur voluptate praesentium velit ipsam veniam saepe sequi eos, unde illo placeat a nemo vel ipsa atque explicabo beatae quod perferendis. Sequi alias, consequatur architecto ipsam, nihil est consectetur dolore illo sapiente a natus. Pariatur nobis repellat voluptatibus fugit vitae reprehenderit, deleniti necessitatibus architecto. Ad rem quaerat, doloribus temporibus sequi, blanditiis deserunt asperiores voluptate iure laborum unde possimus beatae optio natus cumque dolorum labore sapiente quas hic consequuntur sed dicta rerum accusamus. Eum omnis voluptatem facilis adipisci, asperiores deleniti mollitia deserunt! Voluptates ullam tempore esse sequi qui eum id ut repudiandae temporibus, magnam voluptatibus culpa aliquam consectetur ad animi, at, commodi totam. Ut architecto repellat unde, quos eos. Omnis hic sit minima rerum. Magni, distinctio! Officiis cumque blanditiis itaque doloremque nihil dolor enim nam, recusandae ut, delectus nisi non repellendus quae omnis unde cupiditate rerum libero saepe totam mollitia ipsum voluptate eius sequi ex quos. Adipisci non recusandae ipsam minus iusto nobis iste ratione atque optio, suscipit fuga, dicta neque laborum blanditiis. Iusto perspiciatis reiciendis, beatae illum recusandae fuga saepe sapiente quia est placeat harum animi nihil.",
        html_text = `<b style="color: red">Consectetur</b> adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua.<a href="#"> Ut enim ad minim veniam</a>,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. <b>Duis aute irure dolor</b> in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. <br>Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit <small>anim id est laborum</small>.`;
    $parrajo.textContent = texto;
    $parrajo.textContent = html_text;
    $parrajo.innerHTML = html_text;
    // TODO: recorrido del DOM;
    const $menu = d.querySelector(".menu"),
        $ul = $menu.firstElementChild,
        // $li = $ul.children[2];
        $li = $ul.children;
    c.log($ul.parentElement);
    c.log($ul.firstElementChild);
    c.log($ul.lastElementChild);
    c.log($parrajo.previousSibling);
    c.log($parrajo.nextElementSibling);
    c.log($parrajo.closest('body'));
    c.log($parrajo.closest('div'));
    // FIXME: creado elemento dinamicos
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
    let $h2 = d.createElement('h2'),
        $ol = d.createElement('ol');
    $h2.textContent = 'Meses del Año';
    d.body.appendChild($h2);
    meses.forEach((elemento) => {
        let $li_ol = d.createElement('li');
        $li_ol.textContent = elemento;
        $ol.appendChild($li_ol);
    });
    d.body.appendChild($ol);
    // fragmento
    $frag = d.createDocumentFragment();
    dias.forEach((elemento) => {
        let $li_dias = d.createElement('li');
        $li_dias.textContent = elemento;
        $frag.appendChild($li_dias);
    });
    let $ul_dias = d.createElement('ul');
    $ul_dias.appendChild($frag);
    $h2.textContent = 'Dias de la Semana';
    d.body.appendChild($h2);
    d.body.appendChild($ul_dias);
    // TODO: template;
    const $templete = d.getElementById('templete').content;
    const articulos = [{
        titulo: 'Lorem ipsum dolor sit amet.',
        parrajo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat sit quo quod iusto eligendi pariatur quam molestias dolorum perferendis saepe, architecto similique aut enim. Ut amet quis, reiciendis. Obcaecati, cumque.',
        boton: 'Leer más'
    }, {
        titulo: 'Lorem ipsum dolor sit amet.',
        parrajo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat sit quo quod iusto eligendi pariatur quam molestias dolorum perferendis saepe, architecto similique aut enim. Ut amet quis, reiciendis. Obcaecati, cumque.',
        boton: 'Leer más'
    }, {
        titulo: 'Lorem ipsum dolor sit amet.',
        parrajo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat sit quo quod iusto eligendi pariatur quam molestias dolorum perferendis saepe, architecto similique aut enim. Ut amet quis, reiciendis. Obcaecati, cumque.',
        boton: 'Leer más'
    }, {
        titulo: 'Lorem ipsum dolor sit amet.',
        parrajo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat sit quo quod iusto eligendi pariatur quam molestias dolorum perferendis saepe, architecto similique aut enim. Ut amet quis, reiciendis. Obcaecati, cumque.',
        boton: 'Leer más'
    }, {
        titulo: 'Lorem ipsum dolor sit amet.',
        parrajo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat sit quo quod iusto eligendi pariatur quam molestias dolorum perferendis saepe, architecto similique aut enim. Ut amet quis, reiciendis. Obcaecati, cumque.',
        boton: 'Leer más'
    }, {
        titulo: 'Lorem ipsum dolor sit amet.',
        parrajo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat sit quo quod iusto eligendi pariatur quam molestias dolorum perferendis saepe, architecto similique aut enim. Ut amet quis, reiciendis. Obcaecati, cumque.',
        boton: 'Leer más'
    }, {
        titulo: 'Lorem ipsum dolor sit amet.',
        parrajo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat sit quo quod iusto eligendi pariatur quam molestias dolorum perferendis saepe, architecto similique aut enim. Ut amet quis, reiciendis. Obcaecati, cumque.',
        boton: 'Leer más'
    }, {
        titulo: 'Lorem ipsum dolor sit amet.',
        parrajo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat sit quo quod iusto eligendi pariatur quam molestias dolorum perferendis saepe, architecto similique aut enim. Ut amet quis, reiciendis. Obcaecati, cumque.',
        boton: 'Leer más'
    }];
    articulos.forEach((elemento) => {
        $templete.querySelector('h2').textContent = elemento.titulo;
        $templete.querySelector('p').textContent = elemento.parrajo;
        $templete.querySelector('button').textContent = elemento.boton;
        let $templete_clone = d.importNode($templete, true);
        $frag.appendChild($templete_clone);
    });
    d.body.appendChild($frag);
    // FIXME: agregar elemento con meotdos modernos
    const posts = [{
        img: 'http://news-mag.local/cms/public/vista/img/categoria/suramerica.jpg',
        titulo: 'Lorem ipsum dolor sit amet, consectetur.',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt voluptatem tenetur ullam ipsum voluptas dolorum, quasi cumque inventore placeat animi at doloremque voluptatibus, delectus odio, praesentium quisquam reprehenderit omnis deserunt soluta. Adipisci aliquam fugit id?'
    }, {
        img: 'http://news-mag.local/cms/public/vista/img/categoria/centroamerica.jpg',
        titulo: 'Lorem ipsum dolor sit amet.',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione odit et tempore, officiis tempora perferendis nisi, vitae inventore quidem voluptate!'
    }, {
        img: 'http://news-mag.local/cms/public/vista/img/categoria/norteamerica.jpg',
        titulo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, nihil.',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae ea, nemo error consequuntur delectus dolorem consectetur, minima quod aliquam totam excepturi itaque! Maxime dicta amet eligendi officia explicabo, veniam officiis.'
    }, {
        img: 'http://news-mag.local/cms/public/vista/img/categoria/europa.jpg',
        titulo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus nostrum consequatur architecto cum modi? Et tenetur pariatur necessitatibus ipsum dicta minima quasi ratione, nam nisi dolorem.'
    }];
    $post = d.querySelector('.post'),
        $img_post = d.createElement('img'),
        $h3 = d.createElement('h3'),
        $p = d.createElement('p');
    $fragmento = d.createDocumentFragment();
    posts.forEach((el) => {
        $img_post.setAttribute('src', el.img);
        $img_post.setAttribute('alt', el.titulo)
        $h3.insertAdjacentText('afterbegin', el.titulo);
        $p.insertAdjacentText('afterbegin', el.descripcion);
        let $div = d.createElement('div');
        $div.insertAdjacentElement("afterbegin", $img_post);
        $div.insertAdjacentElement('afterbegin', $h3);
        $div.insertAdjacentElement('afterbegin', $p);
        $fragmento.appendChild($div);
    });
    // c.log($fragmento);
    $post.appendChild($fragmento);
    window.addEventListener('resize', (e) => {
        c.clear();
        c.log('Evento Riseze');
        c.log(window.innerWidth);
        c.log(window.innerHeight);
        c.log(outerWidth);
        c.log(outerHeight);
    });
    d.addEventListener("DOMContentLoaded", (e) => {
        c.clear();
        c.log('############### DOMContentLoaded ####################');
        c.log(window.scrollX);
        c.log(window.scrollY);
        c.log(e);
    });
    // TODO:Objeto url LOCATION y Historial
    c.log(location);
    c.log(location.origin);
    c.log(location.protocol);
    c.log(location.host);
    c.log(location.hostname);
    c.log(location.port);
    c.log(location.href);
    c.log(location.hash);
    c.log(location.search);
    c.log(location.pathname);
    // location.reload();
    c.log(history);
    c.log(history.length);
    // history.forward(1);
    // history.go(1ó-1);
    // history.back(2);
    // FIXME: objeto navigaitor - Navegador
    c.log(navigator);
    c.log(navigator.connection);
    c.log(navigator.geolocation);
    c.log(navigator.mediaDevices);
    c.log(navigator.mimeTypes);
    c.log(navigator.onLine);
    c.log(navigator.serviceWorker);
    c.log(navigator.storage);
    c.log(navigator.usb);
    c.log(navigator.userAgent);
})(console, document);