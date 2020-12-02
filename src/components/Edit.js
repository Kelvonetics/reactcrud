import React, { Component } from 'react'
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

export default class Edit extends Component
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
    
    componentDidMount()
    {
        axios.get('http://localhost:8000/getStudentById/'+this.props.match.params.id)
        .then(response => {
            this.setState(
            {
                first_name: response.data.first_name,
                last_name: response.data.last_name,
                email: response.data.email,
                password: response.data.password 
            });
        })
        .catch(function (error)
        {
            console.log(error);
        })
    }
    
    clearState()
    {
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            redirect: false
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
            // id: this.state.id,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password
            
        };

        //USING AXIOS TO UPDATE DATABASE 
        axios.put(`http://localhost:8000/api/students/${this.props.match.params.id}`, obj)
            .then(res => console.log(res.data),
                this.setState({ redirect: true })
            );        
    }



    render()
    {
        const { redirect } = this.state;
        if (redirect)
        {
            return <Redirect to='/view' />
        }

        return (
            <div style={{ marginTop: 10 }}>
                <h3> Edit Student </h3>

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
                                <input type="password" className="form-control" disabled value={this.state.password} onChange={this.onChangePassword} />
                            </div>
                        </div>

                        <div className="col-md-12 text-align:right">
                            <div className="form-group">
                                <input type="submit" value="Update" className="btn btn-dark btn-sm pull-right" />
                            </div>
                        </div>
                    </div>
                    
                    
                </form>
            </div>
        )
    }
    
}
