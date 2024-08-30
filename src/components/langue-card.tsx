import React, { FunctionComponent } from "react";
import Langue from "../models/langue";

type Props = {
  langue: Langue,
  borderColor?: string
};

const LangueCard: FunctionComponent<Props> = ({ langue}) => {

  return (
    <div className="row mb-2">
      <div className="col-4 h5">
        {langue.origine}
      </div>
      <div className="col-6 p-inline">
        <div className="progress mb-0" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
          <div className="progress-bar" style={{ width: langue.percent+'%' }} />
        </div>
        {langue.niveau}
      </div>
    </div>
  );
}

export default LangueCard;