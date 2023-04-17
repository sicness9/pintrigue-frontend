import { useState, useEffect } from "react";

// components
import PinDetails from "../PinDetails/PinDetails";
import PinDisplay from "../PinDisplay/PinDisplay";
import PinViewSmall from "../PinViewSmall/PinViewSmall";

// styles
import { PinViewContainer, PinViewContent } from "./PinView.styles";

// mutations
import { useGetPinByIdMutation } from "../../../slices/pinApiSlice";

const PinView = () => {
  // current pin being viewed
  const [pin, setPin] = useState({});

  // api function to get current pin
  const [getPinById, { isLoading }] = useGetPinByIdMutation();

  useEffect(() => {
    const pinId = window.location.pathname.split("/")[2];
    getPinById({ pinId: pinId })
      .unwrap()
      .then((res) => setPin(res))
      .catch((error) => {
        console.log("Error fetching pin for ID: ", pinId, error);
      });
  }, []);

  console.log(pin);
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <PinViewSmall pin={pin} />
          <PinViewContainer>
            <PinViewContent>
              <div className="pin-image-view-container">
                <PinDisplay
                  image_id={{
                    url: `${import.meta.env.VITE_CDN_URL}${pin.image_id}`,
                  }}
                />
              </div>
              <PinDetails pin={pin} />
            </PinViewContent>
          </PinViewContainer>
        </>
      )}
    </>
  );
};

export default PinView;
