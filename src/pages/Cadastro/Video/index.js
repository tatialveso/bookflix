import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import videoRepository from '../../../repositories/video';
import categoriesRepository from '../../../repositories/categories';

const newCategory = {
  marginTop: '20px',
  marginBottom: '20px',
};

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ title }) => title);
  const { handleChange, values } = useForm({
    title: '',
    url: '',
    category: '',
  });

  useEffect(() => {
    categoriesRepository.getAll().then((serverCategories) => {
      setCategorias(serverCategories);
    });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        const chosenCategory = categorias.find((categoria) => categoria.title === values.category);

        videoRepository.create({
          title: values.title,
          url: values.url,
          categoriaId: chosenCategory.id,
        }).then(() => {
          history.push('/');
        });
      }}
      >
        <FormField
          label="Título do vídeo"
          type="text"
          name="title"
          value={values.title}
          onChange={handleChange}
        />

        <FormField
          label="Link do vídeo"
          type="text"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          type="text"
          name="category"
          value={values.category}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <Button type="submit">
          CADASTRAR NOVO VÍDEO
        </Button>
      </form>

      <Button as={Link} className="ButtonLink" to="/cadastro/categoria" style={newCategory}>
        CADASTRAR NOVA CATEGORIA
      </Button>
    </PageDefault>
  );
}

export default CadastroVideo;
