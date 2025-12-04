
export default class Beacon {
    id: number;
    uuid: String;
    major: String;
    minor: String;
    regionId: String;
    rssi: String;
    distance: String;
    user: String;
    entree: String;
    created: String;

    constructor(
        id: number,
        uuid: String,
        major: String,
        minor: String,
        regionId: String,
        rssi: String,
        distance: String,
        user: String,
        entree: String,
        created: String
    ) {
        this.id = id;
        this.uuid = uuid;
        this.major = major;
        this.minor = minor;
        this.regionId = regionId;
        this.rssi = rssi;
        this.distance = distance;
        this.user = user;
        this.entree = entree;
        this.created = created;
    }
}