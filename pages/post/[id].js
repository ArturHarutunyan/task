import {useEffect, useState} from "react";
import { useRouter } from 'next/router'
import Router from 'next/router'
import {setComments, setPosts} from "../../store/posts/actions";
import {connect} from "react-redux";
import {list, postStyle, title, listElementStyle, backButton, logOutButton} from "../../components/style"
import {logout} from "../../store/auth/actions";


const Post =  ({posts,setComments,logout}) => {
	const [post, setPost] = useState(null);
	const router = useRouter()

	useEffect(() => {
		const id = router.query.id

		const currentPost = posts.find((post) => post.id === +id);

		if (currentPost){
			if (!currentPost.comments){
				(
					async () => {
						const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
						const comments = await res.json();

						setComments(+id,comments)
						setPost(currentPost)
					}
				)().catch((error) => console.log(error))
			}else {
				setPost(currentPost)
			}
		}else{
			Router.push('/')
		}


	}, []);

	const handleBackClick = () => {
		Router.push('/')
	};

	const handleLogOut = () => {
		logout()
	}

	return (
		<>
			{
				post ? <div style={postStyle}>
						<button style={backButton} onClick={handleBackClick}>Back to posts page</button>

						<button style={logOutButton} onClick={handleLogOut}>Log Out</button>

						<span> User: {post.userId}</span>
						<span style={title}>{post.title}</span>
						<span>{post.body}</span>
						<ul>
							{
								post.comments &&
								post.comments.map((comment) => {
									return (
										<li style={listElementStyle} key={comment.id}>
											<div>Username: {comment.name}</div>
											<div>{comment.body}</div>
										</li>
									)
								})
							}
						</ul>
					</div> :
					<div>Loading...</div>
			}
		</>

	)
}

const mapStateToProps = state => ({
	posts: state.postReducer.posts
})
const mapDispatchToProps = dispatch =>({
	setComments: (id,comment) => dispatch(setComments(id,comment)),
	logout: () => dispatch(logout())

})

export default connect(mapStateToProps,mapDispatchToProps)(Post)
