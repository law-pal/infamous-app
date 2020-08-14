import React, { Component } from 'react';
import User from './User';
import {fetchUsers} from '../Actions/usersActions';
import {connect} from 'react-redux'


class Users extends Component {

    componentDidMount() {
        console.log(this.props)
         //This.props.users
        this.props.dispatch(fetchUsers())
    }

    renderPost = () => {
        if(this.props.loading) {
            return <p>loading...</p>
        }else if(this.props.hasErrors) {
            return <p>error can't display users...</p>
        }else {
            console.log(this.props.users)
        return this.props.users.map(user => <User key={user.id} person={user}/>)
        }
    }

    render() {
        return(
            <div>
                <h1>Hello</h1>
                {this.renderPost()}
            </div>
        );
    }
}


const mapStateToProps = state => ({
    users: state.users.users,
    loading: state.users.loading,
    hasErrors: state.users.hasErrors
})

export default connect(mapStateToProps)(Users);