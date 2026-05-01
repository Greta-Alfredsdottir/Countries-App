
// Her mapper vi på language og native language, 
// Dette bliver vist på cards
// med hjælp fra Jack
export function Cards({country, onselect}) {
  const Language = (country.Language ||[]) 
  .map((Language) => Language.name ?? Language.native)
  .filter(Boolean)
  .join( ',' );

  return (
    <button className="countryCards" type="button" onClick={() => onSelect(country)}>
    <div className="countryFlag" aria-hidden = "true">
      {country.emoji ?? '🏳️'}
    </div>
    <h2 className="countryName">{country.name}</h2>
    <div className="countryMeta">
      <p>{country.native || 'Ingen native navn tilgængelig'}</p>
      <p>{Languages || 'Ingen sprog tilgængelig'}</p>
    </div>
    </button>
  );
}