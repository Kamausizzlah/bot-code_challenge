import React, {useState, useEffect} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage({botArmy, bots, addToArmy, removeFromArmy}) {
  return (
    <div>
      <YourBotArmy bots = {botArmy}/>
      <BotCollection bots = {bots} addToArmy = {()=>addToArmy} removeFromArmy={removeFromArmy}/>
    </div>
  )
}

export default BotsPage;