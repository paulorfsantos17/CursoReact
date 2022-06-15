import './Game.css'

const Game = ({verifyLetter}) => {
    return (
        <div>
            Game
            <button onClick={verifyLetter}>Game Over</button>
        </div>
    )
}

export default Game