import CompTech from "../competenceTechnique";

export default class CreateCompTechResponse {
    message: string;
    data: CompTech;
    
    constructor(
        message: string,
        data: CompTech
    ) {
        this.message = message;
        this.data = data;
    }
}