export default class Formation {
    // 1. Typage des propiétés d'un pokémon.
    id: number;
    dateDebut: string;
    dateFin: string;
    etablissement: string;
    description: string;
    cvID: number;

    // 2. Définition des valeurs par défaut des propriétés d'un pokémon.
    constructor(
        id: number,
        dateDebut: string,
        dateFin: string,
        etablissement: string,
        description: string,
        cvID: number
    ) {
        // 3. Initialisation des propiétés d'un pokémons.
        this.id = id;
        this.dateDebut = dateDebut;
        this.dateFin = dateFin;
        this.etablissement = etablissement;
        this.description = description;
        this.cvID = cvID;
    }
}