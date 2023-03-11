import { format } from "date-fns";
import React from "react";
import { Link } from "react-router-dom";

function Post({ title, summary, cover, content, createdAt, author, _id }) {
	return (
		<div className="post">
			<div className="img">
				<Link to={`/post/${_id}`}>
					<img src={"http://localhost:4000/" + cover} alt="Header-img" />
				</Link>
			</div>
			<div className="text">
				<Link to={`/post/${_id}`}>
					<h2>{title}</h2>
				</Link>
				<p className="info">
					<a href="/" className="author">
						{author.username}
					</a>
					<time>{format(new Date(createdAt), "yyyy-MM-dd HH:mm")}</time>
				</p>
				<p className="summary">{summary}</p>
			</div>
		</div>
	);
}

export default Post;
