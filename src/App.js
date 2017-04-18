import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ContactsList from './components/ContactsList'

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>

                <Header/>
                <Content/>
                <RegisterForm/>
                <SendForm/>
                <ContactsList emailsList={this.props.emailsList} />
            </div>
        );
    }
}

// class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <Header/>
//                 <Content/>
//                 <Form/>
//             </div>
//         );
//     }
// }

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Header</h1>
            </div>
        );
    }
}

class Content extends React.Component {
    render() {
        return (
            <div>
                <h2>Content</h2>
                <p>The content text!!!</p>
            </div>
        );
    }
}

class RegisterForm extends React.Component {

    constructor() {
        super();
        this.state = {
            group: "basketball",
            email: "",
            username: "",
        };
        this._handleSelectGroupChange = this._handleSelectGroupChange.bind(this);
        console.log(this);
    }

    _handleSelectGroupChange(event) {
        this.setState({group: event.target.value});
        console.log("_handleSelectGroupChange(), group=" + JSON.stringify(this.state));
    }

    _handleCallback() {
        console.log("_handleCallback()");
    }

    _handleRegister() {
        var data = {};

        data.username = this.refs.username.value;
        data.email = this.refs.email.value;
        data.group = this.state.group;

        console.log("_handleRegister(), data=" + JSON.stringify(data));

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            console.log("this.readyState=" + this.readyState + ", this.status=" + this.status)
            if (this.readyState === 4 && this.status === 200) {
                this._handleCallback();
            }
        }
        var url = 'https://5n5wuzh96g.execute-api.us-east-1.amazonaws.com/dev/users';
        xhttp.open("POST", url, true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send(JSON.stringify(data));

    }

    render() {

        return (
            <fieldset>
                <legend>Register your self</legend>
                <form>
                    <select value={this.state.group} onChange={this._handleSelectGroupChange}>
                        <option value="basketball">Basketball</option>
                        <option value="new">New</option>
                    </select>
                    <br/>
                    User name:
                    <input type="text" ref="username" placeholder="Type your username"/>
                    <br/>
                    Email:
                    <input type="text" ref="email" placeholder="Type your email"/>
                    <br/>
                    <button type="button" onClick={this._handleRegister.bind(this)}>Register</button>
                </form>
            </fieldset>
        );
    }
}

class SendForm extends React.Component {
    render() {
        return (
            <fieldset>
                <legend>Send message to a group</legend>
                <form>
                    Group:<br/>
                    <input type="text" name="username"/> <br/>
                    Message:<br/>
                    <textarea name="message" rows="10" cols="30" defaultValue="Your message to group">
                    </textarea>
                    <br/>
                    <input type="submit" value="Send"/>
                </form>
            </fieldset>
        );
    }
}


export default App;
