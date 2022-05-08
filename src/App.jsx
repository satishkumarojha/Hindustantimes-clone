import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import News from './component/News'

function App(){
  const [count, setCount] = useState(0)
  return(
      // <div className="conatainer">
      //     <div className="hindustanNews"> 
      //     <aside className='top'>
      //       <div className='hindustanNews-top'>
      //       <h2>
      //            <hr className='hd' />
      //            <hr className='hd' />
      //            <hr className='hd' />
      //            <span className='hdstyle1'>
                   
      //                <span>[

      //                </span>Top News <span>]</span>
                   
      //            </span>
      //         </h2>

      //       </div>


      //     </aside>
      //     <div className='latest'>
      //       <div className='hindustanNews-latest'>
      //       <h2>
      //            <hr className='hd' />
      //            <hr className='hd' />
      //            <hr className='hd' />
      //            <span className='hdstyle2'>
                   
      //                <span>[

      //                </span>Latest News <span>]</span>
                   
      //            </span>
      //         </h2>
      //       </div>
            

      //     </div>
      //     <aside className='sport'>
      //       <div className='hindustanNews-sport'>
      //         <h2>
      //            <hr className='hd' />
      //            <hr className='hd' />
      //            <hr className='hd' />
      //            <span className='hdstyle3'>
                   
      //                <span>[

      //                </span>Sports <span>]</span>
                   
      //            </span>
      //         </h2>

      //       </div>
            


      //     </aside>




      //     </div>
      // </div>

    <News></News>
  )
}

export default App
