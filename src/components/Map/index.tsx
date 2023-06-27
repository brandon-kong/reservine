import mapboxgl from '@/util/mapbox'
import React, { useEffect, useRef, useState } from 'react'

import { Box } from '@chakra-ui/react'

mapboxgl.accessToken = "pk.eyJ1IjoiYnJhbmRvbmtvbmciLCJhIjoiY2xqZGZlMWJwMjFtNzNlczFsNnN5Ym42OSJ9.U_Q0fLrXBTnWwLMqaoFtMw"

export default function Map (props: any) {
    const map: any = useRef(null);
    const mapContainer = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        if (map.current) return;
        map.current = new mapboxgl.Map({
            container: mapContainer.current as any,
            style: process.env.NEXT_PUBLIC_MAPBOX_STYLE,
            center: [ -87.6298, 41.8781 ],
            zoom: 14,
            maxZoom: 16,
            minZoom: 6,
        })
    }, [])

    return (
        <Box
        flex='1'
        w='full'
        h='fit-content'
        maxH={'100vh'}
        zIndex={-1}
        color={'var(--text-secondary)'}
        userSelect={'none'}
        
        ref={mapContainer}
        {...props}
        />
    )
}