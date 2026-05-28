// Her samler vi alle filer sammen og sender til app.jsx
import { useMemo, useState } from "react";
import { Cards } from "../componenter/cards";
import { Modal  } from "../componenter/modal";
import { countrySearch  } from "../componenter/search";

export function Lande({countries}) {
    const [search,setSearch] = useState('');
    const [selectedCountry, setSelectedCountry] = useState(null);

    const filteredCountries = useMemo(() => {
        const normalizedSearch = search.trim().toLowerCase();
        if (!normalizedSearch){
            return countries;
        }
        return countries.filter((country) => {
            const searchIndex = [country.name, country.native, country.currency, country.emoji]
            .filter(Boolean)
            .join ('')
            .toLowerCase();
            return searchIndex.includes(normalizedSearch);
            
        });
    }, 
    [countries, search]);

    return (
        <section className="contries-searchpanel" aria-label="lande">
            <div className="toolbar">
                <countrySearch value = {search} onChange = {setSearch}/>
                <p className="countiesCount">{filteredCountries.length}Lande vist</p>
            </div>
            <div className="countriesGrid">
                {filteredCountries.map((country) => (<Cards key={country.name} country={country} onselect={setSelectedCountry}/>
            ))}
            </div>
            {selectedCountry ? (
                <Modal country={selectedCountry} onClose={() => selectedCountry(null)}/>
            ): null}
        </section>
    );
}
