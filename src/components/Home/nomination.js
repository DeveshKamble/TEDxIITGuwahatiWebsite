import React, { useState, useEffect } from 'react';  

import nominationCSS from './nomination.module.css';





const Nomination =() =>{

   
return (

    <div className={nominationCSS.form_button}>
        <h2 className={nominationCSS.blinkingAnimation}>Speaker Nomination is Open</h2>
        <a href="https://bit.ly/3Obw1nY" 
            target="_blank" 
            class={nominationCSS.button}>
            <i class="fa fa-ticket" aria-hidden="true"></i>
            Nomination form
        </a>
    </div>
);


};

export default Nomination;
