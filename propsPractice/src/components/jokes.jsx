

export default function Joke (props) {
    return (
        <div className="jokes">
            {props.setup && <p className="setup">Setup :{props.setup}</p>}
            <p className="punchline">Punchline :{props.punchline}</p>
            <hr />
        </div>
    )
}