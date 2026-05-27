import React from "react";
import { Icon } from '@iconify/react';

export default function Toggle({ onFancyClick, toggleMenu }) {
  return (
    <Icon icon="healthicons:ui-menu" width="30" height="30" className="text-white cursor-pointer" onClick={toggleMenu} />
  );
}
