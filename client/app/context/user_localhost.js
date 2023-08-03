import {useUserContext} from "./user_context";

const saveContext = function(){
    let val = useUserContext();
    localStorage.setItem("_userName",val.userName);
    localStorage.setItem("_email",val.email);
    localStorage.setItem("_clubcode",val.clubcode);
    localStorage.setItem("_orgcode",val.orgcode);
}

const loadContext = function(){
    let val = useUserContext();
    val.setUserName(loadStorage.getItem("_userName"));
    val.setEmail(loadStorage.getItem("_email"));
    val.setClubCode(loadStorage.getItem("_clubcode"));
    val.setOrgCode(loadStorage.getItem("_orgcode"));
}

export {saveContext,loadContext};