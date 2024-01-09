import React from 'react';

export default function BoilerPlateButton() {


    return (
        <button className="button buttonHighContrast" onClick={ ()=>{ window.location.replace("https://github.com/Shardeum/shardeum-dapp-boilerplate"); }}>Shardeum Dapp Boilerplate Github  </button>
    );

}
