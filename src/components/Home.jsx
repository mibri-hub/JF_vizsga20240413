import React from 'react'
import background from "../../public/background.png"
import '../components/Home.css'
import haz from "../../public/haz.jpg";
import lakas from "../../public/panel.jpg";
import nyaralo from "../../public/nyaralo.jpg";


export const Home = () => {
  return (
    <div className='container-home shadow '>
        <header>
        <div >
            <h1>Ingatlaniroda</h1>
        </div>
        </header>
        <main>
  <div>
    <div>
      <h4>Ingatlanok minden kategóriában</h4>
    </div>
    <div className="row">
      <div className="col-md-2 col-12">
        <img src={haz} alt="" className="img-fluid" />
        <p>Házak</p>
      </div>
      <div className="col-md-2 col-12">
        <img src={lakas} alt="" className="img-fluid" />
        <p>Lakások</p>
      </div>     
      <div className="col-md-2 col-12">
        <img src={nyaralo} alt="" className="img-fluid" />
        <p>Nyaralók</p>
      </div> 
    </div>
  </div>
</main>
        <footer>
            <p className='footer'>©2024 JF project. All rights reserved.</p>
        </footer>
    </div>
  )
}

