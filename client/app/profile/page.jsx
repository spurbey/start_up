"use client";
import React, { useState, useEffect } from "react";
import { AiFillMessage } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useUserContext } from "../context/user_context";
import DropDown from "../components/common/Dropdown";
import Button from "../components/common/Button";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [joinedClubs, setJoinedClubs] = useState([]);
  const [headClubs, setHeadClubs] = useState([]);

  const val = useUserContext();

  useEffect(() => {
    const p = {
      username: val.userName,
      email: val.email,
    };
    setUser(p);
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }
  const profilePicUrl =
    user.profilePicUrl ||
    "https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png";

  const createClub = async ()=>{
    if(val.email == "p"){
      alert("please log in again");
      return;
    }
    const credential = {
          "ownerId": val.email,
          "clubName": "ABC club",
          "about": "This is a club."
      };
    try {
      await fetch("http://localhost:8000/createClub",{
        method:"POST",
        headers:{
          "content-type":"application/json",
        },
        body:JSON.stringify(credential)
      }).then(data=>{
        // console.log(data);
        if(!data.ok) throw new Error("Not found");
        return data.json();
      }).then(data=>{
          val.setClubCode(data.data.clubCode);
          router.push('/club');
      })
    }catch{
      try{
        await fetch("http://localhost:8000/clubs?ownerId="+val.email,{
          method:"GET"
        }).then(data=>{
          // console.log(data);
          if(!data.ok) throw new Error("Not found");
          return data.json();
        }).then(data=>{
            val.setClubCode(data[0].clubCode);
            router.push('/club');
        })
      }catch{
        console.log("Still didn't work")
      }
    }
  }


  const createOrg = async ()=>{
    if(val.email == "p"){
      alert("please log in again");
      return;
    }
    const credential = {
          "ownerId": val.email,
          "orgName": "ABC org",
          "about": "This is a club."
      };
    try {
      await fetch("http://localhost:8000/orgs",{
        method:"POST",
        headers:{
          "content-type":"application/json",
        },
        body:JSON.stringify(credential)
      }).then(data=>{
        if(!data) throw new Error("Not found");
        return data.json();
      }).then(data=>{
          // console.log(data);
          val.setOrgCode(data.data.orgCode);
          router.push('/organization');
      })
    }catch{
      try{
        await fetch("http://localhost:8000/orgs?ownerId="+val.email,{
          method:"GET"
        }).then(data=>{
          // console.log(data);
          if(!data) throw new Error("Not found");
          return data.json();
        }).then(data=>{
            val.setOrgCode(data[0].orgCode);
            router.push('/organization');
        })
      }catch{
        console.log("Still didn't work")
      }
    }
  }

  return (
    <div className="profile">
      <div className="profile-header">
        <div className="profile-pic-wrapper">
          <img
            className="profile-pic"
            src={profilePicUrl}
            alt="Profile Picture"
          />
        </div>
        <div className="profile-info" style={{"display":"block"}}>
          <h1 className="name">{user.name}</h1>
          <h2 className="username">{user.username}</h2>
          <button className="button button-secondary">Edit Profile</button>
        </div>
        <div className="side-header">
          <div className="icons">
            <span className="chat-icon">
              <AiFillMessage />
            </span>
            <span className="notification-icon">
              <IoMdNotifications />
            </span>
          </div>
          <div className="create-club-organization">
            <Button className="button-primary" handleClick={createClub}>
              <BsFillPlusCircleFill className="p-icon" />
              Create Club
            </Button>
          </div>
          <br/>
          <div className="create-club-organization">
            <Button className="button-primary" handleClick={createOrg}>
              <BsFillPlusCircleFill className="p-icon" />
              Create Organization
            </Button>
          </div>
        </div>
      </div>

      <div className="p-search">
        <input
          type="text"
          placeholder="Search by name/code"
          className="search-input"
        />
        <Button className="button-primary">JOIN</Button>
      </div>
      <DropDown options={joinedClubs.map((club) => club.name)}>
        Joined Club/Organization
      </DropDown>
      <DropDown options={headClubs.map((club) => club.name)}>
        Head of Club/Organization
      </DropDown>
    </div>
  );
};

export default ProfilePage;
