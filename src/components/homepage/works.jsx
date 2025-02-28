import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="https://github.com/spy235/spy235.github/blob/main/public/dbiz.ai.jpg?raw=true"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Dbiz.ai</div>
							<div className="work-subtitle">
								Software Test Enginner (SDET)
							</div>
							<div className="work-duration">2023- Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
