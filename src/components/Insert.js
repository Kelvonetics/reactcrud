import React, { Component } from 'react';
import axios from 'axios';

export default class Insert extends Component
{


    constructor(props)
    {
        super(props);

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.clearState();      

    }

    clearState()
    {
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: ''
        } 
    }


    onChangeFirstName(e)
    {
        this.setState({ first_name: e.target.value });
    }

    onChangeLastName(e)
    {
        this.setState({ last_name: e.target.value });
    }

    onChangeEmail(e)
    {
        this.setState({ email: e.target.value });
    }

    onChangePassword(e)
    {
        this.setState({ password: e.target.value });
    }

    onSubmit(e)
    {
        e.preventDefault();     
        
        const obj = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password
            
        }; 

        //USING AXIOS TO PUSH TO DATABASE
        
        fetch('http://localhost:8000/api/students',
        {
            method: "POST",
            body: JSON.stringify(obj),
            headers: {
                "content-Type":"application/json"
            }
        })
        .then(alert('Record Created Successfully!'))
        
        this.clearState();
    }


    render()
    {
        return (
            <div style={{ marginTop: 10 }}>
                <h3> Add New Student </h3>

                <form onSubmit={this.onSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="form-label">First Name</label>
                                <input type="text" className="form-control" value={this.state.first_name} onChange={this.onChangeFirstName} />
                            </div>
                    
                            <div className="form-group">
                                <label className="form-label">Last Name</label>
                                <input type="text" className="form-control" value={this.state.last_name} onChange={this.onChangeLastName} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" value={this.state.email} onChange={this.onChangeEmail} />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control" value={this.state.password} onChange={this.onChangePassword} />
                            </div>
                        </div>

                        <div className="col-md-12 text-align:right">
                            <div className="form-group">
                                <input type="submit" value="Register" className="btn btn-dark btn-sm pull-right" />
                            </div>
                        </div>
                    </div>
                    
                    
                </form>
            </div>
        )
    }
}
