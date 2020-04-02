import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class UserPost extends React.Component {

    constructor() {
        super()
        this.state = {
            posts: [],
            userName: {}
        }
    }

    componentDidMount() {
        let id = this.props.match.params.id
        axios.get(`http://jsonplaceholder.typicode.com/posts?userId=${id}`)

        .then((response) => {
            const posts = response.data
            this.setState({posts})
        })

        axios.get(`http://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => {
            const userName = response.data
            this.setState({userName})
        })

        
    }

    render() {
        return (
            <div>
                <h2>USER NAME: {this.state.userName.name} </h2>
                <h3>POSTS WRITTEN BY USER</h3>
                <ul>
                    {
                        this.state.posts.map(post => {
                            return (
                                <li key={post.id}><Link to={`/posts/${post.id}`} >{post.title}</Link></li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default UserPost