import React from 'react';
import {ReactComponent as Confirmed} from "../SVG/virus.svg";
import {ReactComponent as Fight} from "../SVG/fight.svg";
import {ReactComponent as Recovered} from "../SVG/medical.svg";
import {ReactComponent as Death} from "../SVG/death.svg";
import CountUp from 'react-countup';

export default function Info({count}) {
    return (
        <div className="info">
            <div className='c out'>
                <Confirmed/>
                <p><CountUp end={count.confirmed} separator=","/></p>
                <p>Tested Positive</p>
                <div className='c box'>

                </div>
            </div
            >
            <div className='r out'><Recovered/> <p>


                <CountUp end={count.recovered}
                        separator=","/></p> 
                        <p> Recovered<br></br>
                        <p className='small-text'> A note that Recovered Data was ceased at the start of year 2022</p></p>
                
                <div className='r box'>

                </div>
            </div>

            <div className='d out'><Death/> <p><CountUp end={count.deaths} separator=","/></p> <p> Deaths</p>
                <div className='d box'>

                </div>
            </div>

            <div className='c out'><Fight/><p><CountUp end={count.confirmed - count.recovered - count.deaths} separator=","/></p>
                <p>Fighting</p>
                <div className='box f'>
                    <div className='box r'>
                    </div>
                    <div className='box c'>
                    </div>
                    <div className='box d'>
                    </div>
                </div>
            </div>
        </div>
    );
};