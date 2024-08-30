import CV from "../cv";

export default class CVResponse {
    // 1. Typage des propiétés d'un pokémon.
    message: string;
    data: CV;
    

    // 2. Définition des valeurs par défaut des propriétés d'un pokémon.
    constructor(
        message: string,
        data: CV
    ) {
        // 3. Initialisation des propiétés d'un pokémons.
        this.message = message;
        this.data = data;
    }
}