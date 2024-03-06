import React from 'react'
import gallery1 from '../../../Images/Gallery/gallery-md4.jpg'


import gallery2 from '../../../Images/Gallery/gallery-md6.jpg'
import gallery3 from '../../../Images/Gallery/gallery-md8.jpg'
import gallery4 from '../../../Images/Gallery/gallery-md7.jpg'

const Photo = () => {
  return (
    <>
      <div className="container mt-5">
      <h2 className="text-center mb-4">Gallery</h2>

      <div className="row">
        {/* Image 1 */}
        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <img
            src={gallery1}
            alt="Image 1"
            className="img-fluid w-36 h-36"
         
          />
        </div>

        {/* Image 2 */}
        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <img
            src={gallery2}
            alt="Image 2"
            className="img-fluid"
          />
        </div>

        {/* Image 3 */}
        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <img
            src={gallery3}
            alt="Image 3"
            className="img-fluid"
          />
        </div>

        {/* Image 4 */}
        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <img
            src={gallery4}
            alt="Image 4"
            className="img-fluid"
          />
        </div>

      </div>
    </div>
    </>
  )
}

export default Photo