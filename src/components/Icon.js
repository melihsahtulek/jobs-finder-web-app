import * as Icons from "react-icons/md";
import React from "react";

const Icon = ({ size, icon, color }) => {
  const AppIcon = icon ? Icons[icon] : "";
  return AppIcon !== ("" || undefined) ? <AppIcon size={size} color={color} /> : "";
};

export default Icon;
