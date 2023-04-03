import React, { useState } from "react";

export const UncontrolledOnboardingFlow = ({ children, onFinish }) => {
  const goToNext = (stepData) => {
    const nextIndex = currentIndex + 1;

    const updatedData = { ...onboardingdata, ...stepData };

    if (nextIndex<children.length) {
        setCurrentIndex(nextIndex);
    }else{
        onFinish(updatedData);
    }

    setOnboardingData(updatedData);
  };

  const [onboardingdata, setOnboardingData] = useState({});

  const [currentIndex, setCurrentIndex] = useState(0);

  const currentChild = React.Children.toArray(children)[currentIndex];

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goToNext });
  }
  return currentChild;
};
