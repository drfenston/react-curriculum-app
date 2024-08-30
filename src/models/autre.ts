export default class Autre {
    
    id: number;
    libelle: string;
    description: string;
    cvID: number;
   
    constructor(
        id: number,
        libelle: string,
        description: string,
        cvID: number
    ) {
        this.id = id;
        this.libelle = libelle;
        this.description = description;
        this.cvID = cvID;
    }
}