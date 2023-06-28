'use client'
import { useState } from "react";
import Filter from "../components/common/filter";


export default function HomePageClub(){
    const [hide_filter,set_hide_filter] = useState(false);
    return <>
        <div class="home-page">
            {!hide_filter && <Filter/>}
            <div className="event-bid-card-layout">
                Hello
            </div>
        </div>
    </>
}