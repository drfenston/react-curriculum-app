import React, { FunctionComponent, useState } from "react";
import Projet from "../models/projet";
import { useHistory } from "react-router-dom";
type Props = {
  projet: Projet,
  borderColor?: string
};

const ProjetCard: FunctionComponent<Props> = ({ projet, borderColor = '#009688' }) => {

  const [color, setColor] = useState<string>();
  const history = useHistory();

  const showBoder = () => {
    setColor(borderColor);
  }

  const hideBoder = () => {
    setColor('#f5f5f5');
  }

  return (
    <div>
      <h5>Projet {projet.nom}</h5>
          <p>{projet.description}
          </p>
    </div>
  );
}

export default ProjetCard;