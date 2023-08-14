import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


import { Box, Typography } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { getPokeByName } from '../../../pokeApiCalls/apiService';



const PokeStats = ( {stats} ) => {

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
                label: '',
                data: statValues,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.8)',
              },
            ],
          };
  
          setChartData(data);
        } catch (error) {
          console.error('Error fetching stats:', error);
        }
      };
  
      fetchData();
    }, [pokemonName]);
  
    ChartJS.register(
      CategoryScale,
      LinearScale,
      BarElement,
      Tooltip,
    );
  
    const options = {
      indexAxis: 'y',
    };

    console.log('Tenemos recibidas las estadisticas del pokemon?', chartData )

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