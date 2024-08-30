import React, { FunctionComponent, useEffect, useState } from "react";
import CV from "../models/cv";
import CVService from "../services/cv-service";
import { showToast } from "./js/jsPerso"

type Props = {
  cv: CV,
  isEditForm: boolean
};

const CVFormFormations: FunctionComponent<Props> = ({ cv }) => {
  const [formFields, setFormFields] = useState(cv.formations)

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    let data = [...formFields];
    console.log(event.target.name + " " + event.target.value)
    data[index][event.target.name] = event.target.value;
    cv.formations[index][event.target.name] = event.target.value;
    setFormFields(data);
  }

  const submit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log(formFields)
  }

  const addFields = () => {
    CVService.createFormation(cv.id).then(response => {
      if (response != null) {
        setFormFields([...formFields, response.data])
        cv.formations.push(response.data)
      } else {
        //showToast()
      }
    });
  }

  const removeFields = (index: number) => {
    let data = [...formFields];

    CVService.deleteFormation(data[index].id).then(response => {
      if (response != null) {
        data.splice(index, 1)
        cv.formations.splice(index, 1)
        setFormFields(data)
      } else {
        // showToast()
      }
    });
  }

  const [hover, setHover] = useState(false)

  const sectionStyle = {
    background: hover ? "#e9ecef" : "white"
  };

  return (
    <div className="mt-5">
      <h2 className="d-inline me-4">Formations</h2> <button type="button" onClick={addFields} className="btn btn-primary btn-sm">Ajouter une formation</button>
      <div className="row row-cols-3 mt-2">
        {formFields.map((form, index) => {
          return (
            <div className="col-sm-4" key={index}>
              <div className="card card-hover-shadow mt-4">

                <div className="card-header border-bottom-0 text-end">
                  <button className="btn btn-outline-danger btn-sm" type="button" data-toggle="tooltip" data-placement="top" title="Delete" onClick={() => removeFields(index)}><i className="bi bi-trash"></i> Supprimer la formation</button>
                </div>
                <div className="card-body mt-n5">
                  <div className="input-group">

                    <div className="form-floating mb-3">
                      <input className="form-control" name='dateDebut' placeholder='Date de début' onChange={event => handleFormChange(event, index)} value={form.dateDebut} />
                      <label htmlFor="dateDebut">Début de la formation</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input className="form-control" name='dateFin' placeholder='Date de Fin' onChange={event => handleFormChange(event, index)} value={form.dateFin} />
                      <label htmlFor="dateFin">Fin de la formation</label>
                    </div>
                  </div>
                  <div className="form-floating mb-3">
                    <input className="form-control" name='etablissement' placeholder='Etablissement' onChange={event => handleFormChange(event, index)} value={form.etablissement} />
                    <label htmlFor="etablissement">Etablissement fréquenté</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input className="form-control" name='description' placeholder='Diplome' onChange={event => handleFormChange(event, index)} value={form.description} />
                    <label htmlFor="diplome">Diplome obtenu</label>
                  </div>
                </div>

              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default CVFormFormations;