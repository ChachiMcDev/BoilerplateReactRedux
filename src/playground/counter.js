
class Counter extends React.Component {
    //binding this to this component for functions
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);

        //setting up default state object
        this.state = {
            count: props.counter
        }
    }

        //fetching data
    componentDidMount(prevProps, prevState) {
        try {
            const count = JSON.parse(localStorage.getItem('countit'));
           // count = parseInt(count, 10);
            //getting from local storage and setting state
            if (!isNaN(count)) {
                
                this.setState(() => ({ count }))
            }
        } catch (e) {
            //do nothing
        }
    }

    componentDidUpdate(prevProps, prevState) {

        if (prevState.count !== this.state.count) {
            localStorage.setItem('countit', this.state.count);
        }
    }

    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }

    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }

    handleReset() {
        this.setState(() => {
            return {
                count: 0
            };
        });
    }


    render() {
        return (
            <div>
                <h1>Counter: {this.state.count} </h1>
                <button onClick={this.handleAddOne} className="upone">+1</button>
                <button onClick={this.handleMinusOne} className="downone">-1</button>
                <button onClick={this.handleReset} className="reset">reset</button>
                <VisibilityToggle />
            </div>
        )
    }
}

//Counter.defaultProps = {
//    count: 0
//}
//

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);

        this.state = {
            visible: false
        }
    }
    toggleVisibility() {
        this.setState((prevState) => {

            return {
                visible: !prevState.visible
            }
        })

    }

    render() {
        return (
            <div>
                <button onClick={this.toggleVisibility}>
                    {this.state.visible ? 'Hide Details' : 'Show Details'}
                </button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));


//
//let count = 0;
//const addOne = () => {count++; renderCounterApp()}
//const minusOne = () => {count--; renderCounterApp()}
//const resetEm = () => {count = 0; renderCounterApp()}
//
//
//const renderCounterApp = () => {
//    const templateThree = (
//        <div>
//            <h1>Count: {count}</h1>
//            <button onClick={addOne} id="my-id" className="button">+1</button>
//            <button onClick={minusOne} className="button">-1</button>
//            <button onClick={resetEm} className="button">RESET</button>
//        </div>
//
//    );
//
//    ReactDOM.render(templateThree, appRoot);
//}
//
//renderCounterApp()
//
//