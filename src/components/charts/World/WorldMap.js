import React, {useEffect, useRef, useState} from 'react';
import useResizeObserver from "../../CustomHooks/useResizeObserver";
import {select} from 'd3-selection'
import {scaleLinear} from 'd3-scale'
import {max, min} from 'd3-array'
import {geoMercator, geoPath} from 'd3-geo'

function WorldMap({data, type, world}) {
    const svgRef = useRef()
    const wrapperDivRef = useRef()
    const dimensions = useResizeObserver(wrapperDivRef)
    const [sel, setSel] = useState(null)

    useEffect(() => {
        if (!dimensions) return
        const svg = select(svgRef.current)
        const colorRange = {
            confirmed: ['#ffffff', '#a7d1d6', '#7dbbc3'],
            deaths: ['#ffffff', '#c6aec1', '#c29fb7'],
            recovered: ['#ffffff', '#b9e0a2', '#88ad7d']
        }
        const midRange = {
            confirmed: 30000,
            deaths: 5000,
            recovered: 20000
        }
        console.log(world)
        const minV = min(Object.entries(data), d => d[1][0][type]);
        const maxV = max(Object.entries(data), d => d[1][0][type]);


        const getColors = (country, type) => {
            const scale = scaleLinear().domain([minV, midRange[type], maxV]).range(colorRange[type])
            return scale(data[country][0][type])
        }

        const projection = geoMercator()
            .fitSize([dimensions.width, dimensions.height], sel || world)
            .precision(100)


        const pathGen = geoPath().projection(projection)


        svg.selectAll('.country')
            .data(world.features)
            .join('path')
            .on('click', d => {
                return setSel(sel === d ? null : d)
            })
            .attr('class', 'country')
            .transition()
            .attr('fill', f =>
                (data[f.properties.name]) ? getColors(f.properties.name, type)
                    : '#ffffff'
            )
            .attr('d', f => pathGen(f))

        svg.selectAll(".label")
            .data([sel])
            .join('text')
            .attr('class', 'label')
            .text(
                f =>
                    f &&
                    f.properties.name + ': ' + ((data[f.properties.name]) ? (data[f.properties.name][0][type])
                    : 0)
            )
            .style('fill', f => colorRange[type][2])
            .attr('x', 50)
            .attr('y', 50)

    }, [data, dimensions, type, world, sel])

    return (
        <div ref={wrapperDivRef} style={{marginBottom: '2rem'}} className={'dd'}>
            <svg ref={svgRef}>
            </svg>
        </div>
    );
}

export default WorldMap;