import React from "react"
import Lottie from "react-lottie"
import animationData from "../../data/json/arivalsAnimation.json"

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
}

const ArivalsAnimation = () => {
  return (
    <Lottie
      options={defaultOptions}
      height={400}
      width={400}
      isStopped={false}
      isPaused={false}
    />
  )
}

export default ArivalsAnimation
