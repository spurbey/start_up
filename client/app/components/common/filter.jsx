import { Icon } from "@iconify/react";
import { useState } from "react";


function selections ({header,state,obj_list}){
    return <>
    <div>
        <div onClick={()=>state[1].call(!state[0])}>
            <Icon icon={state[0] ? "teenyicons:right-solid" : "teenyicons:down-solid"}/>
            <span>{header}</span>
        </div>
        {!state[0] && Object.entries(obj_list).map(e=><div>
            <input type="checkbox" value={e[1]}/>
            <label htmlFor="">{e[0]}</label>
        </div>)}
    </div>
    </>;
}

export default function Filter(){
    const [a,set_a] = useState(true);
    const all_types = {"Active":false,"Inactive":false};

    const [b,set_b] = useState(true);
    // const institution_types = {}

    return <>
        <div class="filter">
            <div className="header"> Filter</div>
            {selections({header:"All Types",state:[a,set_a],obj_list:all_types})}
        </div>
    </>
}