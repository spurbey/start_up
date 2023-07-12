"use client";
import React, { useState } from "react";
import ProfileInfo from "../components/common/ProfileInfo";
import AboutUs from "../components/common/AboutUs";
import BidsInfo from "../components/common/BidsInfo";
import Testimonials from "../components/event/Testimonials";
import Organizers from "../components/common/Organizers";
import Button from "../components/common/Button";
import { AiOutlinePlus } from "react-icons/ai";
import { FaHandshake } from "react-icons/fa";
import EventBriefs from "../components/event/EventsBrief";
import Carousel from "../components/common/Carousel";
import { useUserContext } from "../context/user_context";


const ClubPage = () => {
  const height = window.innerHeight;
  const [posx,setposx] = useState(-height*0.8);
  const [oc,setoc] = useState(0.5); 
  const val = useUserContext();
  const [editData,setEditData] = useState([]);
  const [modelOpen,setModelOpen] = useState(true);
  
  const pageEdit = async ()=>{
    if(val.clubCode == "p"){
      alert("please log in again");
      return;
    }
    
    setModelOpen(true);
    try{
      await fetch("http://localhost:8000/clubs?clubCode="+val.clubCode,{
          method:"GET"
        }).then(data=>{
          if(!data.ok) throw new Error("Not found");
          return data.json();
        }).then(data=>{
            setEditData([data[0].clubCode,data[0].clubName,data[0].about,
              data[0].facebook,data[0].instagram,data[0].twitter,data[0].linkedin]);
              setModelOpen(true);
            // console.log(data);
            // router.push('/club');
        });
    }catch{
      // alert("wrong password/email");
    }
  }
  const profileData = {
    photourl:
      "https://media.licdn.com/dms/image/C4D0BAQERkvt6h7NOvQ/company-logo_200_200/0/1658235706890?e=2147483647&v=beta&t=gUkiYC1fP2wkR2xiyP-Ezol0wGQn8taWb9bXPw6Ypj8",
    isOrganization: false,
    name: "Mathematica Club",
    isVerified: true,
    facebookLink: "https://www.facebook.com",
    linkedinLink: "https://www.linkedin.com"
  };
  const dummyOrganizers = [
    {
      name: "John Doe",
      profilePhoto: "",
      post: "President",
    },
    {
      name: "Jane Smith",
      profilePhoto: "",
      post: "Vice President",
    },
    {
      name: "Jane Smith",
      profilePhoto: "",
      post: "Vice President",
    },
    {
      name: "Jane Smith",
      profilePhoto: "",
      post: "Vice President",
    },
    {
      name: "Jane Smith",
      profilePhoto: "",
      post: "Vice President",
    },
    {
      name: "Jane Smith",
      profilePhoto: "",
      post: "Vice President",
    },
  ];
  const images = [
    {
      imageUrl:
        "https://educationbytes.in/wp-content/uploads/2022/07/NIT-rourkela.jpg",
      description: "Image 1 description",
    },
    {
      imageUrl:
        "data:image/jpeg;base64,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",
      description: "Image 2 description",
    },
    {
      imageUrl:
        "https://images.shiksha.com/mediadata/images/1607331878phpYmd02Y.jpeg",
      description: "Image 2 description",
    },
    {
      imageUrl:
        "https://images.shiksha.com/mediadata/images/1488266730php8RK6HL.jpeg",
      description: "Image 2 description",
    },
  ];
  const testimonials = [
    {
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      eventTitle: "Event 1",
      eventOrganizer: "Organizer 1",
    },
    {
      message: "Nulla facilisi. Sed at velit dapibus, fermentum odio eu.",
      eventTitle: "Event 2",
      eventOrganizer: "Organizer 2",
    },
    {
      message:
        "Nulla facilisi. Sed at velit dapibus, fermentum odio eu. Nulla facilisi. Sed at velit dapibus, fermentum odio eu. Nulla facilisi. Sed at velit dapibus, fermentum odio eu. Nulla facilisi. Sed at velit dapibus, fermentum odio eu. Nulla facilisi. Sed at velit dapibus, fermentum odio eu. Nulla facilisi. Sed at velit dapibus, fermentum odio eu. Nulla facilisi. Sed at velit dapibus, fermentum odio eu.",
      eventTitle: "Event 3",
      eventOrganizer: "Organizer 3",
    },
  ];

  const eventsBrief = [
    {
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      eventTitle: "Event 1",
      eventOrganizer: "Organizer 1",
    },
    {
      message:
        "Nulla facilisi. Sed at velit dapibus, fermentum odio eu. Nulla facilisi. Sed at velit dapibus, fermentum odio eu. Nulla facilisi. Sed at velit dapibus, fermentum odio eu. Nulla facilisi. Sed at velit dapibus, fermentum odio eu.",
      eventTitle: "Event 2",
      eventOrganizer: "Organizer 2",
    },
    {
      message:
        "Nulla facilisi. Sed at velit dapibus, fermentum odio eu. Nulla facilisi. Sed at velit dapibus, fermentum odio eu. Nulla facilisi. Sed at velit dapibus, fermentum odio eu. Nulla facilisi. Sed at velit dapibus, fermentum odio eu. Nulla facilisi. Sed at velit dapibus, fermentum odio eu. Nulla facilisi. Sed at velit dapibus, fermentum odio eu. Nulla facilisi. Sed at velit dapibus, fermentum odio eu.",
      eventTitle: "Event 3",
      eventOrganizer: "Organizer 3",
    },
  ];

  const joined = "2022-01-01";
  const averageRating = 8.5;
  const bidsWon = 10;
  const bidsParticipated = 20;

  const aboutUsContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat vestibulum augue, eu semper lectus dignissim ac. Fusce vel malesuada massa, sed malesuada felis. Aliquam fermentum sem a ex pellentesque, eget eleifend elit volutpat. Sed dapibus efficitur tristique.";
  
  window.addEventListener("wheel",(event)=>{
    if(window.scrollY === 0){
      setposx((-height*0.8));
      setoc(0.5);
    }
    else if(window.scrollY >= 350 ){
      setposx(0);
      setoc(0);
    }
    else {
      setposx(posx+event.deltaY);
      setoc(-window.scrollY/700+0.5);
    }
    // console.log(window.scrollY,posx);
  });

  const changeEdit = (e) =>{
    e.preventDefault();
    setModelOpen(false);
    console.log(e.target);
  }


  return (
    <div>
      
      <div className="club-model" style={{"display":`${modelOpen?"block":"none"}`}}>
        <div className='LoginPage'>
          <form className='form-container' onSubmit={changeEdit}>
            <h3 className='section-title'>Edit Club Page</h3>
            <div className='input-field'>
              <label htmlFor='club_name'>
                Club Name <span className='required'>*</span>
              </label>
              <input
                placeholder=''
                type='text'
                id='club_name'
                value={editData[1]}
                required
              />
            </div>
            
            <div className='input-field'>
              <label htmlFor='club_about'>
                About <span className='required'>*</span>
              </label>
              <input
                placeholder=''
                type='text'
                id='club_about'
                value={editData[2]}
                required
              />
            </div>

            <div className='input-field'>
              <label htmlFor='club_facebook'>
                Facebook 
              </label>
              <input
                placeholder=''
                type='text'
                id='club_facebook'
                value={editData[3]}
              />
            </div>

            <div className='input-field'>
              <label htmlFor='club_instagram'>
                Instagram 
              </label>
              <input
                placeholder=''
                type='text'
                id='club_instagram'
                value={editData[4]}
              />
            </div>

            <div className='input-field'>
              <label htmlFor='club_twitter'>
                Twitter 
              </label>
              <input
                placeholder=''
                type='text'
                id='club_twitter'
                value={editData[5]}
              />
            </div>

            <div className='input-field'>
              <label htmlFor='club_linkedin'>
                LinkedIn
              </label>
              <input
                placeholder=''
                type='text'
                id='club_linkedin'
                value={editData[6]}
              />
            </div>

            <button className='button-primary' style={{"padding":"20px"}}>Done</button>
          </form>
        </div>
      </div>
    <div className="club-page" style={{"display":`${!modelOpen?"block":"none"}`}}>
      <div className="profileinfo">
        <ProfileInfo data={profileData} pageEdit={pageEdit}/>
        <div className="club-buttons">
          <Button>
            <AiOutlinePlus className="club-icon" /> Create Event
          </Button>
          <Button>
            <FaHandshake className="club-icon" /> Collaborate
          </Button>
        </div>
      </div>
      <div className="about-bids">
        <div className="aboutus">
          <AboutUs content={aboutUsContent} />
        </div>
        <div className="bidsinfo">
          <BidsInfo
            joined={joined}
            averageRating={averageRating}
            bidsWon={bidsWon}
            bidsParticipated={bidsParticipated}
          />
        </div>
      </div>
      <div className="container-carousel" style={{"top":`${posx+"px"}`}}>
        {/* <h1>Sliding Image Carousel</h1> */}
        <Carousel images={images} oc={oc}/>
      </div>
      
      <div className="events-brief">
        <EventBriefs events={eventsBrief} />
      </div>
      <div className="testimonials">
        <Testimonials testimonials={testimonials} />
      </div>
      <div className="organizers">
        <Organizers organizers={dummyOrganizers} />
      </div>
    </div>
    </div>
  );
};

export default ClubPage;
