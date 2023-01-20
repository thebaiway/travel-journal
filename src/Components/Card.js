
export default function Card (props) {
    return (
        <div className = "card--div">
            <div className = "card--img_div">
                <img className = "card--img" src = {props.x.image} alt=""></img> 
            </div>
            <div className = "card--detail_div">
                <div className = "card--detail_sub-div-one">
                <i className="fa-solid fa-location-dot"></i><scan className = "location">{props.x.location}</scan>
                <p>{props.x.googleMapsLink}</p>
                </div>
                <div className = "card--detail_sub-div-two">
                    <h1>{props.x.title}</h1>
                    <b><p className = "date">{props.x.startDate} - {props.x.endDate}</p></b>
                    <p className = "description">{props.x.description}</p>
                </div>
            </div>
        </div>
    )
}