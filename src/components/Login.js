import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [loggedIn, setLoggedIn] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para manejar el inicio de sesión
    console.log('Form submitted:', formData);
    setLoggedIn(true);
  };

  if (loggedIn) {
    return (
      <div className="login-container">
        <div className="login-box">
          <h2>¡Bienvenido, {formData.username}!</h2>
          <p>Has iniciado sesión correctamente.</p>
          <button onClick={() => setLoggedIn(false)}>Cerrar sesión</button>
        </div>
      </div>
    );
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Usuario</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Ingresar</button>
        </form>
      </div>
    </div>
  );
}

export default Login; 