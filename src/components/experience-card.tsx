import React, { FunctionComponent } from "react";
import Experience from "../models/experience";
import ProjetCard from "./projet-card";

type Props = {
  experience: Experience
};

const formatDate = (dateDebut: string, dateFin: string) => {
  const mois = ["Jan", "Fev", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sept", "Oct", "Nov", "Dec"]
  var debut = new Date(dateDebut)
  var fin = new Date(dateFin)
  if (dateFin === "" || dateFin === null) {
    return mois[debut.getMonth()] + " " + debut.getFullYear()
  }
  else {
    return mois[debut.getMonth()] + " " + debut.getFullYear() + " - " + mois[fin.getMonth()] + " " + fin.getFullYear()
  }
}

const ExperienceCard: FunctionComponent<Props> = ({ experience }) => {
  return (
    <div className="row m-1 m-md-2">
      <div className="col-lg-3"><span className="badge bg-perso mb-2">{formatDate(experience.dateDebut, experience.dateFin)}</span></div>
      <div className="col-lg-9">
        <div className="row message-item">
          <div className="h4 text-uppercase me-2 mb-0">{experience.entreprise}</div>
          <div className="h5 text-capitalize">{experience.poste}</div>
              {experience.projets.map(projet => (
                <ProjetCard key={projet.id} projet={projet} />
              ))}
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;