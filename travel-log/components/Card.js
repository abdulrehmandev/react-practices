import React from "react"

export default function Card (props) {
    return (
        <section className="card">
            <div className="card--image-cont">
                <img className="card--image" src={props.imageUrl} />
            </div>
            <div className="card--info">
                <div className="card--info-location-cont">
                    <span className="card--info-location-icon material-symbols-rounded">location_on</span>
                    <span className="card--info-location-country">
                        {props.location}
                    </span>
                    <a className="card--info-location-link" href={props.googleMapsUrl}>
                        View on Google Maps
                    </a>
                </div>
                <h1 className="card--info-name">
                    {props.title}
                </h1>
                <p className="card--info-date">
                    {props.startDate} - {props.endDate}
                </p>
                <p className="card--info-desc">
                    {props.description}
                </p>
            </div>
        </section>
    )
}

// 