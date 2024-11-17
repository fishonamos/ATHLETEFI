import React, { useEffect, useState } from "react";
import { ArgentTMA, SessionAccountInterface } from "@argent/tma-wallet";
import { TeamView } from './components/TeamView';
import { Challenges } from './components/Challenges';
import { Team, Challenge } from './types';
import { initTelegramApp } from './telegram/webApp';
import './styles/index.css';

const argentTMA = ArgentTMA.init({
  environment: "sepolia",
  appName: "AthleteFi Fantasy League",
  appTelegramUrl: "https://t.me/your_bot_username/app",
  sessionParams: {
    allowedMethods: [
      {
        contract: "0x036133c88c1954413150db74c26243e2af77170a4032934b275708d84ec5452f",
        selector: "increment",
      }
    ],
    validityDays: 90
  },
});

const App: React.FC = () => {
  const [account, setAccount] = useState<SessionAccountInterface | undefined>();
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [userTeam, setUserTeam] = useState<Team | undefined>();
  const [challenges, setChallenges] = useState<Challenge[]>([]);

  useEffect(() => {
    // Initialize Telegram Web App
    initTelegramApp();

    // Connect wallet
    argentTMA
      .connect()
      .then((res) => {
        if (!res) {
          setIsConnected(false);
          return;
        }

        const { account } = res;
        setAccount(account);
        setIsConnected(true);
      })
      .catch((err) => {
        console.error("Failed to connect", err);
      });
  }, []);

  const handleConnectButton = async () => {
    await argentTMA.requestConnection("custom_callback_data");
  };

  const handleJoinChallenge = async (challengeId: string) => {
    console.log(`Joining challenge ${challengeId}`);
    // TODO: Implement challenge joini
  };

  return (
    <div className="app-container">
      {!isConnected && (
        <button onClick={handleConnectButton}>Connect Wallet</button>
      )}
      
      {isConnected && (
        <>
          <header>
            <p>Account: <code>{account?.address}</code></p>
          </header>
          
          <main>
            <TeamView team={userTeam} />
            <Challenges 
              challenges={challenges} 
              onJoinChallenge={handleJoinChallenge}
            />
          </main>
        </>
      )}
    </div>
  );
};

export default App;
