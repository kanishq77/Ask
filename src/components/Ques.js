import React from "react";
import { useState } from "react";
import Sure from "./Sure";
import Land from "./Land";

export default function Ques() {
	const [showLand, setShowLand] = useState(false);
	const handleYes = () => {
		setShowLand(true);
	};
	const [showModal, setShowModal] = useState(true);

	const toggleModal = () => {
		setShowModal(!showModal);
	};

	return (
		<>
			<div>
				<div className="position-absolute top-50 start-50 translate-middle ">
					<h1 className="my-4">Do you want to be my valentine?</h1>
					<div
						className="d-flex justify-content-between "
						role="group"
					>
						<button
							type="button"
							className="btn btn-primary "
							style={{ width: "150px" }}
							onClick={handleYes}
						>
							Yes
						</button>

						<button
							type="button"
							className="btn btn-secondary "
							style={{ width: "150px" }}
							onClick={toggleModal}
						>
							{showModal && <Sure />}
						</button>
					</div>
				</div>
			</div>
			{showLand && <Land />}
		</>
	);
}
