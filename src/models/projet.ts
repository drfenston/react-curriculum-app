export default class Projet {
    // 1. Typage des propiétés d'un projet.
    id: number;
    nom: string;
    description: string;
    experienceID: number;

    // 2. Définition des valeurs par défaut des propriétés d'un projet.
    constructor(
        id: number,
        nom: string,
        description: string,
        experienceID: number
    ) {
        // 3. Initialisation des propiétés d'un projet.
        this.id = id;
        this.nom = nom;
        this.description = description;
        this.experienceID = experienceID;
    }
}