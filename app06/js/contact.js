const personasArray = [];

function processContactForm(e) {
  e.preventDefault(); // Evitar el envío del formulario

  // Recuperar los datos del formulario
  const persona = {
    nombres: document.getElementById("fnames").value,
    apellidos: document.getElementById("fsurname").value,
    telefonos: document.getElementById("fphone").value,
    email: document.getElementById("femail").value,
    ciudad: document.getElementById("fcity").value,
    pais: document.getElementById("fcountry").value,
  };

  // Verificar si los campos están vacíos
  if (
    !persona.nombres ||
    !persona.apellidos ||
    !persona.telefonos ||
    !persona.email ||
    !persona.ciudad ||
    !persona.pais
  ) {
    alert("Por favor, complete todos los campos.");
    return;
  }

  // Agregar la persona al array
  personasArray.push(persona);

  alert("Datos guardados con éxito");

  // Limpiar el formulario
  document.forms["fcontact"].reset();
}

function listarContactos() {
  let dinamicTable = `
    <table class="table">
      <thead>
        <tr>
          <th>Nombres</th>
          <th>Apellidos</th>
          <th>Teléfono</th>
          <th>Email</th>
          <th>Ciudad</th>
          <th>País</th>
        </tr>
      </thead>
      <tbody>
  `;

  // Generar filas con los datos
  personasArray.forEach((persona) => {
    dinamicTable += `
      <tr>
        <td>${persona.nombres}</td>
        <td>${persona.apellidos}</td>
        <td>${persona.telefonos}</td>
        <td>${persona.email}</td>
        <td>${persona.ciudad}</td>
        <td>${persona.pais}</td>
      </tr>
    `;
  });

  dinamicTable += `
      </tbody>
    </table>
  `;

  document.getElementById("tablecontact").innerHTML = dinamicTable;
}
