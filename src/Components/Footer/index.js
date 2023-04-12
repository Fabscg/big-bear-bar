import React from 'react'

const currentYear = new Date().getFullYear()

function Footer() {
  return (
    <div>
      <footer className="">
        <div className="w-100% col-lg-6 col-md-12">

        </div>
        <div className="col-lg-6 col-sm-12">
          <span>CONNECT WITH US:</span>
          <hr />
          <div className="icons-container">
            <a href="https://twitter.com/BigBearBarNGril"><i className="icon fa-brands fa-twitter fa-2x"></i></a>
            <a href="https://www.instagram.com/bigbearbarngrill/?hl=en"><i className="icon fa-brands fa-instagram fa-2x"></i></a>
            <a href="https://www.facebook.com/BigBearBarBaldwin"><i className="icon fa-brands fa-facebook fa-2x"></i></a>
            <a href="mailto:bigbearbarngrill@gmail.com"><i className="icon fa-solid fa-envelope fa-2x"></i></a>
            <a href="tel:(647) 980-6444"><i className="icon fa-solid fa-phone fa-2x"></i></a>
          </div>

          <p className="pt-4 copyright">© Big Bear Bar & Grilled | Terms & Privacy {currentYear}</p>
        </div>

      </footer>
    </div>
  )
}

export default Footer
