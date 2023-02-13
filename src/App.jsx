import React, { useState } from 'react';
import StarRating from './Components/StarRating';
import Headers from './Components/Headers';
import colorData from './utils/color-data.json';
import ColorList from './Components/ColorList';

export default function App() {
  const [colors, setColors] = useState(colorData);
  
  return (
    <ColorList 
    colors={colors}
    onRemoveColor={(id) => {
      const newColors = colors.filter((color) => color.id !== id);
      setColors(newColors)
    }}
    onRateColor={(id, rating) => {
      const newColors = colors.map(color => (
        color.id === id ? { ...color, rating } : color
      ));
      setColors(newColors);
    }} />
  )
}