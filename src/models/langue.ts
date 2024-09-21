export default class Langue {
    // 1. Typage des propiétés d'une langue.
    id: number;
    origine: string;
    niveau: string;
    percent: number;
    cvID: number;

    // 2. Définition des valeurs par défaut des propriétés d'une langue.
    constructor(
        id: number,
        origine: string,
        niveau: string,
        percent: number,
        cvID: number
    ) {
        // 3. Initialisation des propiétés d'une langue.
        this.id = id;
        this.origine = origine;
        this.niveau = niveau;
        this.percent = percent;
        this.cvID = cvID;
    }
}