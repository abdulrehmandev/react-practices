import React from "react"


//Notification Page Header Component
export default function Header () {
    return (
        <header className="header">
            <h2 className="header--title">Notifications</h2>
            <span className="header--noti_count">3</span>
            <p className="header--read_all">
                <a href="#">Mark all as read</a>
            </p>
        </header>
    )
}