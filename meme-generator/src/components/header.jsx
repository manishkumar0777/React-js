
import memeLogo from '../assets/meme.png'
export default function Header() {
    return (
        <header>
            <img src={memeLogo} className='logo'/>
            <h2 className='web-name'>Meme Generator</h2>
        </header>
    )
}