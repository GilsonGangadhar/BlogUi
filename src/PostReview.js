import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class PostReview extends React.Component {
    constructor() {
        super()
        this.state = {
            comments: [],
            eachPost: {},
            userData: {}
        }
    }

    componentDidMount(){
       let id = this.props.match.params.id
       

        axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) => {
        let eachPost = response.data
        this.setState({eachPost})
        axios.get(`http://jsonplaceholder.typicode.com/users/${eachPost.userId}`)
    .then((response) => {
        const userData = response.data
        this.setState({userData})
    })
    })

    axios.get(`http://jsonplaceholder.typicode.com/comments?postId=${id}`)
    .then((response) => {
        let comments = response.data
        this.setState({comments})
    })
    
        
        
    }

    render(){
        return (
            <div>
                <h2>USER NAME: {this.state.userData.name} </h2> 
                <h3>TITLE: {this.state.eachPost.title} </h3>
                <h4>BODY: {this.state.eachPost.body}</h4>
                <p></p> 
                <hr/>
                <h3>Comments: </h3>
                <ul>
                    {
                        this.state.comments.map(comment => {
                            return (
                                <li key={comment.id}>{comment.body}</li>
                            )
                        })
                    }
                </ul>
                <hr/>
                <p><Link to={`/users/${this.state.userData.id}`}>More Posts from author: {this.state.userData.name}</Link></p>

            </div>
        )
    }

}

export default PostReview