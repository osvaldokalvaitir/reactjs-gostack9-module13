import React, { useState } from 'react';

export default function TechList() {
  const [techs, setTechs] = useState([]);

  function handleAddTech() {
    setTechs([...techs, 'Node.js']);
  }

  return (
    <div>
      <ul data-testid="tech-list">
        {techs.map(tech => <li key={tech}>{tech}</li>)}
      </ul>
      <button onClick={handleAddTech}>Adicionar</button>
    </div>
  );
}