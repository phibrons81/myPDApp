import React from 'react';
import { Box, Typography } from '@mui/material';
import { RadialBarChart, RadialBar, Legend, PolarAngleAxis } from 'recharts';

const data = [
  {
    name: 'Apple',
    value: 50, // Wert für das Gauge-Diagramm
    fill: '#d884c3',
  },
  {
    name: 'Pear',
    value: 60, // Wert für das Gauge-Diagramm
    fill: '#8884d8',
  },
];

const style = {
  top: '5%',
  right: 0,
  transform: 'translate(0, 0%)',
  lineHeight: '24px',
};

const GaugeChart = () => {
  return (
    <Box sx={{ p: 3, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Gauge Chart
      </Typography>
      <RadialBarChart
        width={400}
        height={400}
        cx={200}
        cy={200}
        innerRadius={100}
        outerRadius={150}
        barSize={20}
        data={data}
        startAngle={180} // Startwinkel des Gauge-Diagramms
        endAngle={0}     // Endwinkel des Gauge-Diagramms
      >
        <PolarAngleAxis
          type="number"
          domain={[0, 100]} // Bereich für das Diagramm
          angleAxisId={0}
          tick={false} // Entfernt die Ticks (Beschriftung)
        />
        <RadialBar
          minAngle={15}
          clockWise
          dataKey="value"
          cornerRadius={0}
        />
        <Legend
          iconSize={20}
          width={120}
          height={140}
          layout="vertical"
          verticalAlign="middle"
          wrapperStyle={style}
        />
      </RadialBarChart>
    </Box>
  );
};

export default GaugeChart;
