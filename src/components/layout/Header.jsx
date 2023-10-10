import './Header.css'
import Titleimg from'../../../public/TitleImg.png'

export const Header = () => {
  return (
    <header className='Header'>
        <div className='Header_Left'>
            <span className='Header_Left_CRYPO'>
              <img className='Header_Left_Img' src={Titleimg}/>
              CRYPO
            </span>
            <span>
              Exchange
            </span>
            <span>
              Market
            </span>
            <span>
              Dashboard
            </span>
            <span>
              Others
            </span>
        </div>
        <div>

        </div>
        <div>
          
        </div>
        
      </header>
   
  )
}
