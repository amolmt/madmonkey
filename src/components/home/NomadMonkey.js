import React from "react"
import Lottie from "react-lottie"
import animationData from "../../data/json/monkey.json"

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
}

const NomadMonkey = () => {
  return (
    <Lottie
      options={defaultOptions}
      //   height={400}
      width={200}
      isStopped={false}
      isPaused={false}
    />
  )
}

export default NomadMonkey
