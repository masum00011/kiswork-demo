import React from "react";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
export default function Biocard() {
  return (
    <div className="flex justify-between gap-8 p-8">
        <div className="flex gap-8">
        <img src="https://www.kiswok.com/wp-content/uploads/2018/10/raj_kejriwal_015e01ae1_4476.png" alt="card" className="w-[240px]" />
      <div className="nio-content-card  py-8">
        <p className="font-bold text-[21px]">Raj Kejriwal</p>
        <p className="py-4 text-[10px]"> <HorizontalRuleIcon/>MANAGING DIRECTOR</p>
        <p className="">Email:<a className="bg-opacity-10" href=""> raj@kiswok.com</a> </p> 
        <p className="py-4">Since inception in 1957,Kiswok has constantly maintained a strict qual</p>
        <button className="bg-[#2a2916] text-white px-4 py-2">VIEW PROFILE <KeyboardArrowRightIcon/></button>
      </div>
      </div>
      <div className="flex gap-8">
        <img src="https://www.kiswok.com/wp-content/uploads/2018/10/mayank_kejriwal_015e01ae1_4477.png" alt="card" className="w-[240px]" />
      <div className="nio-content-card  py-8">
        <p className="font-bold text-[21px]">Mayank Kejriwal</p>
        <p className="py-4 text-[10px]"><HorizontalRuleIcon/> DIRECTOR</p>
        <p className="">Email:<a className="bg-opacity-10" href=""> raj@kiswok.com</a> </p> 
        <p className="py-4">At Kiswok we never compromised with quality and Technology. Kiswok is</p>
        <button className="bg-[#2a2916] text-white px-4 py-2">VIEW PROFILE <KeyboardArrowRightIcon/></button>
      </div>
      </div>
    </div>
  );
}
