'use client'

import React, { useState, useEffect } from 'react'

export default function Footer() {

    const [currentGMTTime, setCurrentGMTTime] = useState<String>("")

    /**
     * 
     * @returns {String}
     */
    function getCurrentGMTTime(){
        const date = new Date()
        const year = date.getFullYear()
        const month = date.getMonth()
        //console.log(`${year}-${month}`)
        let utcTime = date.toUTCString()
        return utcTime
    }

    useEffect(() => {
        const cornerTime = setInterval(() =>{
            setCurrentGMTTime(getCurrentGMTTime())
        }, 1000)
    }, [])

    return (
        <footer id="footer" className="flex justify-between items-center p-1 border-t">
            <h5 className="text-gray-300 pipeSeparatorAfter">Dockppler</h5>
            <div className="text-sm pipeSeparatorBefore">
                <span className="text-gray-300">{currentGMTTime}</span>
            </div>
        </footer>
    )
}