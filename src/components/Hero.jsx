import { Link } from "react-router-dom"
const Hero = ({handleOpenModal}) => {
    return (
        <div className="relative h-[550px] bg-[#EEF5FF] w-[1360px] flex justify-between items-center  text-3xl ml-[90px] rounded-md shadow-md overflow-hidden">
            <div className="">
                <div className="w-[502px] h-[367px] bg-inherit">
                    <h1 className="text-[88px] font-[700] text-[#1A202C] leading-[88px] ml-[50px] ">Let's Learn & Earn</h1>
                    <div className="w-[415px] h-[140px]">
                        <h2 className="text-[40px] font-[400] text-[#1A202C] leading-[65px] ml-[50px] ">Get a chance to win up-to <span className="text-[#1A73E8]">Rs. 15,000</span></h2>
                    </div>
                </div>
                <Link to="/refer-form" onClick={handleOpenModal} className="w-[192px] h-[54px] bg-[#1A73E8] rounded-[8px] ml-[50px] text-[#FFFFFF] text-[20px] leading-[24px] font-[400] flex items-center justify-center">Refer Now</Link>
            </div>
            <div className="w-[814px] h-[725px] overflow-hidden relative">
                <div className="absolute rotate-180 mt-[220px] left-52 z-[0] h-[87px] w-[157px] ">
                    <img src="/note1.png" alt="" />
                </div>  
                <img src="/hero.png" alt="" className="absolute"/>
            </div>
            <div className="absolute rotate-180 top-4 z-[100] left-0 h-[87px] w-[157px] ">
                <img src="/note1.png" alt="" />
            </div>
            <div className="absolute top-[450px] left-[600px] h-[87px] w-[157px] -rotate-90 ">
                <img src="/note1.png" alt="" />
            </div>
        </div>
    )
}

export default Hero
