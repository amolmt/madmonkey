import React from "react"
import Lottie from "react-lottie"
import animationData from "../../data/json/checkInAnimation.json"

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
}

const CheckInAnimation = () => {
  return (
    <Lottie
      options={defaultOptions}
      height={110}
      width="100%"
      isStopped={false}
      isPaused={false}
    />
  )
}

export default CheckInAnimation
