import Tab1 from '../../assets/Home/Tab1.avif'
import '../../css/HomeComponents/CoreFounders.css'
const CoreFounders = () => {
  return (
    <div className='core-founders-con'>
        <div className='core-founders-wrapper'>
            <div className='core-founders-top-row'>
                <div className='core-founders-heading-box'>
                    <div className='core-founders-subtitle-box'>
                        <p className='sub-para-text'><span className="leadership-blue-square"></span>TEAM   </p>
                    </div>
                    <h1 className='head-text'>Our Core Founders</h1>
                </div>
                <div className='core-founders-heading-right'>
                    <p className='para-text'>Behind every resilient enterprise transformation is leadership grounded in deep Domain and IT expertise, strategic clarity, and long-term vision.</p>
                </div>
            </div>
           <div className="core-founders-cards">
            <div className="core-founder-card card-1">
                <img src={Tab1} alt="Founder" className="founder-img" />
                <div className="core-founder-info">
                    <h3 className="founder-name">Anantha Yellapragada</h3>
                    <p className="founder-title">CEO & Co-Founder</p>
                </div>
            </div>
            <div className="core-founder-card card-2">
                <img src={Tab1} alt="Founder" className="founder-img" />
                <div className="core-founder-info">
                    <h3 className="founder-name">Srinivas Reddy Chinnam (CSR)</h3>
                    <p className="founder-title">Director & Co-Founder</p>
                </div>
            </div>
           </div>
        </div>
    </div>
  )
}

export default CoreFounders