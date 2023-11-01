import { useState } from 'react';
// Package
import CountUp from 'react-countup';
import ReactVisibilitySensor from 'react-visibility-sensor';


const CounterActive = ({ className = '', counterData = [] }) => {
	const [viewPortEntered, setViewPortEntered] = useState(false);
	if (Array.isArray(counterData) && counterData.length === 0) return null;
	return (
		<section
			className={`counter-section counter-head pt-120 pb-120 ${className}`}>
			<div className="container">
				<div className="row cus-mar  d-center">
					{counterData.map((data) => {
						const { id, title, count, duration, symbhol } = data;
						return (
							<div className="col-sm-6 col-xl-4" key={id}>
								<div className="single-box py-6 box-style box-first d-center position-relative">
									<div className="counters d-flex align-items-center">
										<CountUp
											className="counter"
											start={viewPortEntered ? null : 0}
											end={count}
											duration={duration}
											useEasing={true}>
											{({ countUpRef }) => {
												return (
													<ReactVisibilitySensor
														active={!viewPortEntered}
														onChange={(isVisible) => {
															if (isVisible) setViewPortEntered(true);
														}}
														delayedCall>
														<span className="display-one" ref={countUpRef} />
													</ReactVisibilitySensor>
												);
											}}
										</CountUp>
										<span className="display-one symbol">{symbhol}</span>
									</div>
									<p className="name-area fs-five position-absolute">{title}</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};
export default CounterActive;
