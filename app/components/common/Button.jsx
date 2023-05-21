'use client';

export default function Button({ type = 'primary', handleClick, children }) {
  return (
    <>
      <button className={`button-${type}`} onClick={handleClick}>
        {children}
      </button>
    </>
  );
}
