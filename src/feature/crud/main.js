/*Actividad 1: Agregar una función para eliminar y editar registros de la 
tabla. Cada fila de la tabla debe tener un botón "Eliminar" que, al hacer clic,
elimine el registro correspondiente tanto de la tabla como del almacenamiento local.*/


/* validación form */
function validateForm() {
    let nombre = document.getElementById("nombre").value;
    let documento = document.getElementById("documento").value;
    let email = document.getElementById("email").value;

    if (nombre === "" || documento === "" || email === "") {
        alert("Por favor completa todos los campos.");
        return false;
    }

    if (!email.includes("@")) {
        alert("Correo no válido....intente de nuevo");
        return false;
    }
    return true;
}

/*botoncito de limpiar formu */
document.getElementById("btnReset").onclick = function () {
    document.getElementById("nombre").value = "";
    document.getElementById("documento").value = "";
    document.getElementById("email").value = "";
};


/* muestra datos / tabla */
function showData() {
    let listData = JSON.parse(localStorage.getItem("listData")) || [];
    let tbody = document.querySelector("tbody");
    let html = "";

    if (listData.length === 0) {
        html = `
            <tr>
                <td colspan="4" class="text-secondary">No hay datos registrados</td>
            </tr>`;
    } else {
        listData.forEach((element, index) => {
            html += `
            <tr>
                <td>${element.email}</td>
                <td>${element.nombre}</td>
                <td>${element.documento}</td>
                <td>
                    <button class="btn btn-warning btn-sm" onclick="editData(${index})">
                        <i class="bi bi-pencil-square"></i>
                    </button>
                    <button class="btn btn-danger btn-sm" onclick="deleteData(${index})">
                        <i class="bi bi-trash3"></i>
                    </button>
                </td>
            </tr>`;
        });
    }
    tbody.innerHTML = html;
}

document.onload = showData();

/* agrega el registro */
document.getElementById("btnAdd").onclick = function () {
    if (validateForm() === false) return;

    let nombre = document.getElementById("nombre").value;
    let documento = document.getElementById("documento").value;
    let email = document.getElementById("email").value;

    let listData = JSON.parse(localStorage.getItem("listData")) || [];


    

    /*Actividad 2: Validar que el correo electrónico y el número de documento
    sean únicos antes de agregar un nuevo registro.*/

    let existe = listData.some(item =>
        item.email === email || item.documento === documento
    );

    if (existe) {
        alert("Error: El correo o el documento ya están registrados.");
        return;
    }

    listData.push({
        nombre: nombre,
        documento: documento,
        email: email
    });

    localStorage.setItem("listData", JSON.stringify(listData));
    showData();
    clearForm();
};

/* limpiar el formulario */
function clearForm() {
    document.getElementById("nombre").value="";
    document.getElementById("documento").value="";
    document.getElementById("email").value="";
}

/* eliminar registro */
function deleteData(index) {
    let listData = JSON.parse(localStorage.getItem("listData")) || [];

    if (confirm("¿Seguro que deseas eliminar este registro?")) {
        listData.splice(index,1);
        localStorage.setItem("listData",JSON.stringify(listData));
        showData();
    }
}

/* datos para editar */
let indexToEdit = null;

function editData(index) {
    let listData = JSON.parse(localStorage.getItem("listData")) || [];

    document.getElementById("nombre").value = listData[index].nombre;
    document.getElementById("documento").value = listData[index].documento;
    document.getElementById("email").value = listData[index].email;

    indexToEdit = index;
}

/* guardar cambios editados */
let btnUpdate = document.getElementById("btnUpdate");

if (btnUpdate) {
    btnUpdate.onclick = function() {
        if (indexToEdit===null) {
            alert("Selecciona un registro para editar.");
            return;
        }

        if (validateForm()===false) return;

        let listData=JSON.parse(localStorage.getItem("listData")) || [];
        let nuevoDocumento=document.getElementById("documento").value;
        let nuevoEmail=document.getElementById("email").value;

        let repetido=listData.some((item, i) =>
            i !==indexToEdit &&
            (item.email===nuevoEmail || item.documento===nuevoDocumento)
        );

        if (repetido) {
            alert("Error: El correo o el documento ya existen en otro registro.");
            return;
        }

        listData[indexToEdit] = {
            nombre: document.getElementById("nombre").value,
            documento: nuevoDocumento,
            email: nuevoEmail
        };

        localStorage.setItem("listData", JSON.stringify(listData));
        showData();
        clearForm();
        indexToEdit=null;
    };
}

/* borrar todo */
document.getElementById("btnBorrarTodo").onclick = function () {
    if (confirm("¿Seguro deseas borrar todos los datos?")) {
        localStorage.removeItem("listData");
        showData();
    }
};

/* exportar a json */
document.getElementById("btnExportar").onclick = function () {
    let data = localStorage.getItem("listData");

    if (!data) {
        alert("No hay datos para exportar.");
        return;
    }

    let blob = new Blob([data], { type: "application/json" });
    let url = URL.createObjectURL(blob);

    let a = document.createElement("a");
    a.href = url;
    a.download = "datos.json";
    a.click();
};
