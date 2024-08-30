import Formation from "../formation";

export default class CreateFormationResponse {
    // 1. Typage des propiétés d'un pokémon.
    message: string;
    data: Formation;
    

    // 2. Définition des valeurs par défaut des propriétés d'un pokémon.
    constructor(
        message: string,
        data: Formation
    ) {
        // 3. Initialisation des propiétés d'un pokémons.
        this.message = message;
        this.data = data;
    }
}