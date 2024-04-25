const ocultarSecciones = () => {
  document.getElementById('explore-section').style.display = 'none';
  document.getElementById('boards-section').style.display = 'none';
  document.getElementById('users-section').style.display = 'none';
  document.getElementById('board-detail-section').style.display = 'none';
  
}

const explorar = async () => {
  ocultarSecciones();
  document.getElementById('explore-section').style.display = 'block';
  var opciones = document.querySelectorAll('.explore-option');
  opciones.forEach(function(opcion) {
      opcion.classList.remove('selected');
    });

  const resultado = await fetch(`http://localhost:8888/pins`, {
    method: 'GET'
  });

  pins = await resultado.json();

  document.querySelector('.container').innerHTML = '';

  pins.forEach(pin => {
    document.querySelector('.container').innerHTML += `
    <div class="box">
          <img
            src="${pin.img}"
            alt=""
          />
          <div class="hover">
            <select class="board-select">
              <option>Tablero 1</option>
              <option>Tablero 2</option>
              <option>Tablero 3</option>
            </select>
            <button type="button">Guardar</button>
          </div>
          <div><h3 class="pin-title">${pin.title}</h3></div>
          <div class="pin-description">${pin.description}</div>
        </div>
    `;
  });
}

explorar();

const cargarUsuarios = async () => {
  const resultado = await fetch('http://localhost:8888/users', {
    method: 'GET'
  });

  usuarios = await resultado.json();

  document.getElementById('users-container').innerHTML = '';

  usuarios.forEach(usuario => {
    document.getElementById('users-container').innerHTML += `
    <div class="user-card">
      <img src="${usuario.imagenPerfil}" onclick="seleccionarUsuario('${usuario._id}')"/>
    </div>
    `;
  });
}


const seleccionarUsuario = async (id) => {
  const resultado = await fetch(`http://localhost:8888/users/${id}`, {
    method: 'GET'
  });

  usuario = await resultado.json();


  document.querySelector('.board-container').innerHTML = '';
  imagenPerfil = document.querySelector('.imagenPerfil');
  imagenPerfil.src = `${usuario.imagenPerfil}`


  usuario.boards.forEach(async board => {
    const resultado = await fetch(`http://localhost:8888/boards/${board}`, {
    method: 'GET'
  });

  data = await resultado.json();
  console.log(data);


  document.querySelector('.board-container').innerHTML += `
  <div class="board-card" onclick="mostrarDetallesTablero()">
          <div class="board-img-container" style="background-image: url('${data.boardImage}');"></div>
          <h3>${data.boardTitle}</h3>
          <h5>${data.pins.length} pines</h5>
        </div>
  `;

  })

}

const cargarLista = async (tag) => {
  ocultarSecciones();
  document.getElementById('explore-section').style.display = 'block';
  var opciones = document.querySelectorAll('.explore-option');
  opciones.forEach(function(opcion) {
      opcion.classList.remove('selected');
    });
    
  event.target.classList.add('selected');

  const resultado = await fetch(`http://localhost:8888/pins/656c0e258244082d468b963c/${tag}`, {
    method: 'GET'
  });

  pins = await resultado.json();

  document.querySelector('.container').innerHTML = '';

  pins.forEach(pin => {
    document.querySelector('.container').innerHTML += `
    <div class="box">
          <img
            src="${pin.img}"
            alt=""
          />
          <div class="hover">
            <select class="board-select">
              <option>Tablero 1</option>
              <option>Tablero 2</option>
              <option>Tablero 3</option>
            </select>
            <button type="button">Guardar</button>
          </div>
          <div><h3 class="pin-title">${pin.title}</h3></div>
          <div class="pin-description">${pin.description}</div>
        </div>
    `;
  });

}

const misTableros = () => {
  ocultarSecciones();
  document.getElementById('boards-section').style.display = 'block';
}

const listaUsuarios = () => {
  ocultarSecciones();
  cargarUsuarios();
  document.getElementById('users-section').style.display = 'block';
}

const mostrarDetallesTablero = () => {
  ocultarSecciones();
  document.getElementById('board-detail-section').style.display = 'block';
}