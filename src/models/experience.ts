import Projet from "./projet"

export default class Experience {
    // 1. Typage des propiétés d'une expérience.
    id: number;
    dateDebut: string;
    dateFin: string;
    entreprise: string;
    poste: string;
    cvID: number;
    projets: Array<Projet>;

    // 2. Définition des valeurs par défaut des propriétés d'une expérience.
    constructor(
        id: number,
        dateDebut: string,
        dateFin: string,
        entreprise: string,
        poste: string,
        cvID: number,
        projets: Array<Projet> = []
    ) {
        // 3. Initialisation des propiétés d'une expérience.
        this.id = id;
        this.dateDebut = dateDebut;
        this.dateFin = dateFin;
        this.entreprise = entreprise;
        this.poste = poste;
        this.cvID = cvID;
        this.projets = projets;
    }
}