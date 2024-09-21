export default class Formation {
    // 1. Typage des propiétés d'une formation.
    id: number;
    dateDebut: string;
    dateFin: string;
    etablissement: string;
    description: string;
    cvID: number;

    // 2. Définition des valeurs par défaut des propriétés d'une formation.
    constructor(
        id: number,
        dateDebut: string,
        dateFin: string,
        etablissement: string,
        description: string,
        cvID: number
    ) {
        // 3. Initialisation des propiétés d'une formation.
        this.id = id;
        this.dateDebut = dateDebut;
        this.dateFin = dateFin;
        this.etablissement = etablissement;
        this.description = description;
        this.cvID = cvID;
    }
}