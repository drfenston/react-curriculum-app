import React, { FunctionComponent, useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import CV from '../models/cv';
import CVCard from '../components/cv-card';
import CVService from '../services/cv-service';
import AuthenticationService from '../services/authentication-service';

type Params = { id: string };

const CVList: FunctionComponent<RouteComponentProps<Params>> = ({ match }) => {
  const [cvList, setCVS] = useState<CV[]>([]);
  const history = useHistory();

  type Field = {
    value?: any,
    error?: string,
    isValid?: boolean
  };

  type Form = {
    poste: Field,
  }

  const [form, setForm] = useState<Form>({
    poste: { value: '' }
  });

  const [message, setMessage] = useState<string>('Création');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const fieldName: string = e.target.name;
    const fieldValue: string = e.target.value;
    const newField: Field = { [fieldName]: { value: fieldValue } };

    setForm({ ...form, ...newField });
  }

  const validateForm = () => {
    let newForm: Form = form;

    // Validator poste
    if (form.poste.value.length < 3) {
      const errorMsg: string = 'Le poste doit faire au moins 3 caractères de long.';
      const newField: Field = { value: form.poste.value, error: errorMsg, isValid: false };
      newForm = { ...newForm, ...{ poste: newField } };
    } else {
      const newField: Field = { value: form.poste.value, error: '', isValid: true };
      newForm = { ...newForm, ...{ poste: newField } };
    }

    setForm(newForm);

    return newForm.poste.isValid;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isFormValid = validateForm();
    var user = JSON.parse(AuthenticationService.user)
    if (isFormValid) {
      setMessage('Création en cours ...');
      CVService.createCv(form.poste.value, user.id).then(response => {
        if (response != null) {
          // setFormFields([...formFields, response.data])
          setCVS((prevCVList) => [...prevCVList, response.data]);
        } else {
          //  showToast()
          setMessage("Désolé, le cv n'a pas pu être créé.");
        }
      });
    }
  }

  useEffect(() => {
    var user = JSON.parse(AuthenticationService.user)
    CVService.getCVS(user.id).then(response => setCVS(response.data))
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row mt-5 justify-content-center">
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <form onSubmit={(e) => handleSubmit(e)}>
                  {message && <div className="form-group">
                    <div className="h5 text-center">
                      {message}
                    </div>
                  </div>}
                  <p className="card-text">Quel poste avez-vous occupé ?</p>
                  {/* Field poste */}
                  <div className="form-floating mb-3">
                    <input id="poste" type="text" name="poste" className="form-control form-control-sm" placeholder="Poste" value={form.poste.value} onChange={e => handleInputChange(e)} />
                    <label htmlFor="floatingInput">Poste</label>
                    {/* error */}
                    {form.poste.error &&
                      <div className="card-panel red accent-1">
                        {form.poste.error}
                      </div>}
                  </div>
                  <div className="text-center">
                    {/* Submit button */}
                    <button type="submit" className="btn btn-primary mt-5">Créer</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {cvList && cvList.length > 0 && (
          <div className="row mt-5">
            <h2>Mes CV</h2>

            {cvList.map(cv => (
              <CVCard key={cv.id} cv={cv} />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}

export default CVList;