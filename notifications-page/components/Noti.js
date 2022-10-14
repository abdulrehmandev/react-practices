import React from "react"

// Notification body components
export default function Noti( props ) {
    return (
        <div className="noti">
            { 
                props.profileImg ? 
                <img 
                    className="noti--profile_image"
                    src={ props.profileImg }
                /> : 
                <img
                    className="noti--profile_image"
                    src="../images/user.png"
                />
            }
            <div className="noti--body">
                <div className="noti--statement">
                    <span className="noti--profile_name">
                        <a href="#">{ props.name }</a>
                    </span>
                    <span className="noti--activity">{ props.action }</span>
                    { 
                        props.where &&  
                        <span className="noti--where">
                            <a href="#">{ props.where }</a>
                        </span>
                    }
                    {
                        props.unread &&
                        <span className="noti--unread"></span>
                    }
                </div>
                <p className="noti--time">{ props.time }</p>
                {
                    props.msg &&
                    <div className="noti--msg_cont">
                        <p className="noti--msg">
                            <a href="#">{ props.msg }</a>
                        </p>
                    </div>
                }
            </div>
        </div>
    )
}