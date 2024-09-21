export default class CompetenceTechnique {
    // 1. Typage des propiétés d'une compétence technique.
    id: number;
    libelle: string;
    competence: string;
    icon: string;
    percent: number;
    cvID: number;

    // 2. Définition des valeurs par défaut des propriétés d'une compétence technique.
    constructor(
        id: number,
        libelle: string,
        competence: string,
        icon: string,
        percent: number,
        cvID: number
    ) {
        // 3. Initialisation des propiétés d'une compétence technique.
        this.id = id;
        this.libelle = libelle;
        this.competence = competence;
        this.icon = icon;
        this.percent = percent;
        this.cvID = cvID;
    }
}