import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import categoriesRepository from '../../repositories/categories';

const Loader = styled.div`
  @keyframes spinner {
    to {transform: rotate(360deg);}
  } 
  &:before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: 40%;
    left: 45%;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 2px solid var(--primary);
    border-top-color: #000;
    animation: spinner .6s linear infinite;
  }
`;

function Home() {
  const [initialData, setInitialData] = useState([]);
  console.log(initialData);

  useEffect(() => {
    categoriesRepository.getAllWithVideos()
      .then((categoriesWithVideos) => {
        console.log(categoriesWithVideos[0].videos[0]);
        setInitialData(categoriesWithVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>

      {initialData.length === 0 && (<Loader />)}

      {initialData.map((categoria, index) => {
        if (index === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={initialData[0].videos[0].title}
                url={initialData[0].videos[0].url}
              />
              <Carousel
                ignoreFirstVideo
                category={initialData[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}

    </PageDefault>
  );
}

export default Home;
