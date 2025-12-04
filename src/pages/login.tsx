import React, { FunctionComponent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AuthenticationService from '../services/authentication-service';

type Field = {
  value?: any,
  error?: string,
  isValid?: boolean
};

type Form = {
  username: Field,
  password: Field
}

const Login: FunctionComponent = () => {

  const history = useHistory();

  const [form, setForm] = useState<Form>({
    username: { value: '' },
    password: { value: '' },
  });

  const [message, setMessage] = useState<string>('Connexion');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const fieldName: string = e.target.name;
    const fieldValue: string = e.target.value;
    const newField: Field = { [fieldName]: { value: fieldValue } };

    setForm({ ...form, ...newField });
  }

  const validateForm = () => {
    let newForm: Form = form;

    // Validator username
    if (form.username.value.length < 3) {
      const errorMsg: string = 'Votre prénom doit faire au moins 3 caractères de long.';
      const newField: Field = { value: form.username.value, error: errorMsg, isValid: false };
      newForm = { ...newForm, ...{ username: newField } };
    } else {
      const newField: Field = { value: form.username.value, error: '', isValid: true };
      newForm = { ...newForm, ...{ username: newField } };
    }

    // Validator password
    if (form.password.value.length < 4) {
      const errorMsg: string = 'Votre mot de passe doit faire au moins 4 caractères de long.';
      const newField: Field = { value: form.password.value, error: errorMsg, isValid: false };
      newForm = { ...newForm, ...{ password: newField } };
    } else {
      const newField: Field = { value: form.password.value, error: '', isValid: true };
      newForm = { ...newForm, ...{ password: newField } };
    }

    setForm(newForm);

    return newForm.username.isValid && newForm.password.isValid;
  }

  const createAccount = () => {
    history.push(`/create`)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isFormValid = validateForm();
    if (isFormValid) {
      setMessage('👉 Tentative de connexion en cours ...');
      AuthenticationService.login(form.username.value, form.password.value).then(isAuthenticated => {
        if (typeof isAuthenticated.token != 'string' || isAuthenticated.token.length === 0) {
          setMessage('🔐 Identifiant ou mot de passe incorrect.');
          return;
        } else {
          localStorage.setItem('token', isAuthenticated.token)
          localStorage.setItem('user', JSON.stringify(isAuthenticated.data))
          AuthenticationService.token = isAuthenticated.token
          AuthenticationService.user = JSON.stringify(isAuthenticated.data)
          history.push('/cv/all/');
        }
      });
    }
  }

  return (
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="row p-3 pt-5 mx-auto" style={{ maxWidth: '500px', height: 'auto' }}>
          <div className="card bg-body-tertiary">
            <div className="card-body">
              <div className="card-content">
                {/* Form message */}
                {message && <div className="form-group">
                  <div className="h5 text-center">
                    {message}
                  </div>
                </div>}
                {/* Field username */}
                <div className="form-floating mb-3">
                  <input id="username" type="text" name="username" className="form-control form-control-sm" placeholder="Identifiant" value={form.username.value} onChange={e => handleInputChange(e)}></input>
                  <label htmlFor="username">Identifiant</label>
                  {/* error */}
                  {form.username.error &&
                    <div className="card-panel red accent-1">
                      {form.username.error}
                    </div>}
                </div>
                {/* Field password */}
                <div className="form-floating mb-3">
                  <input id="password" type="password" name="password" className="form-control form-control-sm" placeholder="Password" value={form.password.value} onChange={e => handleInputChange(e)}></input>
                  <label htmlFor="password">Mot de passe</label>
                  {/* error */}
                  {form.password.error &&
                    <div className="card-panel red accent-1">
                      {form.password.error}
                    </div>}
                </div>
              </div>
              <div className="text-center">
                {/* Submit button */}
                <button type="submit" className="btn btn-light mt-3">Se connecter</button>
              </div>
              <div className='text-center mt-3'>
                <button onClick={() => createAccount()} className="card-link" style={{ background: 'none', border: 'none', padding: 0 }}>Créer un compte</button>
              </div>
            </div>
          </div>
        </div>
      </form>
  );
};

export default Login;