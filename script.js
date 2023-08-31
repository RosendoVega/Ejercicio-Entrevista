//Conexcion con la APPI
fetch('https://hp-api.onrender.com/api/characters').then(response =>{
    //verfifica conexion
    if(!response.ok){
        throw new Error('Fallo la conexion');
    }
    console.log('Conexion realizada');
    return response.json();
    
}).then( valoresP =>{
    //constante para agregar elementos al body
    const table = document.getElementById('tablePersonaje').getElementsByTagName('tbody')[0];
    
    //ciclo para agregar valores a la tabla
    valoresP.forEach(datoPersonaje =>{
        
        //filas
        const fila = table.insertRow();

        //Agregar la imagen 
        const imagePersonaje = fila.insertCell(0);
        const imageElement = document.createElement('img');
        if(datoPersonaje.image){
            imageElement.src = datoPersonaje.image;
            
        }else{
            imageElement.src='./images/imaDefecto.png'
        }
        imageElement.alt = 'Imagen del personaje';
        imageElement.style.maxWidth = '130px'; 
        imagePersonaje.appendChild(imageElement);
        //insertamos columnas con el valor del indice del arreglo
        const idPersonaje = fila.insertCell(1);
        const namePersonaje = fila.insertCell(2);
        const alternate_namesPersonaje = fila.insertCell(3);
        const speciesPersonaje = fila.insertCell(4);
        const genderPersonaje = fila.insertCell(5);
        const housePersonaje = fila.insertCell(6);
        const dateOfBirthPersonaje = fila.insertCell(7);
        const yearOfBirthPersonaje = fila.insertCell(8);
        const wizardPersonaje = fila.insertCell(9);
        const ancestryPersonaje = fila.insertCell(10);
        const eyeColourPersonaje = fila.insertCell(11);
        const hairColourPersonaje = fila.insertCell(12);
        const wandPersonaje = fila.insertCell(13);
        const patronusPersonaje = fila.insertCell(14);
        const hogwartsStudentPersonaje = fila.insertCell(15);
        const hogwartsStaffPersonaje = fila.insertCell(16);
        const actorPersonaje = fila.insertCell(17);
       // const alternate_actorsPersonaje = fila.insertCell(17)
        const alivePersonaje = fila.insertCell(18);

        

        //agregamos el texto html y pasamos los valores de la API
        idPersonaje.innerText = datoPersonaje.id ? datoPersonaje.id: "N/A" ;
        namePersonaje.innerText = datoPersonaje.name ? datoPersonaje.name: "N/A" ;
        alternate_namesPersonaje.innerText = datoPersonaje.alternate_names.length > 0 ? datoPersonaje.alternate_names.join(', ') : 'N/A';
        speciesPersonaje.innerText = datoPersonaje.species ? datoPersonaje.species: "N/A" ;
        genderPersonaje.innerText = datoPersonaje.gender ? datoPersonaje.gender: "N/A" ;
        housePersonaje.innerText = datoPersonaje.house ? datoPersonaje.house: "N/A" ;
        dateOfBirthPersonaje.innerText = datoPersonaje.dateOfBirth ? datoPersonaje.dateOfBirth: "N/A" ;
        yearOfBirthPersonaje.innerText = datoPersonaje.yearOfBirth ? datoPersonaje.yearOfBirth: "N/A" ;
        wizardPersonaje.innerText =  datoPersonaje.wizardPersonaje ?"Sí" : "No";
        ancestryPersonaje.innerText = datoPersonaje.ancestry ? datoPersonaje.ancestry: "N/A";
        eyeColourPersonaje.innerText = datoPersonaje.eyeColour ? datoPersonaje.eyeColour: "N/A";
        hairColourPersonaje.innerText = datoPersonaje.hairColour ? datoPersonaje.hairColour: "N/A";
        //Para el objeto mostramos los valores
        if (datoPersonaje.wand && typeof datoPersonaje.wand === 'object') {
            const wandDetails = [];
            if (datoPersonaje.wand.wood) {
                wandDetails.push(`Wood: ${datoPersonaje.wand.wood}`);
            }
            if (datoPersonaje.wand.core) {
                wandDetails.push(`Core: ${datoPersonaje.wand.core}`);
            }
            if (datoPersonaje.wand.length) {
                wandDetails.push(`Length: ${datoPersonaje.wand.length}`);
            }
            wandPersonaje.innerText = wandDetails.join(', ');
        } else {
            wandPersonaje.innerText = 'N/A';
        }

        //ponemos la condicion por si no existe el valor
        patronusPersonaje.innerText = datoPersonaje.patronus ? datoPersonaje.patronus : "N/A" ;
        hogwartsStudentPersonaje.innerText = datoPersonaje.hogwartsStudent ? "Sí": "No";
        hogwartsStaffPersonaje.innerText = datoPersonaje.hogwartsStaff ? "Sí": "No";
        actorPersonaje.innerText = datoPersonaje.actor ? datoPersonaje.actor: "N/A";
        //alternate_actorsPersonaje.innerHTML = datoPersonaje.alternate_actors;
        alivePersonaje.innerText = datoPersonaje.alive ? datoPersonaje.alive: "N/A";
    });
    })
    .catch(error =>{
        console.log('Error',error);
    })

    //Obtenemos el valor del input
    const inputBusqueda = document.getElementById('inputBusqueda');
    //llamamos a la funcion buscarPersonaje al momento de ejecutar el input
    inputBusqueda.addEventListener('input', buscarPersonaje);

 
    
    function buscarPersonaje() {
        //lo pso a minuscula para que la busqueda funcione si se escirbe en mayusculas
        const valorABuscar = inputBusqueda.value.toLowerCase();
        //obtenemos las filas de la tabla dentro del cuerpo de la misma
        const filas = document.getElementById('tablePersonaje').getElementsByTagName('tbody')[0].getElementsByTagName('tr');
        
        //Busqueda de coincidencias con loe elementos de la tabla 
        for (const fila of filas) {//recorriendo todas las filas y obtiene el valor dentro de la fila
            const celdas = fila.getElementsByTagName('td');
            let coincide = false;
            for (const celda of celdas) {//con otro ciclo recorremos todas las celdas
                //pasamos a minuscula el valor de la celda para realizar las comparaciones 
                const contenido = celda.innerText.toLowerCase();
                //realizamos la comparacion si es que existe un valor igual
                if (contenido.includes(valorABuscar)) {
                    coincide = true;
                    //si existe se termina el ciclo 
                    break;
                }
            }//si no exiten no muestra ninguna fila
            fila.style.display = coincide ? '' : 'none';
        }
    }

    //Para el paso 5 utilizare la misma funcion del paso anterior donde busca por coincidencias, solo le pasare el valor del select al input
    const selectBusqueda = document.getElementById('selectBusqueda');
    //cuando se seleccione un valor
    selectBusqueda.addEventListener('change', function() {
    // Asigno el valor al input
    inputBusqueda.value = selectBusqueda.value; 
    //y llamo a la misma funcion
    buscarPersonaje(); 
    //limpiamos el input
    inputBusqueda.value = '';
    });

 
