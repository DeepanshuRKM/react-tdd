import React, { Component } from 'react';
import './App.css';

class App extends Component {

    constructor(props) {

        super(props);
        this.state = {
            emailErrorMessage: false,
            phoneErrorMessage: false,
            dobErrorMessage: false,
            emailVal: '',
            phoneVal: '',
            dobVal: ''
        };
    }

    chkEmailFormat(emailVal) {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        if(reg.test(emailVal) === false){
            this.setState({
                emailErrorMessage: true
            })

        } else {
            this.setState({
                emailErrorMessage: false
            })
        }
    }

    chkFutureDate(dobVal){
        let current_date = new Date();
        dobVal = new Date(dobVal);
        if(dobVal > current_date){
            this.setState({
                dobErrorMessage: true
            })
        } else {
            this.setState({
                dobErrorMessage: false
            })
        }
    }

    handleChangeEmail = (e) => {
        console.log(e.target.value);
        this.chkEmailFormat(e.target.value);
        this.setState({emailVal: e.target.value});
    }


    handleChangePhone = (e) => {
        console.log(e.target.value);
        this.setState({phoneVal: e.target.value});
    }


    handleChangeDob = (e) => {
        console.log(e.target.value);
        this.chkFutureDate(e.target.value);
        this.setState({dobVal: e.target.value});
    }

    render() {
        return (

            <div className="App">
                <header className="App-header">

                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <form>
                    <table width="30%" align="center">
                        <tbody>
                        <tr>
                            <td align="left">
                                <label>Email:</label>
                            </td>
                            <td align="left">
                                <input id="emailId" value={this.state.emailVal} onChange={this.handleChangeEmail} className="emailCls" type="email" name="email" required />
                            </td>
                            <td >
                                {this.state.emailErrorMessage ? <span id="emailErrorId">
                                    Please enter valid email
                                </span> : '' }
                            </td>
                        </tr>
                        <tr>
                            <td align="left">
                                <label>Phone:</label>
                            </td>
                            <td align="left">
                                <input id="phoneId" value={this.state.phoneVal} onChange={this.handleChangePhone} className="phoneCls" type="text" name="phone" pattern="[789][0-9]{9}" required />
                            </td>
                            <td>
                                {this.state.phoneErrorMessage ? <span id="phoneErrorId">

                                </span> : null}
                            </td>
                        </tr>
                        <tr>
                            <td align="left">
                                <label>Date Of Birth:</label>
                            </td>
                            <td align="left">
                                <input id="dobId" value={this.state.dobVal} onChange={this.handleChangeDob}  className="dobCls"  type="date" name="dob" required />
                            </td>
                            <td>
                                {this.state.dobErrorMessage ? <span id="dobErrorId">
                                    Please enter valid date.
                                </span> : null }
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" align="center">
                                <input id="submitId" type="submit" name="submit" value="Submit" />
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        );
    }
}


export default App;
