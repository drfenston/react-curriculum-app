import React, { FunctionComponent, useEffect, useState } from "react";
import CV from "../models/cv";
import CVService from "../services/cv-service";

type Props = {
  cv: CV,
  isEditForm: boolean
};

const CVFormAutres: FunctionComponent<Props> = ({ cv }) => {
  const [formFields, setFormFields] = useState(cv.autres)

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    let data = [...formFields];

    const target = event.target;
    // Cast explicite pour permettre l'accès dynamique
    (data[index] as Record<string, any>)[target.name] = target.value;
    (cv.autres[index] as Record<string, any>)[target.name] = target.value;

    setFormFields(data);
  };


  const submit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log(formFields)
  }

  const addFields = () => {
    CVService.createAutre(cv.id).then(response => {
      if (response != null) {
        setFormFields([...formFields, response.data])
        cv.autres.push(response.data)
      } else {
        //  showToast()
      }
    });
  }

  const removeFields = (index: number) => {
    let data = [...formFields];

    CVService.deleteAutre(data[index].id).then(response => {
      console.log("coucou1")
      if (response != null) {
        data.splice(index, 1)
        cv.autres.splice(index, 1)
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
    <div className="container border border-top-0 pt-3">
      <div className="p-3">
        <h2 className="d-inline me-3">Activités</h2>   <button type="button" onClick={addFields} className="btn btn-primary btn-sm">Ajouter une activité</button>

        <div className="row row-cols-3 mt-2">

          {formFields.map((form, index) => {
            return (
              <div className="col-sm-4" key={index}>
                <div className="card card-hover-shadow mt-4">
                  <div className="card-header border-bottom-0 text-end">
                    <button className="btn btn-outline-danger btn-sm" type="button" data-toggle="tooltip" data-placement="top" title="Delete" onClick={() => removeFields(index)}><i className="bi bi-trash"></i> Supprimer l'activité</button>
                  </div>
                  <div className="card-body mt-n5">

                    <div className="form-floating mb-3">
                      <input className="form-control" name='libelle' placeholder='Libelle' onChange={event => handleFormChange(event, index)} value={form.libelle} />
                      <label htmlFor="libelle">Activité</label>
                    </div>

                    <div className="form-floating mb-3">
                      <input className="form-control" name='description' placeholder='Description' onChange={event => handleFormChange(event, index)} value={form.description} />
                      <label htmlFor="description">Description</label>
                    </div>

                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default CVFormAutres;