// let trashs = document.querySelectorAll('.trash');
// let trash = document.querySelector('.trash');
// let containerToast = document.querySelector('.container-toast');
let containerToast = document.getElementById('container-toast');
let moisHere = document.querySelector('container-months');
const tbody = document.getElementById('here-content-row');

// trashs.forEach(trash => document.addEventListener('click',openModal()))

// function openModal(){
//   console.log('lol');
// }
// trash.addEventListener('click', function () {
//     containerToast.style.display = "block";
// })

let dbRef = firebase.database().ref();

// lancement de la function read 
// const data = read("PA", "2020", "08");

//lancement de la function  update 
// const data1 = update("PA", "2020", "08", "19", "3", {
//   name: "cleoaaa",
//   presence: false,
// });

function loadDataToDisplay() {
    // 1. Appeler la fonction getLatestPermanences

    const result = getLatestPermanences('PA');
    result.then(annee => {
        let ligne = '';

        //   <td>
        //     <input class="presence" type="checkbox" name="" id="presence">
        //     <label for="presence">
        //       <div class="tick_mark"></div>
        //     </label>
        //   </td>
        //   <td><input class="presence" type="checkbox" name="" id="traite">
        //     <label for="traite">
        //       <div class="tick_mark"></div>
        //     </label></td>

        // moisHere.textContent = permanence;
        // 2. Boucler sur la Structure pour injecter les données de façon dynamique dans l'HTML
        console.log(annee);
        annee.mois.forEach(m => {
            m.jours.forEach(j => {
                const date = `${j.date}/${m.mm}/${annee.yyyy}`;
                j.rdvs.forEach((rdv, index) => {
                    ligne += '<tr>';
                    if (index === 0) {
                        ligne += `<td rowspan='${j.rdvs.length}'>${date}</td>`;
                    }
                    ligne += `
                          <td>${rdv.debut} à ${rdv.fin}</td>
                          <td>${rdv.names}</td>
                          <td>${rdv.tel}</td>
                          <td>${rdv.ast}</td>
                          <td>${rdv.presence}</td>
                          <td>${rdv.traite}</td>
                          <td class ='actions' id="${rdv.id}">
                             <span class="pen"><i class="fas fa-pen"></i></span>
                             <span class="check"><i class="fas fa-check"></i></span>
                             <span class="trash"><i class="fas fa-trash"></i></span>
                          </td>
                          <td><textarea name="" id="note" cols="45"  rows="4">${rdv.commentaire}</textarea></td>`;
                    ligne += '</tr>';
                });
            });
        });
        console.log(ligne);
        tbody.innerHTML = ligne;
    });
}

loadDataToDisplay();
