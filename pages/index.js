import React, {useEffect, useState, useContext} from 'react';
import Head from 'next/head';
import styled from '@emotion/styled';
import Layout from '../components/layouts/Layout';
import DetallesProducto from '../components/layouts/detallesProducto';
import useProductos from '../hooks/useProductos';


const Heading = styled.h1`
  color: red;
`;

const Home = () => {

  const { productos } = useProductos('creado');

  return (
    <div>
      <Layout>
        <div className="listado-productos">
          <div className="contenedor">
            <ul className="bg-white">
              {productos.map(producto => (
                  <DetallesProducto 
                      key={producto.id}
                      producto={producto}
                  />
              ))}
            </ul>
          </div>
        </div>
      </Layout>
    </div>
  )
}



export default Home
