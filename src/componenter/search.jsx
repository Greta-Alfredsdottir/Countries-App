export function countrySearch({value, onchange }){
    return (
        <input className="countrySearch" 
        type="search"
        placeholder="Søg efter et land!"
        value={value}
        onChange={(event) => onchange(event.target.value)}
        aria-label="Søg efter land"
        />
    )
}

