import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


import { Box, Typography } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { getPokeByName } from '../../../pokeApiCalls/apiService';



const PokeStats = ( {stats} ) => {

  //PRUEBA DE CÓDIGO 1 ---------------------------------------------------
    // //1 TENEMOS QUE TRAER LOS STATS + CREAR LA FUNCIÓN
    // console.log('Tenemos los stats?', stats);

    // //EXTRAEMOS EL OBJETO DE STATS DE LA PROP
    // const { stats: pokemonStats } = stats;

    // //MAPEO DE RESULTADOS
    // const statValues = pokemonStats.map((stat) => stat.base_stat);
    // const statNames = pokemonStats.map((stat) => stat.stat.name); ---------------------------------------------------

    const { stats: pokemonStats } = stats;

    const [ chartData, setChartData ] = useState(null)

    const pokemonName = useParams().slug

    //Empleo de useEffect para traer los datos de los stats de manera asíncrona.
    useEffect(() => {
      const fetchData = async () => {
        try {
          const formattedStats = await getPokeByName(pokemonName);
          console.log('Los datos son: ', formattedStats)
          const statValues = await formattedStats.stats.map(stat => stat.base_stat);
          const statNames = await formattedStats.stats.map((stat) => stat.stat.name);
  
          const data = {
            labels: statNames,
            datasets: [
              {
                label: 'Dataset 1',
                data: statValues,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
              },
            ],
          };
  
          setChartData(data);
        } catch (error) {
          console.error('Error fetching stats:', error);
        }
      };
  
      fetchData();
    }, [pokemonStats]);
  
    ChartJS.register(
      CategoryScale,
      LinearScale,
      BarElement,
    );
  
    const options = {
      indexAxis: 'y',
    };


    //2 CON LOS DATOS RECIBIDOS CREAMOS UN BAR-CHART QUE DESPLIEGUE LA DATA ESPECIFICANDO OPTIONS & DATA ---------------
    // ChartJS.register(
    //     CategoryScale,
    //     LinearScale,
    //     BarElement,
    //   );

    // const options = {
    //     indexAxis: 'y',
    // }

    // const labels = statNames;
    // const data = {
    //     labels,
    //     datasets: [
    //       {
    //         label: 'Dataset 1',
    //         data: statValues,
    //         borderColor: 'rgb(255, 99, 132)',
    //         backgroundColor: 'rgba(255, 99, 132, 0.5)',
    //       },
          
    //     ]
    //   };

  return (
    <>
      {chartData ? (
        <Bar options={options} data={chartData} />
      ) : (
        <Typography variant='body1' sx={{color:'#fdfdfd', marginTop:'2rem'}}>Loading...</Typography>
      )}
    </>
  )
}

export default PokeStats