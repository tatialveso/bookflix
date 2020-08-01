import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import { CategoriesList, Loader } from './style';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const initialValues = {
    title: '',
    description: '',
    color: '',
  };

  const { handleChange, values, clearForm } = useForm(initialValues);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://book-flix.herokuapp.com/categorias';
    fetch(URL).then(async (serverAnswer) => {
      const answer = await serverAnswer.json();
      setCategorias([
        ...answer,
      ]);
    });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {' '}
        {values.title}
      </h1>

      <form onSubmit={function handleSubmit(info) {
        info.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);

        clearForm();
      }}
      >

        <FormField
          label="Nome da categoria"
          type="text"
          name="title"
          value={values.title}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="text"
          name="description"
          value={values.description}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />

        <Button>
          CADASTRAR
        </Button>
      </form>

      {categorias.length === 0 && (
        <Loader />
      )}

      <CategoriesList>
        {categorias.map((categoria) => (
          <li key={`${categoria.title}`}>
            {categoria.title}
          </li>
        ))}
      </CategoriesList>
    </PageDefault>
  );
}

export default CadastroCategoria;
