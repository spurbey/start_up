'use client';

import Link from 'next/link';
import { useEffect, useReducer, useState} from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useRouter } from 'next/navigation';
import { useUserContext } from '../context/user_context';
import DropDown from '../components/common/Dropdown';

export default function CreateEvent() {
  const router  = useRouter();
//   const val = useUserContext();
const [event_name,set_event_name] = useState("name");
const [tag,set_tag] = useState("tag");
const [img,set_image] = useState(null);
const [img_src,set_image_src] = useState(null);
const [best_describes,set_best_describes] = useState("Technical");
const [falls_under,set_falls_under] = useState("College Event");
const [catagory,set_category] = useState("All India");
// const [sponsers_req,set_sponsers_req] = useState([]);
const [date,set_date] = useState("");
const [file,set_file] = useState(null);

const events_best_describe = [
    "Technical",
    "Cultural",
    "Enterpreneurship",
    "Sport",
    "Hackathon",
    "Star show",
    "case study",
    "techno Entrepreneurship",
    "others"];

    const event_falls_under = [
        "College Event",
        "social event",
        "annual event",
        "awareness",
        "others"
    ];

    const event_catagory = [
        "All india",
        "state",
        "city",
        "college",
        "area"
    ];

    // const event_sponser_req = [
    //     "Title sponser",
    //     "Media partner",
    //     "Event partner",
    //     "Education partner",
    //     "News partner",
    //     "Coverage Partner",
    //     "Co-presenter",
    //     "Co-powerer",
    //     "Housing partner",
    //     "Gaming partner",
    //     "government partner"
    // ]

  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem("event_name",event_name);
    router.push("/choose_sponsers");
    };


  return (
    <>
      <div className='CreateEventPage'>
        <form className='form-container' onSubmit={handleSubmit}>
          <h3 className='section-title'>Event Details</h3>
          <div className='input-field'>
            <label htmlFor='event_name'>
              Event Name <span className='required'>*</span>
            </label>
            <input
              placeholder='name'
              type='text'
              id='event_name'
              value={event_name}
              onChange={(e) => set_event_name(e.target.value )}
              required
            />
          </div>
          {/* /input-field */}
          <div className='input-field'>
            <label htmlFor='tag'>
              Tag of the event <span className='required'>*</span>
            </label>
            <input
              placeholder='tags'
              type='text'
              id='tag'
              value={tag}
              onChange={(e) => set_tag(e.target.value )}
              required
            />
          </div>
         {/*Event logo upload*/ }
            <div className='input-field'>
                <label htmlFor='img'>
                Upload Image <span className='required'>*</span>
                </label>
                {img && <img
                id="img"
                src={img_src}
                style={{"width":"100px","height":"100px","padding":"10px","display":"block"}}
                />}
                <input style={{"background-color":"white"}} type="file" id="img_upload" accept=".png,.jpg,.jpeg" onChange={e=>{
                    let reader = new FileReader();
                    set_image(e.target.files[0]);
                    reader.readAsDataURL(e.target.files[0]);
                    reader.onload = ()=>{
                        set_image_src(reader.result);
                    }
                }} required/>
            </div>
            <div className='input-field'>
                <label htmlFor='best_describes'>
                Your Event Best Describes <span className='required'>*</span>
                </label>
                <select  id="best_describes" onChange={e=>set_best_describes(e.target.value)} name="best_describes">
                    { 
                        events_best_describe.map(val=>
                        <option value={val}>{val}</option>
                        )
                        
                    }
                </select>
            </div>
            <div className='input-field'>
                <label htmlFor='falls_under'>
                Your Event Falls Under <span className='required'>*</span>
                </label>
                <select  id="falls_under" onChange={e=>set_falls_under(e.target.value)} name="falls_under">
                    { 
                        event_falls_under.map(val=>
                        <option value={val}>{val}</option>
                        )
                        
                    }
                </select>
            </div>
            <div className='input-field'>
                <label htmlFor='category'>
                Your Event Falls Under <span className='required'>*</span>
                </label>
                <select  id="category" onChange={e=>set_category(e.target.value)} name="category">
                    { 
                        event_catagory.map(val=>
                        <option value={val}>{val}</option>
                        )
                        
                    }
                </select>
            </div>
            <div className='input-field'>
                <label htmlFor='period'>
                Event Name <span className='required'>*</span>
                </label>
                <input
                placeholder='name'
                type='date'
                id='period'
                onChange={(e) => set_date(e.target.value )}
                required
                />
            </div>
            <div className='input-field'>
                <label htmlFor='brochure'>
                Upload Image <span className='required'>*</span>
                </label>
                <input style={{"background-color":"white"}} type="file" accept='.pdf' id="brochure" onChange={e=>{
                    let reader = new FileReader();
                    reader.readAsDataURL(e.target.files[0]);
                    reader.onload = ()=>{
                        set_file(reader.result);
                    }
                }} required/>
            </div>
            <button className='button button-secondary'>Next</button>
        </form>
      </div>
    </>
  );
}
