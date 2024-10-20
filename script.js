document.getElementById('fetchBtn').addEventListener('click', function() {
    const name = document.getElementById('characterName').value;
    fetchCharacterData(name);
});

function fetchCharacterData(name) {
    const apiUrl = `https://www.swapi.tech/api/people/?name=${encodeURIComponent(name)}`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.result.length > 0) {
                const character = data.result[0].properties;
                const output = `
Name: ${character.name}
Height: ${character.height} cm
Mass: ${character.mass} kg
Hair Color: ${character.hair_color}
Skin Color: ${character.skin_color}
Eye Color: ${character.eye_color}
Birth Year: ${character.birth_year}
Gender: ${character.gender}
 `;
                document.getElementById('output').value = output;
            } else {
                document.getElementById('output').value = "Karaktären hittades inte.";
            }
        })
        .catch(err => {
            console.error(err);
            document.getElementById('output').value = "Ett fel inträffade. Försök igen.";
        });
}