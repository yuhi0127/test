// 스타일 Import
import './style/index.css';

// 컴포넌트 Import
// 라이브러리 Import
import {useState} from "react";
import {useInterval} from 'usehooks-ts';


const Clock=()=>{
   const [colonState,setColonState]=useState(true);
   const [time,setTime]=useState(new Date());

   const days=['SUN','MON','TUES','WEDN','THUS','FRI','SAT'];
   const now={
      year:time.getFullYear(),
      month:String(time.getMonth()+1).padStart(2,'0'),
      date:String(time.getDate()).padStart(2,'0'),
      APM:(time.getHours()>=12)?'PM':'AM',
      hour:(time.getHours()>11)?(
            String(time.getHours()-12).padStart(2,'0'))
         :(
            String(time.getHours()).padStart(2,'0'))
            ,
      minutes:String(time.getMinutes()).padStart(2,'0'),
      seconds:String(time.getSeconds()).padStart(2,'0'),
      mseconds:time.getMilliseconds(),
      day:days[time.getDay()]
   };

   useInterval(()=>{
      setTime(new Date());
   },1000);

   useInterval(()=>{
      setColonState(!colonState);
   },500);
   
   return(
      <div className="wrap">
         <div>
            <p className="year">{now.year}</p>
            <p className="monthdate">{now.month}{now.date}</p>
         </div>

         <div>
            <p className="AMPM">{now.APM}</p>
            <p className="time">
               {now.hour}
               <span style={{ opacity: colonState ? 1 : 0 }}>:</span>
               {now.minutes}
            </p>
            <p className="day">({now.day})</p>
         </div>
      </div>
   )
};


export default Clock;