import React, { FunctionComponent, useEffect, useState } from "react";
import CV from "../models/cv";
import CVService from "../services/cv-service";

type Props = {
  cv: CV,
  isEditForm: boolean
};

const CVFormLangues: FunctionComponent<Props> = ({ cv }) => {
  const [formFields, setFormFields] = useState(cv.langues)

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    let data = [...formFields];
    console.log(event.target.name + " " + event.target.value)
    data[index][event.target.name] = event.target.value;
    cv.langues[index][event.target.name] = event.target.value;
    setFormFields(data);
  }

  const submit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log(formFields)
  }

  const addFields = () => {
    CVService.createLangue(cv.id).then(response => {
      if (response != null) {
        setFormFields([...formFields, response.data])
        cv.langues.push(response.data)
      } else {
        //  showToast()
      }
    });
  }

  const removeFields = (index: number) => {
    let data = [...formFields];

    CVService.deleteLangue(data[index].id).then(response => {
      console.log("coucou1")
      if (response != null) {
        data.splice(index, 1)
        cv.langues.splice(index, 1)
        setFormFields(data)
      } else {
        //  showToast()
      }
    });
  }

  const [hover, setHover] = useState(false)

  const sectionStyle = {
    background: hover ? "#e9ecef" : "white"
  };

  return (
    <div className="mt-5">
      <h2 className="d-inline me-4">Langues</h2> <button type="button" onClick={addFields} className="btn btn-primary btn-sm">Ajouter une langue</button>

      <div className="row row-cols-3 mt-2">

        {formFields.map((form, index) => {
          return (
            <div className="col-sm-4" key={index}>
              <div className="card card-hover-shadow mt-4">

                <div className="card-header border-bottom-0 text-end">
                  <button className="btn btn-outline-danger btn-sm" type="button" data-toggle="tooltip" data-placement="top" title="Delete" onClick={() => removeFields(index)}><i className="bi bi-trash"></i> Supprimer la langue</button>
                </div>

                <div className="card-body mt-n5">
                  <div className="form-floating mb-3">
                    <input className="form-control" name='origine' placeholder='Origine' onChange={event => handleFormChange(event, index)} value={form.origine} />
                    <label htmlFor="origine">Langue parlée</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input className="form-control" name='niveau' placeholder='Niveau' onChange={event => handleFormChange(event, index)} value={form.niveau} />
                    <label htmlFor="niveau">Description</label>
                  </div>

                  <div className="col-12">
                    <label htmlFor="customRange2" className="form-label">Niveau (0-100)</label>
                    <input type="range" className="form-range" name='percent' min="0" max="100" step="10" onChange={event => handleFormChange(event, index)} value={form.percent} />
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

export default CVFormLangues;