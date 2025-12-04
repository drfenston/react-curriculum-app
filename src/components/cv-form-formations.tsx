import React, { FunctionComponent, useState } from "react";
import CV from "../models/cv";
import CVService from "../services/cv-service";
import DatePickerFloatingLabel from "./ui/DatePickerFloatingLabel"; // Import du composant de date

type Props = {
  cv: CV,
  isEditForm: boolean
};

const CVFormFormations: FunctionComponent<Props> = ({ cv }) => {
  const [formFields, setFormFields] = useState(cv.formations)

  const handleFormChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    let data = [...formFields];

    // Assurer que target est bien un élément HTMLInputElement
    const { name, value } = event.target as HTMLInputElement;

    // Cast explicite pour permettre l'accès dynamique aux propriétés
    (data[index] as Record<string, any>)[name] = value;
    (cv.formations[index] as Record<string, any>)[name] = value;

    // Mettre à jour l'état des champs du formulaire
    setFormFields(data);
  };

  // Méthode dédiée pour gérer les changements de date
  const handleDateChange = (name: string, date: Date | null, index: number) => {
    let data = [...formFields];

    // Cast explicite pour permettre l'accès dynamique aux propriétés
    (data[index] as Record<string, any>)[name] = date ? date.toISOString() : ""; // Format date ISO pour la sauvegarde
    (cv.formations[index] as Record<string, any>)[name] = date ? date.toISOString() : "";

    setFormFields(data);
  };

  // Fonction intermédiaire pour lier l'index à la méthode de changement de date
  const onDateChangeWithIndex = (index: number, name: string) => (date: Date | null) => {
    handleDateChange(name, date, index); // Enveloppe la fonction en lui passant le nom et l'index
  };

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

  return (
    <div className="container">
      <div className="py-3">
        <h2 className="d-inline me-4">Formations</h2> <button type="button" onClick={addFields} className="btn btn-secondary btn-sm">Ajouter une formation</button>
        <div className="row row-cols-3 mt-2">
          {formFields.map((form, index) => {
            return (
              <div className="col-12 col-lg-6" key={index}>
                <div className="card card-hover-shadow mt-4">

                  <div className="card-header border-bottom-0 text-end">
                    <button className="btn btn-outline-danger btn-sm" type="button" data-toggle="tooltip" data-placement="top" title="Delete" onClick={() => removeFields(index)}><i className="bi bi-trash"></i> Supprimer la formation</button>
                  </div>
                  <div className="card-body mt-n5">
                    <div className="row">
                      <div className='col-md-6 col-12'>
                        {/* Date de début avec DatePicker */}
                        <DatePickerFloatingLabel
                          id={`debutFormation-${index}`}
                          label="Début de la formation"
                          initialDate={form.dateDebut ? new Date(form.dateDebut) : null}
                          onDateChange={onDateChangeWithIndex(index, "dateDebut")} // Utilisation de la fonction intermédiaire
                        />
                      </div>
                      <div className='col-md-6 col-12'>

                        {/* Date de fin avec DatePicker */}
                        <DatePickerFloatingLabel
                          id={`finFormation-${index}`}
                          label="Fin de la formation"
                          initialDate={form.dateDebut ? new Date(form.dateFin) : null}
                          onDateChange={onDateChangeWithIndex(index, "dateFin")} // Utilisation de la fonction intermédiaire
                        />
                      </div>
                    </div>
                    <div className="form-floating mb-3">
                      <input id={`etablissement-${index}`} className="form-control" name='etablissement' placeholder='Etablissement' onChange={event => handleFormChange(event, index)} value={form.etablissement} />
                      <label htmlFor={`etablissement-${index}`} >Etablissement fréquenté</label>
                    </div>

                    <div className="form-floating mb-3">
                      <input id={`diplome-${index}`} className="form-control" name='description' placeholder='Diplome' onChange={event => handleFormChange(event, index)} value={form.description} />
                      <label htmlFor={`diplome-${index}`} >Diplome obtenu</label>
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

export default CVFormFormations;