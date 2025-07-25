import MyVideo from '../assets/Matrix.mp4'

const VideoComponent = () => {
  return (
    <div>
        <video src={MyVideo} autoPlay muted loop playsInline className='video-background'></video> 
    </div>
  )
}

export default VideoComponent