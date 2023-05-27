export default function Notification({ user, children }) {
  return (
    <>
      <div className='notification'>
        <div className='user-profile'>
          {/* 
            **user profile picture here**. user will be provided
            from backend. 'USER PROFILE PICTURE' stylings will be done
            after backend is setup. 
          */}
        </div>
        <div className='message'>{children}</div>
      </div>
    </>
  );
}
