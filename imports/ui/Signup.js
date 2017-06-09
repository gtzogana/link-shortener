import React from 'react';
import {Link} from 'react-router-dom';

import {Accounts} from 'meteor/accounts-base';

export default class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: ''
        };
    }
    
    onSubmit(e) {
        e.preventDefault();

        let email = this.refs.email.value.trim();
        let password = this.refs.password.value.trim();

        if (password.length < 9) {
            return this.setState({error: 'Password >8 chars'});
        }

        Accounts.createUser({email, password}, (err) => {
            if (err) {
                this.setState({error: err.reason});
            } else {
                this.setState({error: ''});
            }
        })
    }

    render() {
        return (
            <div className="boxed-view">
                <div className="boxed-view__box">
                    <h1>create acc</h1>

                    {this.state.error ? <p>{this.state.error}</p> : undefined}

                    <form className="boxed-view__form" onSubmit={this.onSubmit.bind(this)} noValidate>
                        <input type="email" ref="email" name="email" placeholder="Email"/>
                        <input type="password" ref="password" name="password" placeholder="Password"/>
                        <button className="button --link">Create account</button>
                    </form>

                    <Link to="/">Already have an account?</Link>
                </div>   
            </div>   
        );
    }
}
