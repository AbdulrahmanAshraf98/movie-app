import React from "react";
import Skeleton from "react-loading-skeleton";
import Card from "../../UI/Card/Card";
import "react-loading-skeleton/dist/skeleton.css";
function ListSkeleton({ cards }) {
	return Array(cards)
		.fill(0)
		.map((card, index) => (
			<div className="col" key={index}>
				<div className="card skeleton_card list-item">
					<Card>
						<div className="card-top">
							<div className="skeleton_card-top-box card-top-box">
								<Skeleton width={"100%"} height={"200px"} />
							</div>
						</div>
						<div className="card-footer">
							<div className="card-desc">
								<h3 className="card-title skeleton_card-title">
									<Skeleton width={"100%"} />
								</h3>

								<div className="card-details">
									<ul>
										<li className="skeleton_vote-average">
											<Skeleton circle width={"30px"} height={"30px"} />
										</li>
										<li className="skeleton_date">
											<Skeleton width={"10vw"} height={"30px"} />
										</li>
									</ul>
								</div>
							</div>
						</div>
					</Card>
				</div>
			</div>
		));
}

export default ListSkeleton;
