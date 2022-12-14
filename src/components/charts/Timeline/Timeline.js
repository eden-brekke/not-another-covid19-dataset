import React, {useEffect, useState} from 'react';
import RaceChart from "./TimelineChart";
import useInterval from "../../CustomHooks/useInterval";
import ChildSelection from "../BuilderComponents/ChildSelection";
import Loading from "../../Loading";

function Race({inputData, startDate, endDate, types}) {

    const [type, setType] = useState(null)
    const [currDate, setCurrDate] = useState(endDate)
    const [begin, setBegin] = useState(false)
    const [data, setData] = useState({})
    useEffect(() => {
        setType(types[0])

    }, [types])
    useEffect(() => {
        if (!inputData || Object.keys(inputData).length < 1) return

        setData(Object.entries(inputData)
            .map(d => {
                return ({
                    country: d[0],
                    value: d[1].filter(d => {
                            return d.date.getTime() === currDate.getTime()
                        }
                    )[0][type]
                })
            })
            .sort((a, b) => b.value - a.value)
            .slice(0,10)
        )

    }, [currDate, type, inputData])
    const updateType = (e) => {
        e.preventDefault()
        setType(e.target.value)
    }
    const resetGraph = (e) => {
        e.preventDefault()
        if (e.target.value === 'start') {
            setCurrDate(startDate)
            setBegin(true)
        }
        else if (e.target.value === 'pause') setBegin(!begin)
        else if (e.target.value === 'end') {
            setCurrDate(endDate)
            setBegin(false)
        }

    }

    useInterval(() => {
        if (begin && !(currDate.getTime() === endDate.getTime())) {
            setCurrDate(new Date(currDate.setDate(currDate.getDate() + 1)))
        }
    }, 1000)

    if (Object.keys(data).length < 1) return <Loading/>
    return (
        <div className='raceD'>
            <div className={'titleWrapper'}>
                <div className={'title'}>
                    <div className={'text'}>Covid19 Case Timeline</div>
                </div>
                <p className='med-text'>Here you can watch how Covid19 cases have progressed from when the pandemic started to today. <br></br>
                You can watch confirmed, deaths, or recovered. <br></br><p className='small-text'>Bear in mind recovery data was stopped at the beginning of 2022.</p></p> 
                <div className={'buttonsGrp'}>
                    <div className={'buttons'}>
                        <button onClick={resetGraph} value='start' className={'blueBtn'}>Start Timeline</button>
                        <button onClick={resetGraph} value='pause'>pause/play</button>
                        <button onClick={resetGraph} value='end' className={'redBtn'}>End of Timeline</button>
                    </div>
                    <ChildSelection types={types} btnClick={updateType} selected={type}/>

                </div>
            </div>
            <RaceChart data={data} startDate={startDate} currDate={currDate}/>
            <div className='date'>{currDate.toDateString()}</div>
        </div>
    );
}

export default Race;