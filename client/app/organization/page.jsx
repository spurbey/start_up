'use client'
import React from "react";
import { useState } from "react";
import ProfileInfo from "../components/common/ProfileInfo";
import AboutUs from "../components/common/AboutUs";
import BidsInfo from "../components/common/BidsInfo";
import Testimonials from "../components/event/Testimonials";
import QuestionAns from "../components/common/QuestionAns";
import { useUserContext } from "../context/user_context";
import Button from "../components/common/Button";
import { AiOutlinePlus } from "react-icons/ai";
import { FaHandshake } from "react-icons/fa";

// const OrganizationPage = () => {
//   const profileData = {
//     photourl:
//       "https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1",
//     isOrganization: true,
//     name: "Google",
//     isVerified: true,
//     facebookLink: "https://www.facebook.com",
//     linkedinLink: "https://www.linkedin.com",
//   };

//   const aboutUsContent =
//     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias eligendi culpa distinctio dolor dolorum excepturi eius blanditiis aliquam! Quasi facilis sed vitae, minima omnis dicta et necessitatibus natus quisquam recusandae.";
//   const joined = "2022-01-01";
//   const averageRating = 8.5;
//   const bidsWon = 10;
//   const bidsParticipated = 20;

//   const questionsAndAnswers = [
//     {
//       question: "What can you expect from us?",
//       answer: "We provide Sponsorship.",
//     },
//     {
//       question: "Where do we sponsor?",
//       answer: "College events, Celebrity events.",
//     },
//     {
//       question: "What we expect from events?",
//       answer: "Promotion.",
//     },
//   ];

//   const testimonials = [
//     {
//       message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//       eventTitle: "Event 1",
//       eventOrganizer: "Organizer 1",
//     },
//     {
//       message: "Nulla facilisi. Sed at velit dapibus, fermentum odio eu.",
//       eventTitle: "Event 2",
//       eventOrganizer: "Organizer 2",
//     },
//     {
//       message:
//         "Nulla facilisi. Sed at velit dapibus, fermentum odio eu. Nulla facilisi. Sed at velit dapibus, fermentum odio eu. Nulla facilisi. Sed at velit dapibus, fermentum odio eu. Nulla facilisi. Sed at velit dapibus, fermentum odio eu. Nulla facilisi. Sed at velit dapibus, fermentum odio eu. Nulla facilisi. Sed at velit dapibus, fermentum odio eu. Nulla facilisi. Sed at velit dapibus, fermentum odio eu.",
//       eventTitle: "Event 3",
//       eventOrganizer: "Organizer 3",
//     },
//   ];
//   const eventSponsoredContent = ["Bulletin", "Innovision", "Cosmopolition"];
//   return (
//     <div className="org-page">
//       <div className="profileinfo">
//         <ProfileInfo data={profileData} />
//       </div>
//       <div className="about-bids">
//         <div className="aboutus">
//           <AboutUs content={aboutUsContent} />
//         </div>
//         <div className="bidsinfo">
//           <BidsInfo
//             joined={joined}
//             averageRating={averageRating}
//             bidsWon={bidsWon}
//             bidsParticipated={bidsParticipated}
//           />
//         </div>
//       </div>
//       <div className="org-row-2">
//         <div className="questions-answers">
//           {questionsAndAnswers.map((qa, index) => (
//             <QuestionAns
//               key={index}
//               question={qa.question}
//               answer={qa.answer}
//             />
//           ))}
//         </div>
//         <div className="event-sponsored">
//           <h2 className="event-sponsored-title">Events Sponsored</h2>
//           <ul className="event-sponsored-content">
//             {eventSponsoredContent.map((item, index) => (
//               <li key={index}>
//                 <span className="dot"></span>
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//       <div className="testimonials">
//         <Testimonials testimonials={testimonials} />
//       </div>
//     </div>
//   );
// };



const OrganizationPage = () => {
  const val = useUserContext();
  const [editData,setEditData] = useState([]);
  const [modelOpen,setModelOpen] = useState(false);
  const [profileData,setProfileData] = useState([]);
  
  const pageEdit = async ()=>{
    if(val.orgCode == "p"){
      alert("please log in again");
      return;
    }
    
    setModelOpen(true);
    try{
      await fetch("http://localhost:8000/orgs?orgCode="+val.orgCode,{
          method:"GET"
        }).then(data=>{
          if(!data.ok) throw new Error("Not found");
          return data.json();
        }).then(data=>{
            setEditData([data[0].orgCode,data[0].orgName,data[0].about,
              data[0].facebook,data[0].instagram,data[0].twitter,data[0].linkedin,data[0]._id]);
              setModelOpen(true);
            // console.log(data);
            // router.push('/club');
        });
    }catch{
      // alert("wrong password/email");
    }
  }
  const [dummyOrganizers,setDummyOrganizers] = useState([
    {
      name: "John Doe",
      profilePhoto: "",
      post: "President",
    }
  ]);
  const testimonials = [
    {
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      eventTitle: "Event 1",
      eventOrganizer: "Organizer 1",
    },
  ];
    const eventSponsoredContent = ["Bulletin", "Innovision", "Cosmopolition"];

  const questionsAndAnswers = [
    {
      question: "What can you expect from us?",
      answer: "We provide Sponsorship.",
    },
    {
      question: "Where do we sponsor?",
      answer: "College events, Celebrity events.",
    },
    {
      question: "What we expect from events?",
      answer: "Promotion.",
    },
  ];


  // const eventsBrief = [
  //   {
  //     message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //     eventTitle: "Event 1",
  //     eventOrganizer: "Organizer 1",
  //   },
  // ];

  const joined = "2022-01-01";
  const averageRating = 8.5;
  const bidsWon = 10;
  const bidsParticipated = 20;

  const [aboutUsContent,setAboutUsContent] =
    useState("Lorem ipsum entum sem a ex pellentesque, eget eleifend elit volutpat. Sed dapibus efficitur tristique.");
  
  async function load(){
    try{
     await fetch("http://localhost:8000/orgs?orgCode="+val.orgCode,{
        method:"GET"
      }).then(data=>{
        if(!data) throw new Error("Not found");
        return data.json();
      }).then(data=>{
          let p2 = [data[0].orgName,data[0].verified,data[0].facebook || " ",data[0].linkedin || " "
          ,data[0].twitter || " ",data[0].instagram || " ",data[0].orgCode];
          // const p2 = {name:profileData.name, isVerified:profileData.isVerified,facebookLink:profileData.facebookLink
          // ,linkedinLink:profileData.linkedinLink,instagramLink:profileData.instagramLink,twitterLink:profileData.twitterLink};
          
          // console.log(data,p2);
          setProfileData(p2);
          setAboutUsContent(data[0].about);
          console.log("\n1: ",profileData,aboutUsContent)
      });
    }catch{
      // alert("wrong password/email");
    }
  }

  const changeEdit = async (e) =>{
    e.preventDefault();
    setModelOpen(false);
    const c = e.target.querySelectorAll("input");
    const cname = c[0].value;
    const cabout = c[1].value;
    const cfb = c[2].value;
    const cins = c[3].value;
    const ctw = c[4].value;
    const cln = c[5].value;
    try{
      await fetch("http://localhost:8000/orgs",{
          method:"PUT",
          headers:{
            "content-type": "application/json"
          },
          body: JSON.stringify({
            _id: editData[7],//"64ae8ee090e6dd708b34f3b3",//editData[7],
            orgName:cname,
            about:cabout,
            facebook:cfb,
            instagram:cins,
            twitter:ctw,
            linkedin:cln
          })
        }).then(data=>{
          if(!data) throw new Error("Not found");
          // console.log("kelek")
          return data.json();
        }).then(async data=>{
            setTimeout(await load(),1000);
        });
    }catch{
      // alert("wrong password/email");
    }
    // console.log(c[0],cname);
  }

  (async()=>{
    if(profileData.length == 0){
      setTimeout(await load(),1000);
    }
  })();
  // console.log(profileData,aboutUsContent)
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
                onChange={e=>{
                  const c = e.target.value;
                  const p = [editData[0],c,editData[2],editData[3],editData[4],editData[5],editData[6],editData[7]];
                  setEditData(p);
                }}
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
                onChange={e=>{
                  const c = e.target.value;
                  const p = [editData[0],editData[1],c,editData[3],editData[4],editData[5],editData[6],editData[7]];
                  setEditData(p);
                }}
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
                value={editData[3]}onChange={e=>{
                  const c = e.target.value;
                  const p = [editData[0],editData[1],editData[2],c,editData[4],editData[5],editData[6],editData[7]];
                  setEditData(p);
                }}
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
                onChange={e=>{
                  const c = e.target.value;
                  const p = [editData[0],editData[1],editData[2],editData[3],c,editData[5],editData[6],editData[7]];
                  setEditData(p);
                }}
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
                onChange={e=>{
                  const c = e.target.value;
                  const p = [editData[0],editData[1],editData[2],editData[3],editData[4],c,editData[6],editData[7]];
                  setEditData(p);
                }}
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
                onChange={e=>{
                  const c = e.target.value;
                  const p = [editData[0],editData[1],editData[2],editData[3],editData[4],editData[5],c,editData[7]];
                  setEditData(p);
                }}
              />
            </div>

            <button className='button-primary' style={{"padding":"20px"}}>Done</button>
          </form>
        </div>
      </div>
    <div className="club-page" style={{"display":`${!modelOpen?"block":"none"}`}}>
      <div className="profileinfo">
        <ProfileInfo data={profileData.length==0?{isOrganization:true}:{name:profileData[0],isVerified:profileData[1],facebookLink:profileData[2],
        instagramLink:profileData[5],linkedinLink:profileData[3],twitterLink:profileData[4],isOrganization:true}} pageEdit={pageEdit}/>
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
      <div className="org-row-2">
        <div className="questions-answers">
          {questionsAndAnswers.map((qa, index) => (
            <QuestionAns
              key={index}
              question={qa.question}
              answer={qa.answer}
            />
          ))}
        </div>
        <div className="event-sponsored">
          <h2 className="event-sponsored-title">Events Sponsored</h2>
          <ul className="event-sponsored-content">
            {eventSponsoredContent.map((item, index) => (
              <li key={index}>
                <span className="dot"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="testimonials">
        <Testimonials testimonials={testimonials} />
      </div>
    </div>
    </div>
  );
};


export default OrganizationPage;
