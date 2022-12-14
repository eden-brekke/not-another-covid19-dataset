import React, {useEffect, useState} from 'react';
import WorldMap from "./WorldMap";
import land from './world.json'
import ChildSelection from "../BuilderComponents/ChildSelection";
import Loading from "../../Loading";

function World({inputData, types}) {

    const [data, setData] = useState({})
    const [type, setType] = useState(null)
    useEffect(() => {
        setData(inputData)
        setType(types[0])
        console.log(types)
        console.log(inputData)
        console.log(land)
    }, [inputData, types])
    const updateType = (e) => {
        e.preventDefault()
        setType(e.target.value)
    }
    if (Object.keys(data).length < 1) return <Loading/>
    return (
        <div className='worldD'>
            <div className={'titleWrapper'}>
                <div className={'title'}>
                    <div className={'text'}>Global Visualization</div>
                </div>
                <p>Chart Under Construction</p>
                <p className='small-text'>For now Do not click any country or it will crash the website</p>
                <p className='med-text'>Intention: To be able to click a country and zoom in to see the cases within the country</p>
                <div className={'buttonsGrp'}>
                    <ChildSelection types={types} btnClick={updateType} selected={type}/>
                </div>
            </div>
            <WorldMap data={data} world={land} type={type}/>
        </div>
    );
}

export default World;