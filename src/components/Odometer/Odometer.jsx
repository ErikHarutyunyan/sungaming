import React, { useEffect, useRef, useState } from "react";
import Odometer from "react-odometerjs";

const OdometerComponent = ({ value }) => {
  const odometerRef = useRef(null);

  useEffect(() => {
    if (odometerRef.current) {
      odometerRef.current.update(value);
    }
  }, [value]);

  return (
    <Odometer
      format="d"
      duration={1000}
      animation="count"
      ref={odometerRef}
      value={1232}
    />
  );
};

export default OdometerComponent;
