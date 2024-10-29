import React from 'react';
import { Team, Athlete } from '../types';

interface TeamViewProps {
  team?: Team;
  onAthleteSelect?: (athlete: Athlete) => void;
}

export const TeamView: React.FC<TeamViewProps> = ({ team, onAthleteSelect }) => {
  if (!team) {
    return <div>No team available</div>;
  }

  return (
    <div className="team-view">
      <h2>{team.name}</h2>
      <div className="athletes-grid">
        {team.athletes.map((athlete) => (
          <div 
            key={athlete.id} 
            className="athlete-card"
            onClick={() => onAthleteSelect?.(athlete)}
          >
            <h3>{athlete.name}</h3>
            <p>Position: {athlete.position}</p>
            <p>Rarity: {athlete.rarity}</p>
            <div className="stats">
              <div>Speed: {athlete.stats.speed}</div>
              <div>Accuracy: {athlete.stats.accuracy}</div>
              <div>Stamina: {athlete.stats.stamina}</div>
            </div>
            <div className="performance">
              Performance: {athlete.performance}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 