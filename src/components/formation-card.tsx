import React, { FunctionComponent, useState } from "react";
import Formation from "../models/formation";
import formatType from '../helpers/format-type';
import { useHistory } from "react-router-dom";
type Props = {
  formation: Formation,
  borderColor?: string
};

const FormationCard: FunctionComponent<Props> = ({ formation, borderColor = '#009688' }) => {

  const [color, setColor] = useState<string>();
  const history = useHistory();

  const showBoder = () => {
    setColor(borderColor);
  }

  const hideBoder = () => {
    setColor('#f5f5f5');
  }

  const formatDate = (dateDebut: string, dateFin: string) => {
    if(dateFin === ""){ 
      return dateDebut 
    }
    else {
      return dateDebut + " - " + dateFin
    }
  }
  return (
    <div className="row m-2">
      <div className="col-3"><span className="badge text-bg-primary">{formatDate(formation.dateDebut,formation.dateFin)}</span></div>
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