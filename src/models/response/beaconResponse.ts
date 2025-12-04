import Beacon from "../beacon";

export default class BeaconResponse {
    message: string;
    data: Array<Beacon> = [];
    
    constructor(
        message: string,
        data: Array<Beacon> = []
    ) {
        this.message = message;
        this.data = data;
    }    
}