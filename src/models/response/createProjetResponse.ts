import Projet from "../projet";

export default class CreateProjetResponse {
    // 1. Typage des propiétés d'un pokémon.
    message: string;
    data: Projet;
    

    // 2. Définition des valeurs par défaut des propriétés d'un pokémon.
    constructor(
        message: string,
        data: Projet
    ) {
        // 3. Initialisation des propiétés d'un pokémons.
        this.message = message;
        this.data = data;
    }
}