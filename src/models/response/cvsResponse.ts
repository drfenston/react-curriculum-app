import CV from "../cv";

export default class CVSResponse {
    // 1. Typage des propiétés d'un pokémon.
    message: string;
    data: Array<CV>;
    

    // 2. Définition des valeurs par défaut des propriétés d'un pokémon.
    constructor(
        message: string,
        data: Array<CV> = []
    ) {
        // 3. Initialisation des propiétés d'un pokémons.
        this.message = message;
        this.data = data;
    }
}