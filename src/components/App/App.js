import React, { Component } from 'react';
import logo from './static/logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {

        super(props);
        this.state = {
            emailErrorMessage: false,
            phoneErrorMessage: false,
            dobErrorMessage: false
        };
    }

    render() {
        return (

            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <form>
                    <table width="30%" align="center">
                        <tr>
                            <td align="left">
                                <label>Email:</label>
                            </td>
                            <td align="left">
                                <input id="emailId" className="emailCls" type="email" name="email" required />
                            </td>
                            <td>
                                {this.state.emailErrorMessage ? <span>

                                </span> : '' }
                            </td>
                        </tr>
                        <tr>
                            <td align="left">
                                <label>Phone:</label>
                            </td>
                            <td align="left">
                                <input id="phoneId" className="phoneCls" type="text" name="phone" required />
                            </td>
                            <td>
                                {this.state.phoneErrorMessage ? <span>

                                </span> : null}
                            </td>
                        </tr>
                        <tr>
                            <td align="left">
                                <label>Date Of Birth:</label>
                            </td>
                            <td align="left">
                                <input id="dobId" className="dobCls"  type="date" name="dob" required />
                            </td>
                            <td>
                                {this.state.dobErrorMessage ? <span>

                                </span> : null }
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" align="center">
                                <input type="submit" name="submit" value="Submit" />
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        );
    }
}


export default App;
