import React, { Component } from 'react';
import axios from 'axios';
import { RecordsList } from './RecordsList';

export default class View extends Component
{

    constructor(props)
    {
        super(props);
        this.state = { students: [] };
    }

    //
    componentDidMount()
    {
        axios.get(`http://localhost:8000/students`)
        .then(response => {
            this.setState({ students: response.data });
        })
        .catch(function (error)
        {
            console.log(error);
        })
    }


    usersList()
    {
        return this.state.students.map(function (students, i)
        {
            return <RecordsList obj={students} key={i} />
        });
    }


    render()
    {
        return (
            <div>
                <h3> Students</h3>
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Email</th>
                            <th>Created</th>
                            <th style={{textAlign:'right'}}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.usersList() }
                    </tbody>
                </table>
            </div>
        )
    }
    
}
