import {FiMoreHorizontal} from "react-icons/fi";
import React, {useState} from "react";

export function MobileHeader() {
  const [isMenuOpen, toggleMobileMenu] = useState(false);
  return(
    <div className={'block md:hidden'}>
      <div className={'text-yellow-400 text-3xl flex flex-row-reverse px-2 pt-2'}>
        <FiMoreHorizontal/>
      </div>

      {isMenuOpen &&
      <div>
        Toggled Menu
      </div>
      }
    </div>
  )
}
