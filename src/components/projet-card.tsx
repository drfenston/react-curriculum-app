import React, { FunctionComponent } from "react";
import Projet from "../models/projet";
type Props = {
  projet: Projet,
  borderColor?: string
};

const ProjetCard: FunctionComponent<Props> = ({ projet, borderColor = '#009688' }) => {

  return (
    <div>
      <h5>Projet {projet.nom}</h5>
          <p>{projet.description}
          </p>
    </div>
  );
}

export default ProjetCard;