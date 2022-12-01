import placeholderImage from './../assets/img/placeholder.png';
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import api from "../resources/api";

export default () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        api.get('posts').then(res => {
            setPosts(res.data)
        })
    }, [])

    return (
        <div className="row">
            {
                posts.map(post => {
                    return (
                        <div className="col-sm-6 mb-4" key={post._id}>
                            <Link to={`post/${post._id}`} className="card">
                                <img className="card-img-top" src={placeholderImage} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">{post.title}</h5>
                                    <p className="card-text">{post.body}</p>
                                    <p className="card-text"><small className="text-muted">Views: {post.views}</small></p>
                                </div>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}