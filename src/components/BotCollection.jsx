import React from "react";
import BotCard from "./BotCard"

function BotCollection({bots, addToArmy, removeFromArmy,}) {

  return (
    <div className="ui four column grid">
      <div className="row">
      {bots && bots.map(bot => (
         <BotCard key={bot.id} bot={bot} addToArmy={addToArmy} removeFromArmy={removeFromArmy} />
        ))}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;