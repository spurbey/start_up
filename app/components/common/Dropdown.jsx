'use client';

import { useState } from 'react';
import { BsCaretDownFill, BsCaretUpFill } from 'react-icons/bs';

/*
# TODO:
- button shoul be available for 5 different colors.
- change button styling & props passing 
- separate style file for dropdown component
*/

export default function DropDown({
  options = [],
  color = 'primary',
  children,
}) {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <>
      <div className='dropdown'>
        <button
          className={`button-${color} ${showOptions && 'active'}`}
          onClick={() => setShowOptions(!showOptions)}
        >
          {showOptions ? <BsCaretUpFill /> : <BsCaretDownFill />}
          {children}
        </button>

        {showOptions ? (
          <ul className={`dropdown-options dropdown-options-${color}`}>
            {options.map((option, idx) => (
              <li key={idx} className='option'>
                {option}
              </li>
            ))}
          </ul>
        ) : (
          ''
        )}
      </div>
    </>
  );
}