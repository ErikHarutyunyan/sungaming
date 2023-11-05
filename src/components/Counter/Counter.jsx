import { useState } from 'react';
// Package
import CountUp from 'react-countup';
import ReactVisibilitySensor from 'react-visibility-sensor';

const Counter = ({
	wrapperClassName = '',
	counterClassName = '',
	symbolClassName = '',
	titleClassName = '',
	counterData = [],
}) => {
	const [viewPortEntered, setViewPortEntered] = useState(false);
	if (Array.isArray(counterData) && counterData.length === 0) return null;
	return (
		<>
			{counterData.map((data) => {
				const { id, title, count, duration, symbol } = data;
				return (
					<div className="col-sm-6 col-xl-3" key={id}>
						<div className={`${wrapperClassName}`}>
							<div className="counters d-center">
								<CountUp
									className={`${counterClassName}`}
									start={viewPortEntered ? null : 0}
									end={count}
									duration={duration}
									useEasing={true}>
									{({ countUpRef }) => {
										return (
											<ReactVisibilitySensor
												active={!viewPortEntered}
												onChange={(isVisible) => {
													if (isVisible) {
														setViewPortEntered(true);
													}
												}}
												delayedCall>
												<span className="display-one number" ref={countUpRef} />
											</ReactVisibilitySensor>
										);
									}}
								</CountUp>
								{symbol ? (
									<span className={` ${symbolClassName}`}>{symbol}</span>
								) : null}
							</div>
							{title ? <p className={`${titleClassName}`}>{title}</p> : null}
						</div>
					</div>
				);
			})}
		</>
	);
};
export default Counter;
