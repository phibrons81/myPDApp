import React from 'react';
import {
  LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = Array.from({ length: 101 }, (_, i) => {
  const weg = i * 0.1; // X-Werte (Weg) von 0 bis 10
  const kraft = i * 1000; // Y-Werte (Kraft) von 0 bis 50.000
  return { weg, kraft };
});

const ForceChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="weg" label={{ value: 'Weg (m)', position: 'insideBottomRight', offset: -5 }} />
        <YAxis label={{ value: 'Kraft (N)', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="kraft" stroke="#8884d8" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ForceChart;
