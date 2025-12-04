import React, { FunctionComponent } from "react";
import Formation from "../models/formation";

type Props = {
  formation: Formation,
  borderColor?: string
};

const FormationCard: FunctionComponent<Props> = ({ formation, borderColor = '#009688' }) => {

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

  return (
    <div className="row m-2">
      <div className="col-12 col-lg-3"><span className="badge bg-perso">{formatDate(formation.dateDebut, formation.dateFin)}</span></div>
      <div className="col-9">
        <div className="message-item">
          <h5>{formation.etablissement}</h5>
          <p>{formation.description}</p>
        </div>
      </div>
    </div>
  );
}

export default FormationCard;