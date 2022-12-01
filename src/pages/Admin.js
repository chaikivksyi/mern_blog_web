import {useState} from "react";
import api from "../resources/api";
import {Navigate} from "react-router-dom";

export default () => {

    const [post, setPost] = useState({
        title: '',
        body: ''
    })

    const addPost = (e) => {
        e.preventDefault();
        api.post('/posts', post).then(res => {
            if(res.status === 200) {
                return <Navigate to='/' />
            }
        })
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <h1>Create post</h1>
                    <form action="" method="POST">
                        <div className="form-group mb-3">
                            <label htmlFor="title">Title <span className="require">*</span></label>
                            <input type="text" className="form-control" name="title"
                                   value={post.title} onChange={(e) => setPost({...post, title: e.target.value})} />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="description">Description</label>
                            <textarea rows="5" className="form-control" name="description"
                                      value={post.body} onChange={(e) => setPost({...post, body: e.target.value})}></textarea>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary" onClick={addPost}>Create</button>
                            {/*<button className="btn btn-default">Cancel</button>*/}
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}