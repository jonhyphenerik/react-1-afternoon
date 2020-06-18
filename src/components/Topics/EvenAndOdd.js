export default class EvenAndOdd extends Component{
    render (){
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" onChange={ (e) =>this.handleChange(e.target.value) }/>
                <button className="confirmationButton">Split</button>
                <span className="resultsBox">JSON.stringify(this.state.evenArray)</span>
                <span className="resultsBox">JSON.stringify(this.state.oddArray)</span>
            </div>
        )
    }
    constructor (evenArray = [], oddArray = [], userInput = ''){
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }
}
