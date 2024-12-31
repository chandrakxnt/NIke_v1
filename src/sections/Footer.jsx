import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
          <img src={footerLogo} className="h-[46] w-[150]" /></a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">Get shoes ready for the new term at your nearest Nike store.Find Your perfect Size in Store and get rewards!</p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon)=>(
              <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                <img src={icon.src} alt={icon.alt}
                className="w-[24px] h-[24px]" />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 flex-wrap justify-between lg:gap-10 gap-20">
          {footerLinks.map((section)=>(
            <div key={section}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">{section.title}</h4>
              <ul>
                {section.links.map((link)=>(<li className="mt3
                text-white-400 font-montserrat text-base leading-normal hover:text-slate-500 cursor-pointer" key={link.name}>
                  <a>{link.name}</a>
                </li>))}
              </ul>
            </div>
          ))}
        </div>


      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img src={copyrightSign} alt="copy right sign" className="rounded-full h-[24px] w-[24px] m-0"/>
          <p>
          All rights not reserved XD.
          </p>
        </div>
        <p className="font-montserrat cursor-pointer">
          <a href="https://agreementservice.svs.nike.com/in/en_gb/rest/agreement?agreementType=termsOfUse&uxId=com.nike&country=IN&language=en&requestType=redirect">Terms and Conditions</a>
          
        </p>

      </div>
    </footer>
  )
}

export default Footer