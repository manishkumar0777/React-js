
import PinLogo from '../assets/pin.png';

export default function Entry(props) {
    console.log(props);
    return (
        <articel className='container'>
            <div className='main-image-container'>
                <img src={props.entry.img.src} className='travel-img' alt={props.entry.img.alt}></img>
            </div>

            <div className='detail-container'>
                <div className='location-container'>
                    <img src={PinLogo} className='pin-img' alt='pin'></img>
                    <span className='country-name'>{props.entry.country}</span>
                    <a href={props.entry.googleMapsLink} className='google-maps'>View on Google Maps</a>
                </div>
                <h2 className='place-name'>{props.entry.title}</h2>
                <p className='date'>{props.entry.dates}</p>
                <p className='detail'>{props.entry.text}</p>
            </div>
        </articel>
    )
}