import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function TechList() {
  const [techs, setTechs] = useState([]);

  const dispatch = useDispatch();
  const techs = useSelector(state => state.techs);

  function handleAddTech() {
    dispatch({ type: 'ADD_TECH', payload: { tech: newTech } });
    
    setNewTech('');
  }

  return (
    <form data-testid="tech-form" onSubmit={handleAddTech}>
      <ul data-testid="tech-list">
        {techs.map(tech => <li key={tech}>{tech}</li>)}
      </ul>

      <label htmlFor="tech">Tech</label>
      <input id="tech" value={newTech} onChange={e => setNewTech(e.target.value)} />

      <button onClick={handleAddTech}>Adicionar</button>
    </form>
  );
}