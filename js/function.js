// La fonction read permet la lecture de la base.
function read(type, annee, mois, jour = "", idRdv = "") {
    const uri = `App/${type}/${annee}/${mois}/${jour}/${idRdv}`;
    return dbRef.child(uri).once("value");
}

// function update permet la mise a jours de donnee
function update(type, annee, mois, jour, idRdv, rdv) {
    const uri = `App/${type}/${annee}/${mois}/${jour}/${idRdv}`;
    cleanObject(rdv);
    read(type, annee, mois, jour, idRdv).then((snap) => {
        const rdvOld = snap.val();
        const newVal = {...rdvOld, ...rdv};

        dbRef
            .child(uri)
            .set(newVal)
            .then(() => console.log("success"))
            .catch((error) => console.log("failed ", error));
    });
}

/**
 * permet de vider l'objet
 * @param obj
 */
function cleanObject(obj) {
    Object.keys(obj).forEach(key => {
        if (!obj[key]) {
             obj[key] = '';
        }
    });
}

// Mappe l'objet retourné par firebase pour que ça corresponde la structure du front
function adapter(snap, annee, mois) {
    // console.log(snap);
    const jours = [];
    if (snap) {
        const snapObjet = Object.entries(snap);
        snapObjet.map(jourKeyValue => {
            // Créer les rdvs
            const rdvs = [];

            // Ajouter les rdv
            Object.entries(jourKeyValue[1]).map(rdvKeyValue => {
                let nouveauRdv = new Rdv();
                nouveauRdv.id = rdvKeyValue[0];
                nouveauRdv.debut = rdvKeyValue[1].debut;
                nouveauRdv.fin = rdvKeyValue[1].fin;
                nouveauRdv.names = rdvKeyValue[1].names;
                nouveauRdv.ast = rdvKeyValue[1].ast;
                nouveauRdv.presence = rdvKeyValue[1].presence;
                nouveauRdv.commentaire = rdvKeyValue[1].commentaire;
                nouveauRdv.traite = rdvKeyValue[1].traite;
                nouveauRdv.tel = rdvKeyValue[1].tel;
                cleanObject(nouveauRdv);
                //ou spread
                // nouveauRdv =  {id:rdvKeyValue[0],...rdvKeyValue[1]};
                rdvs.push(nouveauRdv);
            });

            // Créer un jour
            const newJour = new Jour(jourKeyValue[0], rdvs);
            // Ajouter le jour à la liste des jours
            jours.push(newJour);
        });
    }

    const m1 = new Mois(mois, jours);
    return new Annee(annee, [m1]); // a modifier poujr afficher plusieurs mois
}

// Function à appeler par le front au chargement d'un type de permanence
function getLatestPermanences(type) {
    // console.log(type);
    // 1. Récupérer la date (now)
    const date = new Date();
    const annee = date.getFullYear();
    // const mois = date.getMonth() + 1;
    const mois = 2;
    const jour = date.getDay();
    // 2. Appeler le read avec (type, annee, mois en fonction de la date) et mettre le résultat dans une const
    const data = read(type, annee, mois)
        .then(rows => adapter(rows.val(), annee, mois));
    return data;
}
