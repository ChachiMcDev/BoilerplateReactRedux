

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);

        this.state = {
            visibility: false
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

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))
//let toggleIt = true;
//
//const detailsButton = () =>{
//
//    if(toggleIt === true){
//        toggleIt = false;
//    }else{
//        toggleIt = true;
//    }
//    renderToggle()
//}
//
//
//const renderToggle = () => {
//    const template =
//        <div>
//            <h1>VISIBILITY TOGGLE</h1>
//            <div>{toggleIt === true ? <button onClick={detailsButton} className="button">Show Details</button> : <button onClick={detailsButton} className="button">Hide Details</button>}</div>
//            <p hidden={toggleIt}>Here are some sweet details to show!</p>    
//        </div>;
//
//
//    ReactDOM.render(template, appRoot);
//}
// renderToggle()

//let visibility = false;
//
//const toggleVisibility = () => {
//    visibility = !visibility;
//    render();
//}
//
//const render = ()=>{
//    const jsx = 
//    <div>
//        <h1>VISIBILITY TOGGLE</h1>
//        <button onClick={toggleVisibility}>
//            {visibility ? 'Show Details' : 'Hide Details'}
//        </button>
//        <p hidden={visibility}>Here are some detaileios to show!</p>
//    </div>
//
//    ReactDOM.render(jsx, document.getElementById('app'));
//}
//
//
//
//
//render()
//