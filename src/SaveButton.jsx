import React, { useEffect, useState } from "react";
import useOnlineStatus from "./useOnlineStatus";
function SaveButton() {
    const isOnline = useOnlineStatus();
  return (
    <button className={isOnline ? "online" : "offline"}>
      {isOnline ? "Save" : "Reconnecting..."}
    </button>
  );
}

export default SaveButton;
