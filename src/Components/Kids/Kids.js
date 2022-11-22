import React, {useState} from 'react';
import Agup12 from '../Agup12/Agup12';
import Agup5 from '../Agup5/Agup5';
import '../Kids/Kids.css';
import imgs from '../../assets/images/download.png';
import Agup8 from '../Agup8/Agup8';
import Agup9 from '../Agup9/Agup9';

function Kids (props) {
  const [active, setActive] = useState("Agup12");
  return (
    <>
    <div>
    <img width="100%" height="100%" src={imgs} alt=""></img>
    <div className='d-flex justify-content-center'>
    <h1>Teacher Approved apps & games</h1>
    </div>
    <div className='d-flex justify-content-center'>
    <button className="button button1 border rounded-pill m-2"  onClick={()=>{ setActive("Agup12")}}>All ages up to 12 </button>
    <button className="button button2 border rounded-pill m-2" onClick={()=>{ setActive("Agup5")}}>Ages up to 5 </button>
    <button className="button button3 border rounded-pill m-2 " onClick={()=>{ setActive("Agup8")}}>Ages 6-8 </button>
    <button className="button button4 border rounded-pill m-2 " onClick={()=>{ setActive("Agup9")}}>Ages 9-12 </button>
    </div>
    </div>
    <div>
      {active === "Agup12" && <Agup12/>}
      {active === "Agup5" && <Agup5/>}
      {active === "Agup8" && <Agup8/>}
      {active === "Agup9" && <Agup9/>}
    </div>
    </>
  )
}

export default Kids