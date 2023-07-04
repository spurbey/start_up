import { Icon } from "@iconify/react";
import { useState } from "react";

function selections({ header, state, obj_list }) {
  const institutionTypeData = [
    "IITS",
    "IIMS",
    "NITS",
    "AIMS",
    "BITS",
    "Others",
  ];
  const sponsperTypeData = [
    "Title sponser",
    "Media partner",
    "Event partner",
    "education partner",
    "News partner",
  ];
  const regionData = ["all india", "state"];
  const eventType = [
    "annual",
    "enternship",
    "hackathon",
    "awareness",
    "technical",
    "cultural",
    "sport",
    "star show",
    "case study",
    "others",
  ];
  const eventTypeLocation = ["hybrid", "offline", "online"];

  const [checkedInstitution, setCheckedInstitution] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const [checkedSponserShip, setCheckedSponserShip] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const [checkedRegion, setCheckedRegion] = useState([false, false]);
  const [checkedEventType, setCheckedEventType] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [checkedEventLocation, setCheckedEventLocation] = useState([
    false,
    false,
    false,
  ]);

  const handleInstitutionCheckboxChange = (event, i) => {
    checkedInstitution[i] = event.target.checked;
    let p = [...checkedInstitution];
    setCheckedInstitution(p);
  };
  const handleSponsershipCheckboxChange = (event, i) => {
    checkedSponserShip[i] = event.target.checked;
    let p = [...checkedSponserShip];
    setCheckedSponserShip(p);
  };
  const handleRegionCheckboxChange = (event, i) => {
    checkedRegion[i] = event.target.checked;
    let p = [...checkedRegion];
    setCheckedRegion(p);
  };
  const handleEventTypeCheckboxChange = (event, i) => {
    checkedEventType[i] = event.target.checked;
    let p = [...checkedEventType];
    setCheckedEventType(p);
  };
  const handleEventLocationCheckboxChange = (event, i) => {
    checkedEventLocation[i] = event.target.checked;
    let p = [...checkedEventLocation];
    setCheckedEventLocation(p);
  };

  return (
    <>
      <div>
        <div onClick={() => state[1].call(!state[0])}>
          <Icon
            icon={state[0] ? "teenyicons:right-solid" : "teenyicons:down-solid"}
          />
          <span>{header}</span>
        </div>

        {!state[0] &&
          Object.entries(obj_list).map((e) => (
            <div>
              <input type="checkbox" value={e[1]} />
              <label htmlFor="">{e[0]}</label>
            </div>
          ))}
      </div>

      <section>
        <div className="row-flex">
          <Icon
            icon={state[0] ? "teenyicons:right-solid" : "teenyicons:down-solid"}
          />
          <span>Institution Type</span>
        </div>

        <div>
          {" "}
          {institutionTypeData.map((item, idx) => (
            <div key={idx}>
              <input
                type="checkbox"
                checked={checkedInstitution[idx]}
                onChange={(event) =>
                  handleInstitutionCheckboxChange(event, idx)
                }
              />
              <label htmlFor="">{item}</label>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="row-flex">
          <Icon
            icon={state[0] ? "teenyicons:right-solid" : "teenyicons:down-solid"}
          />
          <span>Sponsership Type</span>
        </div>

        <div>
          {" "}
          {sponsperTypeData.map((item, idx) => (
            <div key={idx}>
              <input
                type="checkbox"
                checked={checkedSponserShip[idx]}
                onChange={(event) =>
                  handleSponsershipCheckboxChange(event, idx)
                }
              />
              <label htmlFor="">{item}</label>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="row-flex">
          <Icon
            icon={state[0] ? "teenyicons:right-solid" : "teenyicons:down-solid"}
          />
          <span> Region</span>
        </div>

        <div>
          {" "}
          {regionData.map((item, idx) => (
            <div key={idx}>
              <input
                type="checkbox"
                checked={checkedRegion[idx]}
                onChange={(event) => handleRegionCheckboxChange(event, idx)}
              />
              <label htmlFor="">{item}</label>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="row-flex">
          <Icon
            icon={state[0] ? "teenyicons:right-solid" : "teenyicons:down-solid"}
          />
          <span> Event Type</span>
        </div>

        <div>
          {" "}
          {eventType.map((item, idx) => (
            <div key={idx}>
              <input
                type="checkbox"
                checked={checkedEventType[idx]}
                onChange={(event) => handleEventTypeCheckboxChange(event, idx)}
              />
              <label htmlFor="">{item}</label>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="row-flex">
          <Icon
            icon={state[0] ? "teenyicons:right-solid" : "teenyicons:down-solid"}
          />
          <span> Event Type Location</span>
        </div>

        <div>
          {" "}
          {eventTypeLocation.map((item, idx) => (
            <div key={idx}>
              <input
                type="checkbox"
                checked={checkedEventLocation[idx]}
                onChange={(event) =>
                  handleEventLocationCheckboxChange(event, idx)
                }
              />
              <label htmlFor="">{item}</label>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default function Filter() {
  const [a, set_a] = useState(true);
  const all_types = { Active: false, Inactive: false };

  const [b, set_b] = useState(true);
  // const institution_types = {}

  return (
    <>
      <div className="filter">
        <div className="header"> Filter</div>
        {selections({
          header: "All Types",
          state: [a, set_a],
          obj_list: all_types,
        })}
      </div>
    </>
  );
}
