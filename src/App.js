import React from 'react'
import Home from './Home'
import UsersList from './UsersList'
import UserPost from './UserPost'
import PostList from './PostList'
import PostReview from './PostReview'
import {BrowserRouter, Route, Link,} from 'react-router-dom'

function App(props){
   return(
       <BrowserRouter>
            <div>
                <Link to="/">Home||</Link>
                <Link to="/users">Users||</Link>
                <Link to="/posts">Posts</Link>

                <Route path="/" component={Home} />
                <Route path="/users" component={UsersList} exact={true}/>
                <Route path="/users/:id" component={UserPost} exact={true}/>
                <Route path="/posts" component={PostList} exact={true} />
                <Route path="/posts/:id" component={PostReview} />
            </div>
       </BrowserRouter>
   )
}

export default App