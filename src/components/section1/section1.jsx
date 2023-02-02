import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../section1/section1.css';
import '../../index.css'
import scroll from '../00assets/scroll.gif';
import me from '../00assets/me.png';

function Section1() {

    return(
        <section id='section-1'>
            <div className="header-dummy"></div>
                <div className="sec-1-con">
                    <div className="sec-1-left">
                        <div className="sec-1-title-con">
                            <h1 className='sec-1-title'>
                                Software<br></br>Developer
                                <span className='orange'>.</span>
                            </h1>
                        </div>
                        {!scroll ? 'kaas' : 'vlees'}
                        <div className="sec-1-text-con">
                            <p className='sec-1-text'>
                                Ik bouw en design simpele maar<br></br> 
                                effectieve projecten.
                            </p>
                        </div>
                        <div className="sec-1-scrollimg">
                            <a className='scroll-effect' href='#section-2'>
                                <img src={scroll} alt='Scroll' className='sec-1-scroll'></img>
                            </a>
                        </div>  
                    </div>
                    <div className="sec-1-right">
                        <div className="sec-1-image-con">
                            <div className="sec-1-image-center">
                                <img src={me} alt='Me' className='portrait'></img>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default Section1;