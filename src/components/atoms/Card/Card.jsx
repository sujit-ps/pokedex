import React, { useState } from "react";
import "./Card.css";
function Card({ pokemonData, openModal, noDiscription = false }) {
  const { Imageurl, name, id, pokemonId } = pokemonData;

  return (
    <section
      key={Imageurl}
      className="card"
      onClick={() => openModal(pokemonData, true)}
      style={pokemonData.bg || {}}
    >
      <img className="card-image" src={Imageurl} alt={name} />
      {!noDiscription && (
        <div>
          <div>
            <span className="card-title">{name}</span>
          </div>
          <span className="card-Id">{pokemonId}</span>
        </div>
      )}
    </section>
  );
}
export default Card;
