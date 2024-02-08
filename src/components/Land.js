import React from "react";
export default function Land() {
	return (
		// <div className="p-3 mb-2 bg-danger-subtle text-emphasis-danger">
		// 	.bg-danger-subtle{console.log("Hello in land")}
		// </div>
		<div className="fullscreen-container ambient-container">
			<div
				className="card mb-3 "
				style={{
					height: "100%",
					width: "100%",
				}}
			>
				<div
					className="d-flex justify-content-center ambient-container"
					// style={{
					// 	background:
					// 		"linear-gradient(to right, #ffc0cb, #e6e6fa)",
					// }}
				>
					<img
						src="https://media1.giphy.com/media/orU4txbRZIp6vJheJ9/200.webp?cid=790b7611uteux5wxfnb9sydgxoijgjqgd07r3p6dve9nuadn&ep=v1_gifs_search&rid=200.webp&ct=g"
						className="object-fit-fill center-image"
						style={{ height: "90%", width: "60%" }}
						alt="..."
					/>
				</div>
				<div
					className="card-body ambient-container"
					// style={{
					// 	background:
					// 		"linear-gradient(to right, #ffc0cb, #e6e6fa)",
					// }}
				>
					<h1
						className="card-title"
						style={{ fontFamily: "fantasy" }}
					>
						I Love You
					</h1>
				</div>
			</div>
		</div>
	);
}
