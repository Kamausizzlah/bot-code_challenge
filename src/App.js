import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import BotsPage from "./components/BotsPage";
import BotSpecs from "./components/BotSpecs";

function App() {
  const  [bots, setBots] = useState([]);
  const [botArmy, setBotArmy] = useState([]);
  const addToArmy = (bot) => {
    if (!botArmy.some((armyBot) => armyBot.id === bot.id)) {
      setBotArmy([...botArmy, bot]);
    }
  };

  const removeFromArmy = (botId) => {
    const updatedBotArmy = botArmy.filter((bot) => bot.id !== botId);
    setBotArmy(updatedBotArmy);
  };

  useEffect(() => {
    fetch("https://json-server-bots-vgiw.onrender.com/bots")
    .then(response => response.json())
    .then(data => setBots(data));
  },[botArmy]);

  return (
   
      <Routes>
        <Route path="/bot-code_challenge" element={<BotsPage bots = {bots} botArmy={botArmy} addToArmy = {addToArmy} removeFromArmy={removeFromArmy}/>} />
        <Route path="/bot-code_challenge/bot/:id" element={<BotSpecs addToArmy = {addToArmy} />} />
      </Routes>
  
  );
}

export default App;