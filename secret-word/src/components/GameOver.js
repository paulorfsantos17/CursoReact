import './GameOver.css'

const GameOver = ({retry}) => {
    return (
        <div onClick={retry}>GameOver</div>
    )
}

export default GameOver