import {useEffect, useState} from "react";
import Link from 'next/link';
import {connect} from "react-redux";
import {setPosts} from "../store/posts/actions";
import {logout} from "../store/auth/actions";


import {title, list, listElementStyle, logOutButton} from "../components/style";

function PostList({posts,setPosts,logout}) {

    useEffect(() => {
        if(posts.length === 0){
            (
                async () => {
                    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
                    const posts = await res.json();
                    setPosts(posts)
                }
            )().catch((error) => console.log(error))
        }

    }, []);

    const handleLogeOut =() => {
       logout()
    }
    return (
        <>
            <div>Posts Page</div>
            {
                posts.length !== 0 ?
                    <>
                        <button style={logOutButton} onClick={handleLogeOut}>Log Out</button>

                        <ul style={list}>
                            {
                                posts.map((element) => {
                                    return (
                                        <Link key={element.id} href="/post/[id]" as={`/post/${element.id}`}>
                                            <li style={listElementStyle}>
                                                <div>User: {element.userId}</div>
                                                <div style={title}>{element.title}</div>
                                                <div>{element.body}</div>
                                            </li>


                                        </Link>
                                    )
                                })
                            }
                        </ul>
                    </>:
                    <div>Loading...</div>
            }
        </>
    )
}
const mapStateToProps = state => ({
    posts: state.postReducer.posts
})
const mapDispatchToProps = dispatch =>({
    setPosts: posts => dispatch(setPosts(posts)),
    logout: () => dispatch(logout())

})

export default connect(mapStateToProps,mapDispatchToProps)(PostList)
