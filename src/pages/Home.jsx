import React from 'react'
import arrow from "../images/Vec.png";
import rec from "../images/rec.png";
import tic from "../images/tic.png";
import timer from "../images/timer.png";
import windows from "../images/windows.png";
import send from "../images/send.png";
import add from "../images/add.png";
import plus from "../images/plus.png";
import single from "../images/singletick.png";
import { FaSearch } from 'react-icons/fa';


function Home() {
  return (
    <div className='pt-1'>
      
  <hr className="my-5 ml-16 w-[970px] max-sm:w-[360px] max-sm:ml-0" />

  
        <div className=" flex flex-row  max-sm:flex-col max-sm:px-2 ">
          <div className="flex flex-row ml-16 max-sm:mx-8">
            <span  className='max-sm:text-sm'  style={{  fontFamily: 'Open Sans',fontSize: '15px',fontWeight: 400, color:'grey'}} >Dashboard</span>
            <div className="p-[5px] max-sm:p-1"><img src={arrow} alt="Arrow" width={7} /></div>
            <span className='max-sm:text-sm'style={{  fontFamily: 'Open Sans',fontSize: '15px',fontWeight: 400, color:'grey'}} >Whatsapp Chat</span>
          </div>
    
    <div className="ml-[510px] max-sm:ml-[55px] max-sm:pt-6">
    <button className="text-white px-[50px] py-2 rounded-md relative max-sm:px-[30px] max-sm:py-1 hover:shadow-lg"  style={ { backgroundColor:'#03BF9C'}}>   <img src={add} alt="add" className='absolute bottom-[9px] left-[21px] max-sm:left-[6px] max-sm:bottom-[7px]  ' width={20} /> Schedule Appointment</button>
  </div>

        
        </div>
  
      



      <div className='flex flex-row mt-[15px] ml-[60px] max-sm:ml-[7px] max-sm:flex-col-reverse max-sm:gap-[850px]' >

<div className="  flex flex-col gap-[20px] w-[251px] h-[850px] border-l max-sm:border max-sm:h-auto max-sm:w-[330px] border-gray-300" >
  <div className="ml-5 max-sm:ml-8">
    <div className="relative left-[10px] top-[30px] pt-3 max-sm:left-[10px] max-sm:pt-2 max-sm:top-[25px]">
      <FaSearch className="text-gray-500" />
    </div>
    <input type="text" placeholder="Search Patient" className="placeholder-gray-900 ::placeholder w-[210px] pl-10 py-2 rounded-md border border-black focus:outline-none focus:border-gray-400 max-sm:w-64 max-sm:py-1 " />
  </div>

    <div className="ml-[20px] relative max-sm:ml-[60px]">
    <button className="text-white px-[20px] py-2 w-[210px] rounded-md relative max-sm:px-[30px] max-sm:py-1 shadow-md hover:shadow-lg "  style={ { backgroundColor:'#03BF9C'}}>   <img src={plus} alt="add" className='absolute bottom-[11px] left-[18px] max-sm:left-[5px] max-sm:w-[15px]' width={15} />Add New Patient</button>
  </div>

  <div className="flex pt-1 ">
    <div className="flex flex-col">
      <div className="p-2  font-semibold " style={{backgroundColor:"rgba(247, 244, 250, 1)", borderBottom: "1px solid rgba(116, 10, 199, 1)"}}>Ramesh Patel</div>
      <div class="border-b font-semibold  border-gray-200 p-2 w-[255px] max-sm:w-[330px]">Patient 1</div>
      <div className="border-b font-semibold  border-gray-200 p-2 w-[255px] max-sm:w-[330px]">Patient 2</div>
      <div className="border-b font-semibold  border-gray-200 p-2 w-[255px] max-sm:w-[330px]">Patient 3</div>
      <div className="border-b font-semibold  border-gray-200 p-2 w-[255px] max-sm:w-[330px]">Patient 4</div>
      <div className="border-b font-semibold  border-gray-200 p-2 w-[255px] max-sm:w-[330px]">Patient 5</div>
    </div>
  </div>
</div>

 <div className=" h-[20px] md:h-[99px] w-full md:w-[725px] max-sm:w-[346px] max-sm:h-[90px]"  style={ { backgroundColor:'#03BF9C'}}>
    <div className="flex items-center gap-10 relative h-[755px] h-[84px]  left-7 top-1 max-sm:left-2 top-1">
  <img className=" h-50 w-50 " alt="Rectangler" src={rec} />
  <div className=" text-white font-normal text-base absolute left-[60px]" style={{fontFamily: 'Open Snas',lineHeight: '24px' ,fontSize:'16px' ,fontWeight:'400'}}>Ramesh Patel</div>
</div>
    <div style={{backgroundColor:"rgba(253, 247, 217, 1)"}}>

        <div className="h-[678px] relative w-[725px] top-[10px] max-sm:w-[320px]" >
         
      <div className="h-[74px] left-[345px] absolute top-[13px] w-[350.5px] max-sm:left-[40px]">

        <div className=" h-[74px] relative w-[350px]  max-sm:w-[270px] max-sm:h-[50px]" style={{backgroundColor :'rgba(0, 230, 187, 0.1)'}}>
      <div>
        <p className=' text-black whitespace-nowrap absolute left-[15px] top-[10px]'  style={{fontSize:'14px',fontFamily: 'Poppins' ,fontWeight:'400'}} >Hello, I want to book an appointment</p>
        
         <div style={{  borderTop: '0px solid transparent',height:"3px",
      borderLeft: "20px solid rgba(0, 230, 187, 0.1)",
      borderBottom: "18px solid transparent"}} className=' max-sm:left-[270px] max-sm:bottom-[32px] absolute left-[350px] bottom-[56px]'></div>
        </div>   
         
        <div className="absolute top-[40px] left-[290px] h-6 flex items-center justify-center gap-1 max-sm:left-52 max-sm:top-[28px]">
                 
            <div className="text-gray-500 whitespace-nowrap"  style={{fontSize:'12px'}} >12:11</div>
               
            <img className="h-[9.5px] mr-[-1px] relative w-[10.5px]" alt="Vector" src={tic} />
          </div>
        </div>
      </div>


      <div className=" h-[74px] left-[345px] absolute w-[351px] top-[184px]  max-sm:w-[270px] max-sm:h-[50px] max-sm:top-[190px] max-sm:left-[48px]" style={{backgroundColor :'rgba(0, 230, 187, 0.1)'}}>
        <div className="h-[54px] left-[11px] relative top-[11px] w-[318px]">
         <div className='relative'> <p className="text-black whitespace-nowrap" style={{fontSize:'14px' ,fontFamily: 'Poppins',fontWeight:'400'}}>I would like to visit the doctor.</p>
         
         <div style={{  borderTop: '0px solid transparent',height:"3px",
      borderLeft: "20px solid rgba(0, 230, 187, 0.1)",
      borderBottom: "18px solid transparent"}} className=' max-sm:left-[259px] absolute left-[340px] bottom-[14px]'></div>
         </div>
          
          <div className="absolute top-[33px]  left-[290px]  h-6 flex items-center justify-center gap-1 max-sm:left-48 max-sm:top-[18px]">
            <div className="text-gray-500  whitespace-nowrap " style={{fontSize:'12px' }}>12:11</div>
            <img className="vector" alt="Vector" src={single} />
          </div>
        </div>
      </div>
 


      <div className=" h-[74px] left-[345px] absolute w-[351px] top-[283px]  max-sm:w-[300px] max-sm:h-[50px] max-sm:left-[20px]  max-sm:top-[250px]" style={{backgroundColor :'rgba(0, 230, 187, 0.1)'}}>
        
        <div className="h-[52px] left-[11px] relative top-[11px] w-[318px] ">
         <div className='relative'> <p className="text-black  whitespace-nowrap" style={{fontSize:'14px ', fontFamily: 'Poppins',fontWeight:'400'}}>At what time, doctor would be available?</p>

         <div style={{  borderTop: '0px solid transparent',height:"3px",
      borderLeft: "20px solid rgba(0, 230, 187, 0.1)",
      borderBottom: "18px solid transparent"}} className=' max-sm:left-[289px] absolute left-[340px] bottom-[14px]'>

         </div>
       </div>    
         
         
       
          <div className="absolute top-[31px] left-[290px] h-6 flex items-center justify-center gap-1 max-sm:left-56 max-sm:top-[18px]">
            <div className="text-gray-500 whitespace-nowrap" style={{fontSize:'12px'}}>12:11</div>
            <img className="material-symbols" alt="Material symbols" src={timer} />
          </div>
           
        </div>
       
      </div>

    <div className="h-[74px] left-[31px] absolute w-[371px] top-[102px] max-sm:w-[327px] max-sm:h-[70px] max-sm:left-[15px] max-sm:top-[80px]" style={{backgroundColor :'rgba(246, 246, 246, 1)'}}>
        <div className="h-[55px] left-[33px] relative top-[9px] w-[322px] max-sm:left-[14px]">
          <div className="h-[55px] relative w-[320px] ">
            <div className="absolute top-[38px] w-[46px] left-[280px] h-[16px] flex items-center justify-center gap-1 max-sm:left-[240px]">
              <div className="text-gray-500  whitespace-nowrap" style={{fontSize:'12px' }}>12:11</div>
              <img className="img" alt="Vector" src={tic} />
            </div>
            <div>
                <p className="text-black  relative whitespace-wrap" style={{fontSize:'14px' ,fontFamily: 'Poppins' ,fontWeight:'400'}}>
              Hello, Would you like virtual consultation or visit the doctor personally?
               <div style={{  borderTop: '0px solid transparent',height:"3px",
      borderRight: "20px solid rgba(246, 246, 246, 1)",
      borderBottom: "18px solid transparent"}} className=' max-sm:right-[330px] absolute right-[350px] bottom-[33px]'>

         </div>
            </p>
            </div>
          
           
          </div>
        </div>
      </div>
    </div>
   </div>
   
    <div  className='flex flex-row max-sm:relative gap-[10px] pl-[20px] h-[80px] pt-[20px]  max-sm:border-none border-l border-gray-400 max-sm:ml-6' >

      <div>
 <img  alt="Vector" src={windows} width={25} className=' max-sm:absolute max-sm:top-6 max-sm:right-[300px]' />
      </div>
      <div>
   <input
          type="text"
          placeholder="Type your message here"
          className="w-[622px] pl-3 py-1 rounded-lg border border-black focus:outline-none focus:border-gray-500 max-sm:w-[240px]"
        />
      </div>
    <div>
 <img className="img" alt="Vect" src={send} width={30} />
    </div>
    </div>

  </div>

      </div>
    </div>
  )
}

export default Home
 