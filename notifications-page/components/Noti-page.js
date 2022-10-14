import React from "react"
import Noti from "../components/Noti"
import data from "../data"

// All Notifications are Combined here into one Components
// all the props are assigned from data.js file for dynamic behaviour
export default function NotiPage () {
    const notifs = data.map( noti => {
        return ( 
            <Noti
                key={ noti.key }
                { ...noti }
            /> )
        } )
    
    return (
        <div>
            { notifs }
        </div>
    )
}