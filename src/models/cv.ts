import CompetenceTechnique from "./competenceTechnique";
import Experience from "./experience";
import Formation from "./formation";
import Langue from "./langue";
import Autre from "./autre";

export default class CV {
    id: number;
    profileImage: string;
    poste: string;
    description: string;
    nom: string;
    prenom: string;
    adresse1: string;
    adresse2: string;
    city: string;
    zipCode: string;
    telephone: string;
    apropos: string;
    mail: string;
    reseaux: string;
    website: string;
    experiences:Array<Experience>;
    formations:Array<Formation>;
    langues:Array<Langue>;
    competenceTechniques:Array<CompetenceTechnique>;
    autres: Array<Autre>;

    constructor(
        id: number,
        profileImage: string,
        poste: string,
        description: string,
        nom: string,
        prenom: string,
        adresse1: string,
        adresse2: string,
        city: string,
        zipCode: string,
        telephone: string,
        apropos: string,
        mail: string,
        reseaux: string,
        website: string,
        experiences: Array<Experience> = [],
        formations: Array<Formation> = [],
        langues: Array<Langue> = [],
        competenceTechniques: Array<CompetenceTechnique> = [],
        autres: Array<Autre> = []
    ) {
        this.id = id;
        this.profileImage = profileImage;
        this.poste = poste;
        this.description = description;
        this.nom = nom;
        this.prenom = prenom;
        this.adresse1 = adresse1;
        this.adresse2 = adresse2;
        this.city = city;
        this.zipCode = zipCode;
        this.telephone = telephone;
        this.apropos = apropos;
        this.mail = mail;
        this.reseaux = reseaux;
        this.website= website;
        this.experiences = experiences;
        this.formations = formations;
        this.langues = langues;
        this.competenceTechniques = competenceTechniques;
        this.autres = autres;
    }
}