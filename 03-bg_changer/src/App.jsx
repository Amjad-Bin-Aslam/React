import { useState } from "react"


function App() {

  const [color, setColor] = useState('olive')

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>

       <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          
          <div className="flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 bg-white rounded-3xl">

              <button onClick={()=>setColor("red")} className="px-4 outline-none rounded-full py-1 text-white shadow-lg cursor-pointer" style={{ backgroundColor: "red" }}>
                Red
              </button>

              <button onClick={()=>setColor("green")} className="px-4 outline-none rounded-full py-1 text-white shadow-lg cursor-pointer" style={{ backgroundColor: "green" }}>
                green
              </button>

              <button onClick={()=>setColor("blue")} className="px-4 outline-none rounded-full py-1 text-white shadow-lg cursor-pointer" style={{ backgroundColor: "blue" }}>
                blue
              </button>

              <button onClick={()=>setColor("orange")} className="px-4 outline-none rounded-full py-1 text-white shadow-lg cursor-pointer" style={{ backgroundColor: "orange" }}>
                orange
              </button>

              <button onClick={()=>setColor("gray")} className="px-4 outline-none rounded-full py-1 text-white shadow-lg cursor-pointer" style={{ backgroundColor: "gray" }}>
                gray
              </button>

              <button onClick={()=>setColor("yellow")} className="px-4 outline-none rounded-full py-1 text-black shadow-lg cursor-pointer" style={{ backgroundColor: "yellow" }}>
                yellow
              </button>

              <button onClick={()=>setColor("olive")} className="px-4 outline-none rounded-full py-1 text-white shadow-lg cursor-pointer" style={{ backgroundColor: "olive" }}>
                olive
              </button>

              <button onClick={()=>setColor("purple")} className="px-4 outline-none rounded-full py-1 text-white shadow-lg cursor-pointer" style={{ backgroundColor: "purple" }}>
                purple
              </button>

              <button onClick={()=>setColor("white")} className="px-4 outline-none rounded-full py-1 text-black shadow-lg cursor-pointer" style={{ backgroundColor: "white" }}>
                white
              </button>

              <button onClick={()=>setColor("lavender")} className="px-4 outline-none rounded-full py-1 text-black shadow-lg cursor-pointer" style={{ backgroundColor: "lavender" }}>
                lavender
              </button>


          </div>

       </div>

    </div>
  )
}

export default App
