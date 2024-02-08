import React from "react";

function Sure() {
	return (
		<div>
			<button
				type="button"
				className="btn btn-secondary   "
				data-bs-toggle="modal"
				data-bs-target="#staticBackdrop"
			>
				No
			</button>

			<div
				className="modal fade"
				id="staticBackdrop"
				tabIndex="-1"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h1
								className="modal-title fs-5"
								id="exampleModalLabel"
							>
								Are You Sure???
							</h1>
							<button
								type="button"
								className="btn-close disabled"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-success"
								data-bs-dismiss="modal"
							>
								No
							</button>
							<button type="button" className="btn btn-danger">
								Yes
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Sure;
