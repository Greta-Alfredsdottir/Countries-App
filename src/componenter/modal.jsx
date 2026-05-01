import { useEffect, useState } from "react";
import { Cards } from "./cards";


export function Modal({country, onselect}) {
  const Language = (country.Language ||[]) 
  .map((Language) => Language.name ?? Language.native)
  .filter(Boolean)
  .join( ',' );

  return (
    <div className="modalKasse" role="presentation" onClick={onclose}>
      <article className="modalCard" role="dialog" aria-modal="true" aria-labelledby="country-modal-title" onClick={(event) => event.stopPropagation()}>
       <div className="modalTop">
        <div className="modalHeading">
          {/* Her kalder vi efter lande og flaget til landet */}
          <div className="modalFlag" aria-hidden = "true">{country.emoji ?? '🏳️'}</div>
          {/* Her kalder vi efter lande og navnet på landet */}
          <h2 className="modalTitle" id="countryModalTitle">{country.name}</h2>
        </div>
        <button className="modalCards" type="button" onClick={onclose} aria-label="Luk modal">Luk</button>
        </div>
        <div className="detailList">
        <div className="detailRow">
          <span className="detailLabel">Native navn </span>
          {/* || Den fjerner unknowen og null, det 2 spørgsmåltegn gør det samme */}
          <strong>{country.native || 'Ikke angivet'}</strong>
        </div>
        <div className="detailRow">
          <span className="detailLabel">Valuta</span>
          <strong>{country.currency || 'Ikke angivet'}</strong>
        </div>
        <div className="detailRow">
          <span className="detailLabel">Sprog</span>
          <strong>{Language || 'Ikke angivet'}</strong>
        </div>
        </div> 
      </article>
    </div>
  );
}