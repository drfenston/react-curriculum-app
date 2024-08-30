import Langue from "../langue";

export default class CreateLangueResponse {
    // 1. Typage des propiétés d'un pokémon.
    message: string;
    data: Langue;
    

    // 2. Définition des valeurs par défaut des propriétés d'un pokémon.
    constructor(
        message: string,
        data: Langue
    ) {
        // 3. Initialisation des propiétés d'un pokémons.
        this.message = message;
        this.data = data;
    }
}