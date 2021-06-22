
const app = {
    title: 'Indecision App',
    subTitle: 'this is the subtitle',
    options: []
};

const onFormSubmit = (event) => {
    event.preventDefault();
    const option = event.target.elements.option.value;

    if (option) {
        app.options.push(option);
        event.target.elements.option.value = '';
        renderForm();
    };


}

const removeAll = () => {

    if (app.options.length > 0) {
        app.options = [];
        renderForm();
    };
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
    //  renderForm();
};

const renderForm = () => {
    const template =
        <div>
            <h1 id="testit_ID"> {app.title}</h1>
            {app.subTitle && <p>{app.subTitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
            <p>{app.options.length}</p>
            <button disabled={app.options.length <= 0} onClick={onMakeDecision}>What Should I do?</button>
            <button onClick={removeAll} className="remove">Remove All Options</button>

            <ol>
                {app.options.map((value, index) => {
                    return <li key={index}>{value}</li>
                })}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button className="button">Add Option</button>
            </form>

        </div>;
    ReactDOM.render(template, appRoot);
};


const appRoot = document.getElementById('app');

renderForm()