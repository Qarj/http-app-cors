import React, { Component } from "react";
import axios from "axios";
import "./App.css";

const apiEndpoint = "https://jsonplaceholder.typicode.com/posts";

class App extends Component {
    state = {
        posts: []
    };

    async componentDidMount() {
        const { data: posts } = await axios.get(apiEndpoint);
        console.log(posts);
        this.setState({ posts });
    }

    handleAdd = async () => {
        console.log("Add");
        const obj = { title: "a", body: "b" };
        const { data: post } = await axios.post(apiEndpoint, obj);
        console.log(post);
    };

    handleUpdate = post => {
        console.log("Update", post);
    };

    handleDelete = post => {
        console.log("Delete", post);
    };

    render() {
        return (
            <React.Fragment>
                <button className="btn btn-primary" onClick={this.handleAdd}>
                    Add
                </button>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.posts.map(post => (
                            <tr key={post.id}>
                                <td>{post.title}</td>
                                <td>
                                    <button
                                        className="btn btn-info btn-sm"
                                        onClick={() => this.handleUpdate(post)}
                                    >
                                        Update
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => this.handleDelete(post)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

export default App;
