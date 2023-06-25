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

  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
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

        <div >
          {" "}
          {institutionTypeData.map((item) => (
            <div>
              <input
                type="checkbox"
                checked={checked}
                onChange={handleCheckboxChange}
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
          {sponsperTypeData.map((item) => (
            <div>
              <input type="checkbox" />
              <label htmlFor="">{item}</label>
            </div>
          ))}
        </div>
      </section>

      <section >
        <div className="row-flex">
          <Icon
            icon={state[0] ? "teenyicons:right-solid" : "teenyicons:down-solid"}
          />
          <span> Region</span>
        </div>

        <div>
          {" "}
          {regionData.map((item) => (
            <div>
              <input type="checkbox" />
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
          {eventType.map((item) => (
            <div>
              <input type="checkbox" />
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
          {eventTypeLocation.map((item) => (
            <div>
              <input type="checkbox" />
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
      <div class="filter">
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
