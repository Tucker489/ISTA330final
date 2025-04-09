import { Link } from 'react-router-dom';
import './SeasonPage.css';

const mockSeasonProgress = {
  Spring: 40,
  Summer: 25,
  Fall: 60,
  Winter: 10,
};

export default function SeasonOverview() {
  const seasons = ['Spring', 'Summer', 'Fall', 'Winter'];

  return (
    <div className="season-overview">
      <h1>Seasonal Progress</h1>
      <div className="season-grid">
        {seasons.map((season) => (
          <Link to={`/season/${season}`} className="season-card" key={season}>
            <h2>
              {season === 'Spring'}
              {season === 'Summer'}
              {season === 'Fall'}
              {season === 'Winter'}
              {` ${season}`}
            </h2>
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${mockSeasonProgress[season]}%` }}
              ></div>
            </div>
            <p>{mockSeasonProgress[season]}% Complete</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
