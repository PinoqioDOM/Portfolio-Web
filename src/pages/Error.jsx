import '../design/error.css'
import VideoComponent from '../components/VideoComponent'

const Error = () => {
  return (
    <div>
      <div className="error-page">
        <VideoComponent />
        <h1 className='error-text'>404 - Page Not Found</h1>
      </div>
    </div>
  )
}

export default Error