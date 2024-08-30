export default class CompetenceTechnique {
    // 1. Typage des propiétés d'un pokémon.
    id: number;
    libelle: string;
    competence: string;
    icon: string;
    percent: number;
    cvID: number;

    // 2. Définition des valeurs par défaut des propriétés d'un pokémon.
    constructor(
        id: number,
        libelle: string,
        competence: string,
        icon: string,
        percent: number,
        cvID: number
    ) {
        // 3. Initialisation des propiétés d'un pokémons.
        this.id = id;
        this.libelle = libelle;
        this.competence = competence;
        this.icon = icon;
        this.percent = percent;
        this.cvID = cvID;
    }
}