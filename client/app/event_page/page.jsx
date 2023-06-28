'use client';

import Link from 'next/link';
import { useEffect, useReducer, useState} from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useRouter } from 'next/navigation';
import { useUserContext } from '../context/user_context';
import DropDown from '../components/common/Dropdown';
import AboutUs from '../components/common/AboutUs';
import EventInfo from "../components/common/eventInfo";

export default function EventPage() {
  // const router  = useRouter();
//   const val = useUserContext();
  const [event_name,set_event_name] = useState("Innovision");
  const [event_tag,set_event_tag] = useState("Annual Techno Fest NITR");
  const [live,set_live] = useState(true);
  const [views,set_views] = useState("5000");
  const [file,set_file] = useState(null);
  const [frequency,set_frequency] = useState("Yearly");
  const [averageFootfall,set_averageFootfall] = useState(1500);
  const [tentativeMonth,set_tentativeMonth] = useState("June,July");
  const [runningFrom,set_runningFrom] = useState("2005");

    const props = {
        frequency:frequency, averageFootfall:averageFootfall, tentativeMonth:tentativeMonth, runningFrom:runningFrom
     };
  return (
    <>
        <div className='EventPage'>
            <div className='flex-horizontal'><h1>{event_name}</h1><span style={{"margin-left":"5px"}}>{event_tag}</span></div>
            <div className='buttons'>
                {live && <button class="round live"><span></span>live</button>}
                <button class="round"><AiFillEye/>{views}</button>
            </div>
            <div class="heropic" style={file!=null?{"background-image":`url(${(()=>{
                    let reader = new FileReader();
                    reader.readAsDataURL(e.target.files[0]);
                    reader.onload = ()=>{
                        set_file(reader.result);
                    }})()}`}:{"background-color":"red"}}>
            </div>
            <div style={{"display":"flex","justify-content":"space-around"}}>
            <AboutUs/>
            <EventInfo props={props}/>
            </div>
        </div>
    </>
  );
}
