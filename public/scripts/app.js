'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import { AddOption } from '../components/AddOption'


var obj = {
    name: 'vikram',
    getName: function getName() {
        return this.name;
    }
};

var getName = obj.getName;

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);

        _this.state = {
            options: props.options
        };

        return _this;
    }
    //lifecycle component
    //lifecycle only available to classes not stateless functions


    _createClass(IndecisionApp, [{
        key: 'componentDidMount',
        value: function componentDidMount(prevProps, prevState) {

            try {
                var options = JSON.parse(localStorage.getItem('OPTIONS'));

                if (options) {
                    this.setState(function () {
                        return { options: options };
                    });
                }
            } catch (e) {
                //do nothing
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            console.log('saving data');
            if (prevState.options.length !== this.state.options.length) {
                var json = JSON.stringify(this.state.options);
                localStorage.setItem('OPTIONS', json);
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log('componentWillUnmount');
        }
    }, {
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: 'handleDeleteOption',
        value: function handleDeleteOption(optionToRemove) {

            console.log('hugem', optionToRemove);
            this.setState(function (prevState) {
                return { options: prevState.options.filter(function (option) {
                        return optionToRemove !== option;
                    }) };
            });
        }
    }, {
        key: 'handlePick',
        value: function handlePick() {
            var randomNum = Math.floor(Math.random() * this.state.options.length);
            var option = this.state.options[randomNum];
            alert(option);
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {
            if (!option) {
                return 'Enter valid value to add item';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'This option already exists!';
            }
            this.setState(function (prevState) {
                return { options: prevState.options.concat(option) };
            });
            // this.setState((prevState) => {
            //     return {
            //         options: prevState.options.concat(option)
            //     }
            // })
        }
    }, {
        key: 'render',
        value: function render() {

            var subTitle = 'Put  your life in the hands of the computer yo yo!';

            return React.createElement(
                'div',
                null,
                React.createElement(Header, { subTitle: subTitle }),
                React.createElement(Action, { handlePick: this.handlePick, hasOptions: this.state.options.length > 0 }),
                React.createElement(Options, {
                    options: this.state.options,
                    handleDeleteOptions: this.handleDeleteOptions,
                    handleDeleteOption: this.handleDeleteOption

                }),
                React.createElement(AddOption, { handleAddOption: this.handleAddOption })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
    options: []

    //creating stateless functional components
};var Header = function Header(props) {

    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        props.subTitle && React.createElement(
            'h2',
            null,
            props.subTitle
        )
    );
};

//example of default props
Header.defaultProps = {
    title: 'Indecision'
};

var Action = function Action(props) {

    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            {
                onClick: props.handlePick,
                disabled: !props.hasOptions
            },
            'What should I do?'
        )
    );
};

var Options = function Options(props) {

    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handleDeleteOptions },
            'Remove All Items'
        ),
        props.options.length === 0 && React.createElement(
            'p',
            null,
            'Please add an option to get started!'
        ),
        props.options.map(function (val, index) {
            return React.createElement(Option, {
                handleDeleteOption: props.handleDeleteOption,
                key: index,
                optionText: val,
                indexKey: index });
        })
    );
};

var Option = function Option(props) {

    return React.createElement(
        'div',
        null,
        React.createElement(
            'p',
            null,
            props.optionText
        ),
        React.createElement(
            'button',
            { onClick: function onClick(e) {
                    props.handleDeleteOption(props.optionText);
                } },
            'Remove'
        )
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: 'handleAddOption',
        value: function handleAddOption(event) {
            event.preventDefault();
            var option = event.target.elements.option.value.trim();
            var error = this.props.handleAddOption(option);

            //shorthand for returning object with key name same as value variable name
            this.setState(function () {
                return { error: error };
            });

            if (!error) {
                event.target.elements.option.value = '';
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddOption },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        { className: 'button' },
                        'Add Option'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));

//class Header extends React.Component {
//    render() {
//
//        return (
//            <div>
//                <h1>{this.props.title}</h1>
//                <h2>{this.props.subTitle}</h2>
//            </div>
//        );
//    }
//}
//


//class Action extends React.Component {
//
//    render() {
//        return (<div>
//            <button
//                onClick={this.props.handlePick}
//                disabled={!this.props.hasOptions}
//                className="button">What Should I do?
//             </button>
//        </div>);
//    }
//}
//


//class Options extends React.Component {
//
//    render() {
//
//        return (<div>
//            <button onClick={this.props.handleDeleteOptions}>Remove All items</button>
//            {this.props.options.map((val, index) => {
//                return <Option key={index} optionText={val} />
//            })}
//
//        </div>)
//
//    }
//}
//

//class Option extends React.Component {
//    remove() {
//        alert('remove line item')
//    }
//    render() {
//        return (
//            <div>
//                <p>{this.props.optionText}</p>
//                <button onClick={this.remove}>Remove</button>
//            </div>
//
//
//        )
//
//    }
//}
//


//
//const User = (props)=>{
//    return(
//        <div>
//            <p>Name: {props.name}</p>
//            <p>Age: {props.age} </p>
//        </div>
//    );
//};
//
//
