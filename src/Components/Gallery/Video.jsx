import React from 'react'

const Video = () => {
  return (
   <>
     <div className="container mt-5">
      <h2 className="text-center mb-4">Gallery</h2>

      <div className="row">
      
       

        {/* Video 1 */}
        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <iframe
            title="Video 1"
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/AFOW7vPq3sA"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>

        {/* Video 2 */}
        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <iframe
            title="Video 2"
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/b4FUCHm9Vx0"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>

        {/* Video 3 */}
        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <iframe
            title="Video 3"
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/pt8fSJMn0tM"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>

        {/* Video 4 */}
        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <iframe
            title="Video 4"
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/pt8fSJMn0tM"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
   </>
  )
}

export default Video