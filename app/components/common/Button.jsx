'use client';

export default function Button({ color = 'primary', handleClick, children }) {
  return (
    <>
      <button className={`button-${color}`} onClick={handleClick}>
        {children}
      </button>
    </>
  );
}
