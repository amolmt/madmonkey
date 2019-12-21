import React from "react"
import Lottie from "react-lottie"
import animationData from "../../data/json/getStarted.json"

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
}

const GetStarted = () => {
  return (
    <Lottie
      options={defaultOptions}
      //   height={400}
      width={300}
      isStopped={false}
      isPaused={false}
    />
  )
}

export default GetStarted
