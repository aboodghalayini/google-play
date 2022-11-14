import React from 'react'
import '../Kids/Kids.css';
import img1 from '../../assets/images/unnamed.png';
import imgs from '../../assets/images/download.png';
import img2 from '../../assets/images/unnamed2.png';
import img3 from '../../assets/images/unnamed3.png';
import img4 from '../../assets/images/unnamed4.png';
import img5 from '../../assets/images/unnamed5.png';
import img6 from '../../assets/images/unnamed6.png';
import img7 from '../../assets/images/unnamed7.png';
import img8 from '../../assets/images/unnamed1.png';
const Kids = () => {
  return (
    <div>
    <img width="100%" height="100%" src={imgs} alt=""></img>
    <div className='d-flex justify-content-center'>
    <h1>Teacher Approved apps & games</h1>
    </div>
    <div className='d-flex justify-content-center'>
    <button className="button button1 border border-white  m-2">All ages up to 12 </button>
    <button className="button button2 rounded-pill m-2" >Ages up to 5 </button>
    <button className="button button3 rounded-pill m-2 " >Ages up to 6-8 </button>
    <button className="button button4 rounded-pill m-2 " >Ages up to 9-12 </button>
    </div>
    <h6 className='container'>Free to install</h6>
    <div class="card-group  container">
      
  <div class="card m-1">
    <img src={img1} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">YouTube Kids</h5>
    </div>
  </div>
  <div class="card m-1">
    <img src={img2} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Coloring Games: Color & Paint</h5>
    </div>
  </div>
  <div class="card m-1">
    <img src={img3} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">World of Peppa Pig: Kids Games</h5>
    </div>
  </div><div class="card m-1">
    <img src={img4}class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Color Kids: Coloring Games</h5>
    </div>
  </div><div class="card m-1">
    <img src={img5} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Baby shapes & colors for kids</h5>
    </div>
  </div><div class="card m-1">
    <img src={img6} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">PBS KIDS Games</h5>
    </div>
  </div><div class="card m-1">
    <img src={img7} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">ABC Kids - Tracing & Phonics</h5>
    </div>
  </div><div class="card m-1">
    <img src={img8} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Puzzle Kids: Jigsaw Puzzles</h5>
    </div>
  </div>
</div>
    </div>
  )
}

export default Kids