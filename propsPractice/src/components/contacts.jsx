
import Person from '../assets/person.webp'
import Phone from '../assets/phone-call.png'
import Mail from '../assets/email.png'


//export default function Contacts (props) {  - this can be used or it 
// can be destructured 
export default function Contacts ({img, name, phoneNo, email}) {

    return (
        <article className="contact-card">
            <img
                src={img}
                alt="Photo of Mr. Whiskerson"
            />
            <h3>{name}</h3>
            <div className="info-group">
                <img
                    src={Phone}
                    alt="phone icon"
                />
                <p>{phoneNo}</p>
            </div>
            <div className="info-group">
                <img
                    src={Mail}
                    alt="mail icon"
                />
                <p>{email}</p>
            </div>
        </article>
    )
}