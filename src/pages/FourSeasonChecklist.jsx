import React, { useState } from 'react';
import './FourSeasonChecklist.css';

const seasonalItems = {
  Spring: ['Wild Horseradish', 'Daffodil', 'Leek', 'Dandelion', 'Sunfish', 'Shad'],
  Summer: ['Spice Berry', 'Grape', 'Sweet Pea', 'Pike', 'Red Snapper'],
  Fall: ['Common Mushroom', 'Wild Plum', 'Hazelnut', 'Blackberry', 'Tiger Trout'],
  Winter: ['Winter Root', 'Crystal Fruit', 'Snow Yam', 'Crocus', 'Lingcod'],
};

export default function FourSeasonChecklist() {
  const [checked, setChecked] = useState({});

  const handleCheck = (season, item) => {
    const key = `${season}-${item}`;
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="four-season-checklist">
      <h1>🌾 Four-Season Checklist</h1>
      {Object.entries(seasonalItems).map(([season, items]) => {
        const total = items.length;
        const completed = items.filter((item) => checked[`${season}-${item}`]).length;
        const progress = Math.round((completed / total) * 100);

        return (
          <div className="season-section" key={season}>
            <h2>
              {season === 'Spring' && '🌸'}
              {season === 'Summer' && '☀️'}
              {season === 'Fall' && '🍁'}
              {season === 'Winter' && '❄️'}
              {` ${season} (${progress}% Complete)`}
            </h2>
            <ul className="item-list">
              {items.map((item) => {
                const key = `${season}-${item}`;
                return (
                  <li key={key}>
                    <label>
                      <input
                        type="checkbox"
                        checked={!!checked[key]}
                        onChange={() => handleCheck(season, item)}
                      />
                      {item}
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
