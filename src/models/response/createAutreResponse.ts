import Autre from "../autre";

export default class CreateAutreResponse {
    // 1. Typage des propiétés d'un pokémon.
    message: string;
    data: Autre;
    

    // 2. Définition des valeurs par défaut des propriétés d'un pokémon.
    constructor(
        message: string,
        data: Autre
    ) {
        // 3. Initialisation des propiétés d'un pokémons.
        this.message = message;
        this.data = data;
    }
}