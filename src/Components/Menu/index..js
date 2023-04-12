import React from 'react'


function Menu() {
  return (
    <div id="menu">
      <h2 className="menu-title">MENU</h2>
      <div className="card-group p-4">
        <div className="card m-2">
          <a href="#jamaican-food"><img src="/images/pizza.jpg" className="card-img" alt="..." /></a>
          <div className="card-body">
            <h5 className="card-title" bg-dark>Jamaican Food</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
        <div className="card m-2">
          <img src="/images/jerk-chicken.jpg" className="" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Canadian Food</h5>
            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
          </div>
        </div>
        <div className="card m-2">
          <img src="/images/sandwich.jpg" className="card-img" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Italian Food</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
          </div>
        </div>
        <div className="card m-2">
          <img src="/images/jerk-chicken.jpg" className="card-img" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Latin Food</h5>
            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Menu
