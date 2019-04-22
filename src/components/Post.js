import React, { Component } from 'react';
import axios from 'axios'

class Post extends Component{
    state = {
        posts: [ ]
    }
    
    componentDidMount(){
        var Twit = require('twit')
        var T = new Twit({
            consumer_key:         '60TuP2PXD3PThnBxrYSRIUg6x',
            consumer_secret:      'FgACMYZ6YmL3ioQiX0yPx6JCglyOxEEfYGUjKs0BPRwnlFmsJl',
            access_token:         '2269230518-bDHmGjfxvwzaQrIhhqHgLTH7dCKO1w0mbh27S24',
            access_token_secret:  'NKJhpX2WfAcFugJUmAzlp5A9aIy5nHFyhPHfaw3WWVOl4',
               })
        T.get('search/tweets', { q: 'banana since:2011-07-11', count: 100 }, function(err, data, response) {
                console.log(data)
        })
        // axios.get('https://api.twitter.com/1.1/application/rate_limit_status.json',{headers:  {"OAuth oauth_consumer_key"="60TuP2PXD3PThnBxrYSRIUg6x","oauth_token":"2269230518-bDHmGjfxvwzaQrIhhqHgLTH7dCKO1w0mbh27S24","oauth_signature_method":"HMAC-SHA1","oauth_timestamp":"1555909061","oauth_nonce":"kYjzVBB8Y0ZFabxSWbWovY3uYSQ2pTgmZeNu2VS4cg","oauth_version":"1.0","oauth_signature":"ffUO3ROxihIonCTNs%2F%2BLvTipd0Q%3D"}})
        //     .then(res => {
        //         console.log(res)
        //         this.setState({
        //             posts: res.data.slice(0,10)
        //         })
        //     })
    }
    render() {
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return(
                    <div className="post card" key={post.id}>
                        <div className="card-content">
                            <span className="card-title">{post.title}</span>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No posts yet</div>

        )
        return(
            <div className="container">
                <h4>Event Name</h4>
                <p>#Hashtag #posts #users</p>
                {postList}
                
            </div>
        )
    }
}
export default Post