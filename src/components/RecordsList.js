import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

export class RecordsList extends Component
{

    constructor(props)
    {
        super(props);
        this.delete = this.delete.bind(this);

        this.state = {
            redirect: false
        }
    }

    //DELETE FUNCTION
    delete()
    {
        axios.delete(`http://localhost:8000/api/students/${this.props.obj.id}`)
            .then(this.setState({ redirect: true }))
            .then(alert('Deleted'))
            .catch(function (error){ console.log(error); })
    }


    render()
    {
        const { redirect } = this.state;
        if (redirect)
        {
            return <Redirect to='/view' />
        }


        return (
            <tr>
                <td> {this.props.obj.id} </td>
                <td> {this.props.obj.first_name} </td>
                <td> {this.props.obj.last_name} </td>
                <td> {this.props.obj.email} </td>
                <td> {this.props.obj.created_at} </td>
                <td style={{textAlign:'right'}}>
                    <Link to={"/edit/"+this.props.obj.id} className="btn btn-primary btn-sm pull-right mr-1"> Edit</Link>
                    <button className="btn btn-danger btn-sm" onClick={this.delete}>Delete</button>
                </td>
            </tr>
        )
    }
}

export default RecordsList
