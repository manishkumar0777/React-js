import globe from '../assets/globe.png';

export default function Header() {
    return (
        <header>
            <nav>
                <img src={globe} alt='globe' />
                <span>my Travel-Journal</span>
            </nav>
        </header>
    )
}