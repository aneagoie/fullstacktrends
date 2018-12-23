import React from 'react';
import './Rank.css';


const Rank = ({ langArray, onLangClick, checkbox }) => {

    function addLang(lang) {
        let id = Math.random();
        return (
            <div  key={lang + id} className="pretty p-default p-smooth p-bigger">
                <input type="checkbox" defaultChecked={(lang === langArray[0])} onChange={() => onLangClick(lang)} />
                <div className="state p-warning">
                    <label>{lang}</label>
                </div>

            </div>
        )
    }

    return (
        <div className="pb-5">
            {langArray.map(addLang)}
        </div>
    );
}

export default Rank;
