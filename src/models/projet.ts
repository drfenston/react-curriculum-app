export default class Projet {
    // 1. Typage des propiétés d'un pokémon.
    id: number;
    nom: string;
    description: string;
    experienceID: number;

    // 2. Définition des valeurs par défaut des propriétés d'un pokémon.
    constructor(
        id: number,
        nom: string,
        description: string,
        experienceID: number
    ) {
        // 3. Initialisation des propiétés d'un pokémons.
        this.id = id;
        this.nom = nom;
        this.description = description;
        this.experienceID = experienceID;
    }
}