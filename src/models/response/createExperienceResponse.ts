import Experience from "../experience";

export default class CreateExperienceResponse {
    message: string;
    data: Experience;
    
    constructor(
        message: string,
        data: Experience
    ) {
        this.message = message;
        this.data = data;
    }
}