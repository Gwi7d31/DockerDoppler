'use client'

import React, { useState, useEffect, useRef } from 'react'

import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'
import XYZ from 'ol/source/XYZ'
import { fromLonLat } from 'ol/proj'

export default function OpenLayersMap() {

    const ref = useRef<HTMLDivElement>(null)
    const mapRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (ref.current && !mapRef.current) {
            const olMap = new Map({
                target: ref.current,
                layers: [
                    new TileLayer({
                        source: new XYZ({
                            url: 'https://{a-c}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
                        })
                    })
                ],
                view: new View({
                    projection: 'EPSG:4326',
                    center: [-95, 35],
                    zoom: 5,
                    minZoom: 5
                }),
            });
            mapRef.current = olMap
        }
    }, [ref, mapRef]);

    return (
        <div ref={ref} className="olMap"></div>
    )
}