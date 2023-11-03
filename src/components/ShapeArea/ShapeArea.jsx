const ShapeArea = ({ nameClass = '', children }) => {
	return <div className={`shape-area ${nameClass}`}>{children}</div>;
};
export default ShapeArea;
