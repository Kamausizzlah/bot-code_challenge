import React, { useState, useEffect } from "react";

function YourBotArmy({ bots, removeFromArmy }) {

  const [botArmy, setBotArmy] = useState(bots);
  
  useEffect(() => {
    setBotArmy(bots);
  }, [bots]);

  const releaseBot = (botId) => {
  const updatedBotArmy = botArmy.filter((bot) => bot.id !== botId);
    setBotArmy(updatedBotArmy);
  };

  console.log("Rendering YourBotArmy:", botArmy);

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          <h2>Your Bot Army</h2>
          {botArmy && botArmy.map((bot) => (
            <div className="column" key={bot.id} onClick={() => releaseBot(bot.id)}>
              <img
                alt="oh no!"
                className="ui small circular image bordered"
                src={bot.avatar_url}
              />
              <div>
                <strong>Name:</strong> {bot.name}
              </div>
              <div>
                <strong>Class:</strong> {bot.bot_class}
              </div>
              <div>
                <strong>Health:</strong> {bot.health}
              </div>
              <div>
                <strong>Damage:</strong> {bot.damage}
              </div>
              <div>
                <strong>Armor:</strong> {bot.armor}
              </div>
              <div>
                <strong>Catchphrase:</strong> {bot.catchphrase}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;