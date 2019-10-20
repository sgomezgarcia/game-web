const games = [
    {
        name: 'sara',
        release: '10/10/2019',
        pegi: '18',
        developer: 'carlos',
        genre: 'action'
    },
    {
        name: 'lluis',
        release: '12/10/2019',
        pegi: '5',
        developer: 'roca',
        genre: 'romantic'
    },
    {
        name: 'blesa',
        release: '01/10/2019',
        pegi: '14',
        developer: 'fernando',
        genre: 'adventure'
    }
];


// Introduce in players in its container 
function formGame () {
    // cojo el div para usarlo
    let gameContainer = document.getElementById('game-list');
    let gamers = '';
    // añade el valor al string vacío
    for (let i = 0; i < games.length; i++) {
        gamers +=
            '<div class="user-info player-' + i + '">' +
                '<img src="http://simpleicon.com/wp-content/uploads/user1.svg" class="image-player" />' +
                '<p>' + games[i].name + '</p>' +
                '<p>' + games[i].release + '</p>' +
                '<p>' + games[i].pegi + '</p>' +
                '<p>' + games[i].developer + '</p>' +
                '<p>' + games[i].genre + '</p>' +
                '<button type="button" class="bt-borrar" name="button"><i class="fa fa-trash"></i></button>' +
            '</div>';
    }
    gameContainer.innerHTML = gamers;
}



// Validators
function validaRelease (release) {
    const regex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
    return regex.test(release);
}

// restricciones a los campos al ser completados
function checkForm () {
    let field_name = document.getElementById('name').value;
    let field_release = document.getElementById('release').value;
    let field_pegi = document.getElementById('pegi').value;
    let field_developer = document.getElementById('developer').value;
    let field_genre = document.getElementById('genre').value;


    if (!validaRelease(field_release, 'dd-mm-aaaa') || field_release == '') {
        alert('Formato erróneo');
        return false;
        // false = se acaba la función, no sigue la ejecución
    }

    const gameExists = games.find((game) => game.name === field_name);

    // Compueba si el nombre del juego ya existe
    if (gameExists) {
        alert("El juego ya existe")
    } else if (field_name.value !== "" && field_pegi.value !== "" && field_release.value !== "" && field_genre.value !== "" && field_developer.value !== "") {
        games.push(
            {
                name: field_name,
                release: field_release,
                pegi: field_pegi,
                developer: field_developer,
                genre: field_genre
            }
        )
        formGame();
        alert("Datos insertados correctamente");

    } else {
        alert("Todos los campos son obligatorios");
    }
}

// Remove player function
function deleteButton(event) {
    $(event.currentTarget).closest(".user-info").remove();
}

// It will be executed when the document is loaded
window.onload = function () {
    this.formGame();
    document.getElementById("bt-enviar").addEventListener("click", this.checkForm);

    const deleteButton = document.getElementsByClassName("bt-borrar");

    for (let i = 0; i < deleteButton.length; i++) {
        deleteButton[i].addEventListener("click", (event) => this.deleteButton(event))
    }
}