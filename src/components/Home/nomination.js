import React, { useState, useEffect } from 'react';  

import nominationCSS from './nomination.module.css';





const Nomination =() =>{

   
return (

    <div className={nominationCSS.form_button}>
        <h2 className={nominationCSS.blinkingAnimation}>Speaker Nomination is on</h2>
<a href=" https://forms.gle/MRHbEvsBNuED8wJ7A" 
target="_blank" 
class={nominationCSS.cmn_button}>
    
    <i class="fa fa-ticket" aria-hidden="true"></i>
    Nomination form</a>



    </div>


);


};

export default Nomination;
