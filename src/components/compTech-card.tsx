import React, { FunctionComponent,  } from "react";
import CompTech from "../models/competenceTechnique";
type Props = {
  competence: CompTech,
  borderColor?: string
};

const CompTechCard: FunctionComponent<Props> = ({ competence, borderColor = '#009688' }) => {

  return (
    <div className="col-12 col-md-4 mb-4 text-center">
      <span className="dot bg-primary py-2 text-white d-block mx-auto my-auto vertical-align">
      <img src={"https://www.cyrilmaquaire.com/curriculum/uploads/"+competence.libelle+".png"}  className="mx-auto d-block comp-tech-icon" alt="..." />
        </span>
      <h5>{competence.libelle}</h5>
      {competence.competence}
    </div>
  );
}

export default CompTechCard;