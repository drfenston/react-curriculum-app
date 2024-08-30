import CompTech from "../competenceTechnique";

export default class CreateCompTechResponse {
    // 1. Typage des propiétés d'un pokémon.
    message: string;
    data: CompTech;
    

    // 2. Définition des valeurs par défaut des propriétés d'un pokémon.
    constructor(
        message: string,
        data: CompTech
    ) {
        // 3. Initialisation des propiétés d'un pokémons.
        this.message = message;
        this.data = data;
    }
}