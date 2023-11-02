const GameCardStyle1 = ({ gamesItems = [], next = 6 }) => {
	return (
		<div className="row justify-content-center">
			<div className="col-lg-10">
				<div className="tabcontents tab-content">
					<div className={`tabitem active`}>
						<div className="row  cus-mar justify-content-center">
							{menuItems?.slice(0, next)?.map((game) => {
								const { id, title, imgMain, imgSmall, desc, path } = game;
								return (
									<motion.div
										key={id}
										animate={{
											opacity: 1,
											y: 0,
											transition: {
												ease: 'easeInOut',
												delay: 0.2,
												stiffness: 10,
												duration: 0.5,
											},
										}}
										initial={{
											opacity: 0,
											y: 50,
											transition: {
												ease: 'easeInOut',
												delay: 0.2,
												stiffness: 10,
												duration: 0.5,
											},
										}}
										transition={{
											stiffness: 400,
											damping: 10,
											transition: {
												ease: 'easeInOut',
												delay: 0.2,
												stiffness: 10,
												duration: 0.5,
											},
										}}
										exit={{
											y: -50,
											opacity: 0,
											transition: {
												ease: 'easeInOut',
												delay: 0.2,
												stiffness: 10,
												duration: 0.5,
											},
										}}
										className={`col-xl-4 col-sm-6 col-8 d-center`}>
										<div className="single-box">
											<div className="img-area">
												<LazyImage
													alt={title}
													loading="lazy"
													src={imgMain}
													wrapperClassName="img-area"
												/>
											</div>
											<div className="footer-area mb-5 text-center">
												<div className="logo-area logoGame">
													<LazyImage
														alt={title}
														loading="lazy"
														width="80px"
														height="80px"
														src={imgSmall}
														wrapperClassName="img-area"
													/>
												</div>
												<h3 className="visible-slowly-bottom my-3">{title}</h3>
												<p className="text-truncate ps-10 pe-10 ">{desc}</p>
												<div className="btn-area alt-bg">
													<Link
														className="box-style btn-box mt-4 d-center"
														to={`${GAMES}/${path}`}
														state={{ data: game }}>
														Learn More
													</Link>
												</div>
											</div>
										</div>
									</motion.div>
								);
							})}
							{next < menuItems?.length ? (
								<div className="text-center mt-10 mt-sm-15">
									<div
										className="loading py-3 px-8 d-inline-flex align-items-center gap-2"
										onClick={handleMoreGames}>
										<div className="icon-box d-center">
											<button className="">Load more</button>
										</div>
									</div>
								</div>
							) : null}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
const GameCardStyle2 = ({ gamesItems = [], next = 6 }) => {
	return (
		<div className="row justify-content-center">
			<div className="col-lg-12">
				<div className="tabcontents visible-from-bottom">
					<div className="tabitem active">
						<div className="col-12 cus-mar game-section-block-wrp">
							{gamesItems.slice(0, next).map((item) => {
								const { id, title, imgMain, path, url } = item;
								return (
									<motion.div
										animate={{
											opacity: 1,
											y: 0,
											transition: {
												ease: 'easeInOut',
												delay: 0.2,
												stiffness: 10,
												duration: 0.5,
											},
										}}
										initial={{
											opacity: 0,
											y: 50,
											transition: {
												ease: 'easeInOut',
												delay: 0.2,
												stiffness: 10,
												duration: 0.5,
											},
										}}
										transition={{
											stiffness: 400,
											damping: 10,
											transition: {
												ease: 'easeInOut',
												delay: 0.2,
												stiffness: 10,
												duration: 0.5,
											},
										}}
										exit={{
											y: -50,
											opacity: 0,
											transition: {
												ease: 'easeInOut',
												delay: 0.2,
												stiffness: 10,
												duration: 0.5,
											},
										}}
										key={id}
										className={` game-section-block`}>
										<div className="single-box">
											<div className="position-relative d-center head">
												<LazyImage
													alt={title}
													src={imgMain}
													className="w-100 thumb-img"
												/>
												<h3 className="gameTitle">{title}</h3>
											</div>
											<div className="link-item py-3">
												<Link
													className=" px-5 text-decoration-underline"
													to={`${GAMES}/${path}`}
													state={{ data: item }}>
													More Details
												</Link>
											</div>
										</div>
										<PlayButton url={url} single />
									</motion.div>
								);
							})}
						</div>
						{next < menuItems?.length && (
							<div className="text-center mt-10 mt-sm-15">
								<div
									className="loading gamesBtn py-3 px-8 d-inline-flex align-items-center gap-2"
									onClick={handleMoreGames}>
									<div className="icon-box d-center">
										<button className="">Load more</button>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

const GameCard = ({ style = '1' }) => {
	if (style === '1') return <GameCardStyle1 />;
	if (style === '2') return <GameCardStyle2 />;
};
export default GameCard;
