import React from 'react';
import styles from './Header.module.css';
import DogsLogo from '../Assets/dogs.svg?react';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext';

const Header = () => {
  const { data, userLogout } = React.useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={` ${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <DogsLogo />
        </Link>
        {data ? (
          <Link className={styles.login} to="/conta">
            {data.nome}
            <button onClick={userLogout}>Sair</button>
          </Link>
        ) : (
          <Link className={styles.login} to="/login">
            Entrar / Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
