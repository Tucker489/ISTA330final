import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './CharacterPage.css';

const mockBundles = [
  {
    name: 'Crafts Room',
    tasks: ['Spring Foraging', 'Summer Foraging', 'Fall Foraging', 'Winter Foraging']
  },
  {
    name: 'Pantry',
    tasks: ['Spring Crops', 'Summer Crops', 'Fall Crops', 'Animal Bundle']
  },
  {
    name: 'Fish Tank',
    tasks: ['River Fish', 'Ocean Fish', 'Night Fishing', 'Lake Fish']
  }
];

export default function CharacterPage() {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const [checked, setChecked] = useState({});

  const handleCheck = (bundleName, taskName) => {
    const key = `${bundleName}-${taskName}`;
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const totalTasks = mockBundles.reduce((sum, b) => sum + b.tasks.length, 0);
  const completedTasks = Object.values(checked).filter(Boolean).length;
  const progress = Math.round((completedTasks / totalTasks) * 100);

  return (
    <div className="character-page">
      <h1>🧺 Character: {id}</h1>
      <p>{progress}% Completed</p>

      <div className="bundles">
        {mockBundles.map((bundle) => (
          <div className="bundle" key={bundle.name}>
            <h2>{bundle.name}</h2>
            <ul>
              {bundle.tasks.map((task) => {
                const key = `${bundle.name}-${task}`;
                return (
                  <li key={key}>
                    <label>
                      <input
                        type="checkbox"
                        checked={!!checked[key]}
                        onChange={() => handleCheck(bundle.name, task)}
                      />
                      {task}
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      <button onClick={() => navigate('/home')}>← Back to Home</button>
    </div>
  );
}
