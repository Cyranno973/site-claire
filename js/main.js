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

function editRdv(annee, mois, jour, rdv) {
    console.log(rdv);
    const type = getTypePermanence();

    // Mettre des inputs
    const ligneEdition = `<tr id="edition">
                  <td class="heures">
                    ${rdv.debut} à ${rdv.fin}
                   </td>
                  <td class="names">
${rdv.names}
</td>
                  <td class="tel">${rdv.tel}</td>
                  <td class="ast">${rdv.ast}</td>
                  <td class="presence">${rdv.presence}</td>
                  <td class="traite">${rdv.traite}</td>
                  <td class ='actions'>
                    <span onclick="editRdv(${annee.yyyy},${m.mm},${j.date},${rdv.id})" class="pen"><i class="fas fa-pen"></i></span>
                     <span class="check"><i class="fas fa-check"></i></span>
                     <span class="trash"><i class="fas fa-trash"></i></span>
                  </td>
                  <td><textarea name="" id="note" cols="45"  rows="4">${rdv.commentaire}</textarea></td>
            </tr>`;

    console.log(annee, mois, jour, rdv, type);
}

function getTypePermanence() {
    const pathName = window.location.pathname.split("/");
    const page = pathName[pathName.length - 1];
    switch (page) {
        case "psa.html" :
            return "PSA";
        case "past.html" :
            return "PAST";
        default :
            return "PA";
    }
}

function loadDataToDisplay() {
    const type = getTypePermanence();
    // 1. Appeler la fonction getLatestPermanences

    const result = getLatestPermanences(type);
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
        annee.mois.forEach(m => {
            m.jours.forEach(j => {
                const date = `${j.date}/${m.mm}/${annee.yyyy}`;
                j.rdvs.forEach((rdv, index) => {
                    ligne += '<tr id="${rdv.id}">';
                    console.log(rdv);
                    if (index === 0) {
                        ligne += `<td rowspan='${j.rdvs.length}'>${date}</td>`;
                    }
                    ligne += `
                          <td class="heures">
                            <span class="debut">${rdv.debut}</span> à <span class="fin">${rdv.fin}</span>
                          </td>
                          <td class="names">${rdv.names}</td>
                          <td class="tel">${rdv.tel}</td>
                          <td class="ast">${rdv.ast}</td>
                          <td class="presence">${rdv.presence}</td>
                          <td class="traite">${rdv.traite}</td>
                          <td class ='actions'>
                             <span onclick="editRdv(${annee.yyyy},${m.mm},${j.date},${rdv.id})" class="pen"><i class="fas fa-pen"></i></span>
                             <span class="check"><i class="fas fa-check"></i></span>
                             <span class="trash"><i class="fas fa-trash"></i></span>
                          </td>
                          <td><textarea name="" id="note" cols="45"  rows="4">${rdv.commentaire}</textarea></td>`;
                    ligne += '</tr>';
                });
            });
        });
        const ligneEdition = `<tr  id="edition"> 
                   <td><input type="text" value=""/></td>\`;
                  <td class="heures"><input type="text" value=""/>
                   </td>
                  <td class="names"><input type="text" value=""/>
</td>
                  <td class="tel"><input type="text" value=""/></td>
                  <td class="ast"><input type="text" value=""/></td>
                  <td class="presence"><input type="text" value=""/></td>
                  <td class="traite"><input type="text" value=""/></td>
                  <td class ='actions'><input type="text" value=""/></td>
                  <td><textarea name="" id="note" cols="45"  rows="4"></textarea></td>
            </tr>`;
        ligne += ligneEdition;
        tbody.innerHTML = ligne;
    });
}

loadDataToDisplay();
