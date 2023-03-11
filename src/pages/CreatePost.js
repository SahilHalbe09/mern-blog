import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Navigate } from "react-router-dom";
import EditPost from "./EditPost";
import Editor from "../components/Editor";

function CreatePost() {
	const [title, setTitle] = useState("");
	const [summary, setSummary] = useState("");
	const [content, setContent] = useState("");
	const [files, setFiles] = useState("");
	const [redirect, setRedirect] = useState(false);

	const createNewPost = async (e) => {
		const data = new FormData();
		data.set("title", title);
		data.set("summary", summary);
		data.set("content", content);
		data.set("file", files[0]);

		e.preventDefault();

		const response = await fetch("http://localhost:4000/post", {
			method: "POST",
			body: data,
			credentials: "include",
		});

		if (response.ok) {
			setRedirect(true);
		}
	};

	if (redirect) {
		return <Navigate to={"/"} />;
	}

	return (
		<form onSubmit={createNewPost}>
			<input
				type="title"
				placeholder={"Title"}
				value={title}
				onChange={(event) => {
					setTitle(event.target.value);
				}}
				required
			/>
			<input
				type="summary"
				placeholder={"Summary"}
				value={summary}
				onChange={(event) => {
					setSummary(event.target.value);
				}}
				required
			/>
			<input type="file" onChange={(event) => setFiles(event.target.files)} required />
			<Editor onChange={setContent} value={content} />
			<button style={{ marginTop: "5px" }}>Create Post</button>
		</form>
	);
}

export default CreatePost;
