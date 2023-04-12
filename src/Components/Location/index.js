import React from 'react'

function Location() {
  return (
    <div className="location row">
      <h2 className="text-center p-5 title-location">OUR LOCATION</h2>
      <div className="address col-lg-6 col-md-12">
        <p>
          23721 ON-48 #8,
          <br />
          Buldwing ON
          <br />
          L0K G0B,
          <br />
          (647) 980-6444
        </p>
      </div>
      <div className="col-lg-6 col-md-12 map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11432.532602749925!2d-79.33689110000003!3d44.245502400000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d54b26382c6761%3A0x488ffd445b2a5ff4!2sBig%20Bear%20Bar%20%26%20Grill!5e0!3m2!1sen!2sca!4v1680919674852!5m2!1sen!2sca" width="600" height="450" loading="lazy"></iframe>
      </div>
      <div className="text-center new-location">
        <h2>COMING SOON</h2>
        <div>
          <img className="new-location-img" src="/images/new-location.jpeg" />
          <p className="centered text-light">follow us in our social media, we will keep you update of our news</p>
        </div>
      </div>
    </div >
  )
}

export default Location
