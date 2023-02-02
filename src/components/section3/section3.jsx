import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../section3/section3.css';

function Section3() {

    return(
        <section id='section-3'>
            <div className="contact-title-container">
                <div className="contact-title-placer">
                    <h1 className='contact-title'>
                        Samen zijn we sterker<span className='blue-dot'>.</span>
                    <br></br>
                    <span className='blue-dot'>Samenwerken?</span>
                    </h1>
                </div>
                <div className="contact-descrip-placer">
                    <p className="contact-descrip">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                        has been the<br></br>industry's standard dummy text ever since 
                        the 1500s, when an unknown
                    </p>
                </div>
            </div>
            <div className="over-ons-contact-container over-ons-contact-form">
                <div className="over-ons-form-container">
                    <div className="over-ons-form-form">
                    <form className="form-over-ons">
                        <input type="text" id="naam" name="naam" placeholder="Naam" required /><br />
                        <label htmlFor="email" /><br />
                        <input type="email" id="email" name="email" placeholder="E-Mail" required /><br />
                        <label htmlFor="tnummer" /><br />
                        <input type="text" id="tnummer" name="tnummer" placeholder="Telefoonnummer" required /><br />
                        <label htmlFor="bnaam" /><br />
                        <input type="text" id="bnaam" name="bnaam" placeholder="Bedrijfsnaam (optioneel)" /><br />
                        <label htmlFor="bericht" /><br />
                        <textarea placeholder="Bericht" /><br />
                        <button className="button-contact" type="submit"><a href="#" className="submit"><span className="button-span">Ga verder</span><i /></a></button>
                    </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section3;