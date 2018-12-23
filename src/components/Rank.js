import React from 'react';
import './Rank.css';


const Rank = ({ langArray, onLangClick, checkbox }) => {

    const isChecked = (lang) => {
        console.log(lang, checkbox)
        if (lang === checkbox) return true
        else return false
    }

    function addLang(lang) {
        let id = Math.random();
        return (
            <div class="pretty p-default p-smooth p-bigger">
                <input type="checkbox" key={lang + id} defaultChecked={isChecked(lang)} onChange={() => onLangClick(lang)} />
                <div class="state p-warning">
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
