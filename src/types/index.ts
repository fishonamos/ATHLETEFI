export interface Athlete {
  id: string;
  name: string;
  sport: string;
  position: string;
  rarity: 'Common' | 'Rare' | 'Legendary';
  stats: {
    speed: number;
    accuracy: number;
    stamina: number;
  };
  performance: number;
}

export interface Team {
  id: string;
  name: string;
  owner: string;
  athletes: Athlete[];
}

export interface Challenge {
  id: string;
  name: string;
  startDate: Date;
  endDate: Date;
  reward: string;
  participants: Team[];
} 