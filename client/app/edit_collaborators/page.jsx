'use client';

import { useState } from "react";
import Button from "../components/common/Button";
import { Icon } from '@iconify/react';

export default function EditCollaborators(){
    // const event_name = localStorage.getItem("event_name"); 
    const [result,set_result] = useState([{name:"name",logo:"img",requested:false,friend:false,loc:"Odisha"}]);
    const [change,set_change] = useState(0);
    const filter = (e)=>{
        e.preventDefault();
        let temp = [{name:"name",friend:false,loc:"Odisha"}];
        // api call to fill temp list
        check_collaboration(temp);
        check_friend(temp);
        set_result(temp);
    }
    const check_collaboration = (temp) => {};
    const check_friend = (temp) => {};
    const loc = ["Odisha"];
    // const [club_collaborated], it is yet to be implemented in database
    return <div className="EditCollaborators">
        <div style={{"padding":"16px 0px"}}><h1 className="title">Partner with Collaborator</h1></div>
        <form className='form-container'>
          <div className='input-field'>
            <div>
                <label htmlFor='keyword'>
                Search by Keywoard
                </label>
                <input
                placeholder='Enter college name/club name'
                type='text'
                id='keyword'
                required
                />
            </div>
            <div>
                <label htmlFor='loc'>
                Search By Location
                </label>
                <select
                type='text'
                id='loc'
                required
                >
                    {loc.map(k=><option value={k}>{k}</option>)}
                </select>
            </div>
          </div>
          <button className="button-secondary" onClick={filter}>Search</button>
        </form>
        <div className="search_result">
            {result.map((val,i)=>{
                // console.log(val);
                return <div className="coll-card">
                    <div className="coll-profile">
                        <image style={{"width":"60px","height":"60px","background":"red"}} src={val.logo}/>
                        <div style={{"display":"flex","flex-direction":"column","justifyContent":"center"}}>
                            <span>{val.name}</span>
                            <span>{val.loc}</span>
                        </div>
                    </div>
                    
                    <div className="coll-buttons">
                        <button className="button-primary coll-button"><Icon icon="charm:message"/>Send Message</button>
                        <button className="button-primary coll-button" disable><Icon icon="pepicons-pop:handshake"/>{!val.requested ? "Request Collaboration" : "Requested"}</button>
                    </div>
                    <span class="coll-friend"><Icon icon={val.friend?"material-symbols:person-add":"simple-icons:handshake"}/></span>
                </div>
            })}
        </div>
        {result!=null && result.length > change+1 && <button className="button-primary friend" onClick={()=>{
            if(change+10<result.length) set_change(change + 10);
            else set_change(result.length-1)
        }}>More ...</button>}
    </div>
}