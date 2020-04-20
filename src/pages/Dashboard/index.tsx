import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logo} alt="Logo Github Explorer" />
    <Title>Explore Repositórios no GitHub</Title>

    <Form>
      <input placeholder="digite o repositorio" />
      <button type="submit">pesquisar</button>
    </Form>

    <Repositories>
      <a href="teste">
        <img
          src="https://avatars0.githubusercontent.com/u/28022906?s=460&u=5127227cc308058052620366d959e79b53fa49de&v=4"
          alt="Foto Perfil do Github"
        />
        <div>
          <strong>primeiro-projeto-react-typescript</strong>
          <p>Projeto ReactJS usando TypeScriptas</p>
        </div>
        <FiChevronRight />
      </a>

      <a href="teste">
        <img
          src="https://avatars0.githubusercontent.com/u/28022906?s=460&u=5127227cc308058052620366d959e79b53fa49de&v=4"
          alt="Foto Perfil do Github"
        />
        <div>
          <strong>primeiro-projeto-react-typescript</strong>
          <p>Projeto ReactJS usando TypeScriptas</p>
        </div>
        <FiChevronRight />
      </a>

      <a href="teste">
        <img
          src="https://avatars0.githubusercontent.com/u/28022906?s=460&u=5127227cc308058052620366d959e79b53fa49de&v=4"
          alt="Foto Perfil do Github"
        />
        <div>
          <strong>primeiro-projeto-react-typescript</strong>
          <p>Projeto ReactJS usando TypeScriptas</p>
        </div>
        <FiChevronRight />
      </a>
    </Repositories>
  </>
);

export default Dashboard;
