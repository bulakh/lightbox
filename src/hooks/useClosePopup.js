import { useEffect } from "react";


export const useClosePopup = (setPopup, setDefaultState) => {
  const closeLightboxKeyHandler = (e) => {
    if (e.keyCode  === 27) {
      setPopup(false);
      setDefaultState();
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", closeLightboxKeyHandler, false);

    return () => {
      document.removeEventListener("keydown", closeLightboxKeyHandler, false);
    };
  });
}
