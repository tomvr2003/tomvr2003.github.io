import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../section2/section2.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{ faCode } from '@fortawesome/free-solid-svg-icons';
import{ faTerminal } from '@fortawesome/free-solid-svg-icons';

function Section2() {

    return(
        <section id='section-2'>
            <div className="header-dummy header-dummy-sec2"></div>
                <div className="skills-con-top">
                    <div className="skills-title-con">
                        <h1 className='skills-title'>
                            Mijn naam is Tom van Rossum
                            <span className='blue-color'>.</span>
                        </h1>
                    </div>
                    <div className="skills-text-con">
                        <p className='skills-text'>

                        Ik studeer software development aan het Technovium te Nijmegen.<br></br>
                        Een aantal jaren hebben ik al passie voor het vak progammeren. <br></br>
                        Dit begon klein met wat google inspecteren maar is inmiddels uitgegroeid <br></br>
                        naar het bouwen van complete simpele maar effectieve projecten. 
                        </p>
                    </div>
                </div>
                <div className="skills-con-bottom">
                    <div className="skills-box">
                        <div className="box-1">
                            <FontAwesomeIcon icon={faCode} className="code-icon"/>
                        </div>
                        <div className="box-2">
                            <h3>Frontend Developer</h3>
                        </div>
                        <div className="box-3">
                            <p>
                                Ik waardeer een eenvoudige inhoudsstructuur, 
                                strakke ontwerppatronen en doordachte interacties.
                            </p>
                        </div>
                        <div className="box-4">
                            <p>Talen die ik spreek:</p>
                        </div>
                        <div className="box-5">
                            <ul className='skills-box-unlist'>
                                <li className='skills-box-list'>HTML</li>
                                <li className='skills-box-list'>CSS</li>
                                <li className='skills-box-list'>React</li>
                            </ul>
                        </div>
                    </div>
                    <div className="skills-box">
                        <div className="box-1">
                            <FontAwesomeIcon icon={faTerminal} className="code-icon"/>
                        </div>
                        <div className="box-2">
                            <h3>Backend Developer</h3>
                        </div>
                        <div className="box-3">
                            <p>
                                Ik hou ervan om dingen vanaf nul te coderen en vind het 
                                leuk om ideeën tot leven te brengen in de browser.
                            </p>
                        </div>
                        <div className="box-4">
                            <p>Talen die ik spreek:</p>
                        </div>
                        <div className="box-5">
                            <ul className='skills-box-unlist'>
                                <li className='skills-box-list'>Java</li>
                            </ul>
                        </div>
                    </div>
                </div>
        </section>
    )

}

export default Section2;