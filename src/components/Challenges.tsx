import React from 'react';
import { Challenge } from '../types';

interface ChallengesProps {
  challenges: Challenge[];
  onJoinChallenge: (challengeId: string) => void;
}

export const Challenges: React.FC<ChallengesProps> = ({ 
  challenges, 
  onJoinChallenge 
}) => {
  return (
    <div className="challenges">
      <h2>Active Challenges</h2>
      <div className="challenges-list">
        {challenges.map((challenge) => (
          <div key={challenge.id} className="challenge-card">
            <h3>{challenge.name}</h3>
            <p>Start: {challenge.startDate.toLocaleDateString()}</p>
            <p>End: {challenge.endDate.toLocaleDateString()}</p>
            <p>Reward: {challenge.reward}</p>
            <p>Participants: {challenge.participants.length}</p>
            <button onClick={() => onJoinChallenge(challenge.id)}>
              Join Challenge
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}; 