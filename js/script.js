function toggleLanguage() {
    var titulo = document.getElementById('titulo');
    var idioma = document.getElementById('idioma');
    var mensaje = document.getElementById('mensaje');
    var titulo2 = document.getElementById('titulo2');
    var subtitulo = document.getElementById('subtitulo');
    var datos = document.getElementById('datos')
    var correo = document.getElementById('correo');
    var ubicacion = document.getElementById('ubicacion');
    var derechos = document.getElementById('derechos');
    var CV = document.getElementById('CV');
  
    if (titulo.innerHTML === 'Mi Blog Personal') {
      titulo.innerHTML = 'Personal Website';
      idioma.innerHTML = '<i class="fa-solid fa-language"></i> Español';
      mensaje.innerHTML = 'Welcome to my personal Website!';
      titulo2.innerHTML = 'Technologies I like';
      subtitulo.innerHTML = 'Passionate technology lover, web design enthusiast. Frontend developer.';
      datos.innerHTML = ' Contact Info';
      correo.innerHTML = ' Email: alejandrolgamotta@hotmail.com';
      ubicacion.innerHTML = ' Location: Mazatlan, Sinaloa';
      derechos.innerHTML = 'Copyright &copy; 2023 - Personal Website';
      CV.innerHTML = '<a class="nav-link" href="/doc/CV Motta English.pdf" download style="color: black;"><strong><i class="fa-solid fa-newspaper"></i> Currículum Vitae</strong></a>';
    } else {
        titulo.innerHTML = 'Mi Blog Personal';
        idioma.innerHTML = '<i class="fa-solid fa-language"></i> English';
        mensaje.innerHTML = 'Bienvenido a mi rincón en la web!';
        titulo2.innerHTML = 'Tecnologías de interés';
        subtitulo.innerHTML = 'Apasionado por todo lo relacionado a la web, principalmente el Frontend.';
        datos.innerHTML = ' Datos de Contacto';
        correo.innerHTML = ' Correo: alejandrolgamotta@hotmail.com';
        ubicacion.innerHTML = ' Ubicacion: Mazatlan, Sinaloa';
        derechos.innerHTML = 'Derechos de autor &copy; 2023 - Mi Blog Personal';
        CV.innerHTML = '<a class="nav-link" href="/doc/CV Motta Espanol.pdf" download style="color: black;"><strong><i class="fa-solid fa-newspaper"></i> Currículum Vitae</strong></a>';
    }
  }