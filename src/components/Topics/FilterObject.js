export default class FilterObject extends Component{
    constructor(){
        super();
        this.state = {
            dispensaries: [
                {
                    name: 'Holistic Center',
                    location: 'North Phoenix',
                    price: 'Budget',
                    yearsOpen: 3
                    
                },
                {
                    name: 'Debbies',
                    location: 'North-West Valley',
                    price: 'High',
                    yearsOpen: 5
                },
                {
                    name: 'Med-Mens',
                    location: 'Scottsdale',
                    price: 'Very High',
                    yearsOpen: 7
                },
                {
                    name: 'Good Dispensary',
                    location: 'Mesa',
                    price: 'Low',
                    yearsOpen: 4
                }
            ],
            userInput: '',
            filteredDispensaries: []
        }
        
    }
    handleChange(val){
        this.setState({userInput: val});
    }
    filterDispensaries(prop){
        let dispensaries = this.state.dispensaries;
        let filteredDispensaries = [];
        filteredDispensaries = dispensaries.filter(disp=>(disp.location === prop || disp.price === prop || disp.name === prop || disp.yearsOpen === prop ));
        this.setState({filteredDispensaries: filteredDispensaries})
    }
    render() {
        return (
          <div className="puzzleBox filterObjectPB">
            <h4> Filter Object </h4>
            <span className="puzzleText"> Original: { JSON.stringify(this.state.dispensaries, null, 10) } </span>
            <input className="inputLine" onChange={ e => this.handleChange(e.target.value) }/>
            <button className="confirmationButton" onClick={  ()=> this.filterEmployees(this.state.userInput)}> Filter </button>
            <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredEmployees, null, 10) } </span>
          </div>
        )
    }
}

export default FilterObject