import React from 'react';
import './Rank.css';


    const Rank = ({langArray, onLangClick}) => {

        function addLang(lang) {
            let id = Math.random();
            return <h4 key={lang+id} onClick={() => onLangClick(lang)} className="lang-links">{lang}</h4>
        }

        return(
            <div className="rank">
                {langArray.map(addLang)}
            </div>
        );
    }

export default Rank;
