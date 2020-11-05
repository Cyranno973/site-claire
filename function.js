// La fonction read permet la lecture de la base.
function read(type, annee, mois, jour = "", idRdv = "") {
  const uri = `App/${type}/${annee}/${mois}/${jour}/${idRdv}`;
  return dbRef.child(uri).once("value");
}

// function update permet la mise a jours de donnee
function update(type, annee, mois, jour, idRdv, rdv) {
  const uri = `App/${type}/${annee}/${mois}/${jour}/${idRdv}`;

  read(type, annee, mois, jour, idRdv).then((snap) => {
    const rdvOld = snap.val();
    const newVal = { ...rdvOld, ...rdv };

    dbRef
      .child(uri)
      .set(newVal)
      .then(() => console.log("success"))
      .catch((error) => console.log("failed ", error));
  });
}

function addTODo(){
    
}



From Alexis RG to Everyone: (11:48 PM)
// DTO
function snapToApp(snap) {
    const jours = [];
    snap.map(snap => {
        const rdvs = jour.rdv.map(rdv => {

        });
        const jour = new Jour();
        // Créer les rdvs
        // Créer un jour
        // Ajouter les rdv
        // Ajouter le jour à la liste des jours
        jours.push(jour);
    });
    return jours;
}
From Alexis RG to Everyone: (11:49 PM)
class Rdv {
    constructor(
        heureDebut,
        heureFin,
        nomPrenom,
        Assist,
        Presence,
        traite) {
    }
}

class Jour {
    constructor(date, rdvs) {
    }
}
From Alexis RG to Everyone: (11:54 PM)
class Rdv {
    constructor(
        heureDebut,
        heureFin,
        nomPrenom,
        Assist,
        Presence,
        traite) {
    }
}

class Jour {
    constructor(dd, rdvs) {
    }
}

class Mois {
    constructor(mm, rdvs) {
    }
}

// DTO
function snapToApp(snap) {
    const jours = [];
    snap.map(snap => {
        // Créer les rdvs
        const rdvs = jour.rdv.map(rdv => {

        });
        // Créer un jour et Ajouter les rdv
        const jour = new Jour('', rdvs);
        // Ajouter le jour à la liste des jours
        jours.push(jour);
    });
    return jours;
}