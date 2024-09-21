import Formation from "../formation";

export default class CreateFormationResponse {
    message: string;
    data: Formation;

    constructor(
        message: string,
        data: Formation
    ) {
        this.message = message;
        this.data = data;
    }
}