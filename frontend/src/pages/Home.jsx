import { useNavigate } from 'react-router-dom';
import './Home.css';

const mockCharacters = [
  { id: 1, name: 'Farm1', progress: 60 },
  { id: 2, name: 'Farm2', progress: 20 },
  { id: 3, name: 'Farm3', progress: 90 },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Welcome to the Community Center!</h1>
      <div className="character-list">
        {mockCharacters.map((char) => (
          <div className="character-card" key={char.id}>
            <h2>{char.name}</h2>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${char.progress}%` }}></div>
            </div>
            <p>{char.progress}% Complete</p>
            <button onClick={() => navigate(`/character/${char.id}`)}>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
}
