'use client'

import { useRouter } from "next/navigation";
import { BiCheckbox } from "react-icons/bi"

export default function ChooseSponsers(){
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

    const handleSubmit = (e)=>{
        e.preventDefault();
        const checked = Array.from(document.querySelectorAll("input[type=checkbox]")).map(i=>i.checked);
        localStorage.setItem("sponsers",checked);
        router.push("/edit_sponsers");
    }

    return <div className="ChooseSponsers">
        <h1 className="title">Sponsership Details</h1>
        <h3 className="sub-title">What type of sponsers do you want?</h3>
        <div style={{"margin-top":"5vh","text-align":"center","width":"50vw"}} >
            {sponsers.map(i=>(<div  className="button-primary" style={{"margin":"5px"}}><input type="checkbox" id={i}/><label htmlFor={i}>{i}</label><br/></div>))}
        </div>
        <button onClick={handleSubmit} className="button-secondary" style={{"margin":"5vh 0"}}> Next</button>
    </div>
}