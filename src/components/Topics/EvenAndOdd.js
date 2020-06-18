export default class EvenAndOdd extends Component{
    constructor(evenArray, oddArray, userInput = ''){
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

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

    onChange(){
        this.state.userInput = inpu
    }
    
    assignEvensAndOdds(userInput){
        let numsArr = eval(`[${userInput}]`);
        this.state.evenArray = numsArr.filter(num=>!num%2);
        this.state.oddArray = numsArr.filter(num=>num%2);
        // are lines 28-29 equivalent to this.setState({evenArray: numsArr.filter(num=>!num%2), oddArray: numsArr.filter(num=>num%2)})?
    }
}
