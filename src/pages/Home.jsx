import University from '../components/University';

export default function Home() {
  return (
    <div className = "w-[100%] top-0">
      <div className = "w-[100%] top-0 h-[90vh] overflow-hidden">
        <img src={require('../images/UCCbg.png')} alt = "img"/>
        <div className = "absolute top-[5cm] w-[100%] z-10 text-slate-50 flex justify-center ">
          <ul className>
            <li>
              <button className = "text-3xl bg-slate-800 p-3 rounded-lg">
                Connect with UCC Alumni
              </button>
            </li>
            <li>Stat</li>
            <li>Stat</li>
          </ul>
        </div>
      </div>

      <div className = "bg-slate-200 pt-8 pb-16 w-[100%]">
        <div className = " flex justify-center pb-8">Universities</div>
        <ul className = "flex justify-evenly">
          <li><University/></li>
          <li><University/></li>
          <li><University/></li>
        </ul>
      </div>
      <div>

      </div>

    </div>
  )
}
