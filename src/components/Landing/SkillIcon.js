import React from "react";

export function SkillIcon({iconURL,href}) {
  return(
    <a className={'h-24 w-24 overflow-hidden block'} href={href}>
      <img src={iconURL} alt="" className={'block'}/>
    </a>
  )
}
