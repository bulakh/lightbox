import React from "react";
import cn from "classnames";
import styles from './CloseButton.module.scss'


function CloseButton({position}) {

  return (
    <button className={cn(styles.cross, position)} data-name='close' />
  )
}

export default CloseButton;
