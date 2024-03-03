import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../Forms/Input';
import Button from '../Forms/Button';

function LoginForm() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await fetch(
      'https://dogsapi.origamid.dev/json/jwt-auth/v1/token',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      }
    );

    const data = await response.json();

    console.log(data);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Usuário"
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleInputChange}
        />
        <Input
          label="Senha"
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleInputChange}
        />
        <Button type="submit">Entrar</Button>
      </form>
      <Link to="/login/criar">Criar conta</Link>
    </section>
  );
}

export default LoginForm;
