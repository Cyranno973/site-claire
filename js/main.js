// let trashs = document.querySelectorAll('.trash');
// let trash = document.querySelector('.trash');
// let containerToast = document.querySelector('.container-toast');
let containerToast = document.getElementById('container-toast');
let moisHere = document.querySelector('container-months');
const tbody = document.getElementById('here-content-row');

let editionIdEnCours;
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
function createInput(type, value) {
    const input = document.createElement("input");
    input.type = type;
    input.value = value;
    return input;
}

function editRdv(trId) {
    if (editionIdEnCours) {
        return;
    }
    [...document.querySelectorAll(".consultation")].forEach(elem => elem.style.display = "none");
    editionIdEnCours = trId;

    const type = getTypePermanence();
    const ligneToEdit = document.getElementById(trId);
    const tds = ligneToEdit.getElementsByTagName("td");
    const actions = ligneToEdit.getElementsByClassName('actions')[0];
    actions.getElementsByClassName('modification')[0].style.display = "inline-block";

    for (let td of tds) {
        const spanElt = td.getElementsByTagName("span")[0];
        if (spanElt) {
            const spanClass = spanElt.className;
            if (spanClass.startsWith("edit-")) {
                const type = spanClass.replace("edit-", "");
                const val = spanElt.textContent;
                switch (type) {
                    case 'textarea' :
                        const textarea = document.createElement('textarea');
                        td.appendChild(textarea);
                        break;
                    case 'text' :
                    case 'checkbox' :
                        const input = createInput(type, val);
                        td.appendChild(input);
                        break;
                }
                spanElt.style.display = "none";
            }
        }
    }
}

function cancelEdit(trId) {
    editionIdEnCours = null;
    [...document.querySelectorAll(".consultation")].forEach(elem => elem.style.display = "inline-block");
    [...document.querySelectorAll(".modification")].forEach(elem => elem.style.display = "none");
    const ligneToEdit = document.getElementById(trId);

    [...ligneToEdit.getElementsByTagName("td")].forEach(td => {
        const spanElem = td.getElementsByTagName("span")[0];
        if (spanElem) {
            spanElem.style.display = "inline-block";
        }
        const inputElem = td.querySelectorAll("input,textarea")[0];

        if (inputElem) {
            inputElem.parentNode.removeChild(inputElem);
        }
    });
}

function deleteRdv(trId) {
    console.log("lol");
    containerToast.style.display = "block";
    document.querySelector(".container-contain-toast").style.display = "block";

}

function resetEdition() {
    // TODO : fonction qui met à zéro l'id en cours d'édition
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
                    const currentId = `${annee.yyyy}-${m.mm}-${j.date}-${rdv.id}`;
                    ligne += `<tr id="${currentId}">`;
                    if (index === 0) {
                        ligne += `<td rowspan='${j.rdvs.length}'>${date}</td>`;
                    }
                    ligne += `
                          <td class="heures">
                            <span class="debut">${rdv.debut}</span> à <span class="fin">${rdv.fin}</span>
                          </td>
                          <td class="names"><span class="edit-text">${rdv.names}</span></td>
                          <td class="tel"><span class="edit-text">${rdv.tel}</span></td>
                          <td class="ast"><span class="edit-text">${rdv.ast}</span></td>
                          <td class="presence"><span class="edit-text">${rdv.presence}</span></td>
                          <td class="traite"><span class="edit-text">${rdv.traite}</span></td>
                          <td class ='actions'>
                             <div class="consultation">
                             <span onclick="editRdv('${currentId}')" class="pen"><i class="fas fa-pen"></i></span>
                             <span onclick="deleteRdv('${currentId}')" class="trash"><i class="fas fa-trash"></i></span>
                             
                             </div>
                             <div class='modification'>
                                  <span onclick="cancelEdit('${currentId}')" class="cancel"><i class="fas fa-times"></i></span>
                                  <span class="validatevalidate"><i class="fas fa-check"></i></span>
                   
                             </div>
                          </td>
                        <td><span class="edit-textarea"><textarea disabled name="" id="note" cols="45"  rows="4">${rdv.commentaire}</textarea></span></td>`;
                    // TODO : Créer les icones d'action pour Valider / Annuler masquées par défaut
                    ligne += '</tr>';
                });
            });
        });
        tbody.innerHTML = ligne;
    });
}

loadDataToDisplay();
