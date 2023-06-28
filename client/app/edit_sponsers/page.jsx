'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EditSponsers(){
    const router = useRouter();
    const sponsers = [
        "Title sponser",
        "Media partner",
        "Event partner",
        "Education partner",
        "News partner",
        "Coverage Partner",
        "Co-presenter",
        "Co-powerer",
        "Housing partner",
        "Gaming partner",
        "government partner"
    ];
    const bids_val=[1,2,3,4,5,10,15,20,25,30,35,40,45,50,100];
    const [val,setval] = useState(0);
    const [figure,setfigure] = useState("K");
    const [bidunit,setbidunit] = useState("1K");
    const correct = localStorage.getItem("sponsers").split(",");

    const handleSubmit = (e)=>{
        e.preventDefault();
        localStorage.removeItem("sponsers");
        router.push("./edit_collaborators");
    }
    // console.log(correct)
    return <div className="ChooseSponsers">
        <h1>Bidding Price</h1>
        {correct.map((i,j)=>i=="true" && <div className="sponserEditor">
        <h3>{sponsers[j]}</h3>
            <div className="input-field">
                <label>Minimum Starting Bid</label>
                <input className="input" onChange={(e)=>setval(e.target.value)} type="number" placeholder="0"/>
                <select onChange={(e)=>setfigure(e.target.value)}>
                    <option value="K">K</option>
                    <option value="M">M</option>
                </select>
            </div>
            <div className="input-field">
                <label>Bid Unit</label>
                <select onChange={(e)=>setbidunit(e.target.value)}>
                    {bids_val.map(value=><option value="K">{value}K</option>)}
                </select>
            </div>
        </div>)}
        <button onClick={handleSubmit} className="button-secondary" style={{"margin":"5vh 0"}}> Next</button>
    </div>
}