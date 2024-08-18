"use client";

import React from "react";
import CountUp from "react-countup";

const AnimatedCurrency = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      <CountUp
        prefix="$"
        end={amount}
        decimal=","
        decimals={2}
        duration={0.5}
      />
    </div>
  );
};

export default AnimatedCurrency;
