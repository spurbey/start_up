"use client";

export const NotificationCard = ({ paragraph, className }) => {
  const baseClassName = "notification";
  const customClassName = `${baseClassName} ${className}`;

  return (
    <div className={customClassName}>
      <div className="user-profile"> </div>
      <p>{paragraph}</p>
    </div>
  );
};
export default function Notification() {
  return (
    <div className="notification-container">
      <p className="notification-title">Notifications</p>
      <NotificationCard
        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, architecto. Unde libero, dolores sed doloribus adipisci porro fuga repellat alias."
        // className="unread"
      />
      <NotificationCard
        paragraph="Lorem ipsum dolor sit amet consectetur ."
        className="unread"
      />
      <NotificationCard
        paragraph="Lorem ipsum dolor sit amrchitecto. Unde libero, dolores sed doloribus adipisci porro fuga repellat alias."
        className="unread"
      />
      <NotificationCard
        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. ."
        className="read"
      />
      <NotificationCard
        paragraph="Lorem ipsum dolt. Ea, architecto. Unde libero, dolores sed doloribus adipisci porro fuga repellat alias."
        className="read"
      />
    </div>
  );
}
