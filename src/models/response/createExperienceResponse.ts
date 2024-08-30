import Experience from "../experience";

export default class CreateExperienceResponse {
    // 1. Typage des propiétés d'un pokémon.
    message: string;
    data: Experience;
    

    // 2. Définition des valeurs par défaut des propriétés d'un pokémon.
    constructor(
        message: string,
        data: Experience
    ) {
        // 3. Initialisation des propiétés d'un pokémons.
        this.message = message;
        this.data = data;
    }
}