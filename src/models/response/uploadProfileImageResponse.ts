import Formation from "../formation";

export default class UploadProfileImageResponse {
    // 1. Typage des propiétés d'un pokémon.
    message: string;
    data: Example;
    

    // 2. Définition des valeurs par défaut des propriétés d'un pokémon.
    constructor(
        message: string,
        data: Example
    ) {
        // 3. Initialisation des propiétés d'un pokémons.
        this.message = message;
        this.data = data;
    }

    
}

class Example {
    constructor (
        public fieldname: string,
        public originalname: string,
        public encoding: string,
        public mimetype: string,
        public destination: string,
        public filename: string,
        public path: string,
        public size: number
        )
    {

    }
}