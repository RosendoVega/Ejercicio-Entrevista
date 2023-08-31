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
        //insertamos columnas con el valor del indice del arreglo
        const idPersonaje = fila.insertCell(0);
        const namePersonaje = fila.insertCell(1);
        const alternate_namesPersonaje = fila.insertCell(2);
        const speciesPersonaje = fila.insertCell(3);
        const genderPersonaje = fila.insertCell(4);
        const housePersonaje = fila.insertCell(5);
        const dateOfBirthPersonaje = fila.insertCell(6);
        const yearOfBirthPersonaje = fila.insertCell(7);
        const wizardPersonaje = fila.insertCell(8);
        const ancestryPersonaje = fila.insertCell(9);
        const eyeColourPersonaje = fila.insertCell(10);
        const hairColourPersonaje = fila.insertCell(11);
        const wandPersonaje = fila.insertCell(12);
        const patronusPersonaje = fila.insertCell(13);
        const hogwartsStudentPersonaje = fila.insertCell(14);
        const hogwartsStaffPersonaje = fila.insertCell(15);
        const actorPersonaje = fila.insertCell(16);
        const alternate_actorsPersonaje = fila.insertCell(17)
        const alivePersonaje = fila.insertCell(18);

        const imagePersonaje = fila.insertCell(19);
        const imageElement = document.createElement('img');
        if(datoPersonaje.image){
            imageElement.src = datoPersonaje.image;
            
        }else{
            imageElement.src='./images/imaDefecto.png'
        }
        imageElement.alt = 'Imagen del personaje';
        imageElement.style.maxWidth = '100px'; 
        imagePersonaje.appendChild(imageElement);

        //agregamos el texto html y pasamos los valores de la API
        idPersonaje.innerText = datoPersonaje.id;
        namePersonaje.innerText = datoPersonaje.name;
        alternate_namesPersonaje.innerText = datoPersonaje.alternate_names;
        speciesPersonaje.innerText = datoPersonaje.species;
        genderPersonaje.innerText = datoPersonaje.gender;
        housePersonaje.innerText = datoPersonaje.house;
        dateOfBirthPersonaje.innerText = datoPersonaje.dateOfBirth;
        yearOfBirthPersonaje.innerText = datoPersonaje.yearOfBirth;
        wizardPersonaje.innerText =  datoPersonaje.wizardPersonaje ?"Sí" : "No";
        ancestryPersonaje.innerText = datoPersonaje.ancestry;
        eyeColourPersonaje.innerText = datoPersonaje.eyeColour;
        hairColourPersonaje.innerText = datoPersonaje.hairColour;
        wandPersonaje.innerText = datoPersonaje.wand;
        patronusPersonaje.innerText = datoPersonaje.patronusPersonaje;
        hogwartsStudentPersonaje.innerText = datoPersonaje.hogwartsStudent ? "Sí": "No";
        hogwartsStaffPersonaje.innerText = datoPersonaje.hogwartsStaff ? "Sí": "No";
        actorPersonaje.innerText = datoPersonaje.actor;
        alternate_actorsPersonaje.innerHTML = datoPersonaje.alternate_actors;
        alivePersonaje.innerText = datoPersonaje.alive;
    });

    })

   
    .catch(error =>{
        console.log('Error',error);
    })
    