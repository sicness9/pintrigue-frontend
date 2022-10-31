import { useContext, useEffect, useState } from "react";

// components
import UserHomeGrid from "../UserHomeGrid/UserHomeGrid";
import AuthedHeader from "../AuthedHeader/AuthedHeader";
import UserHomeFooter from "../UserHomeFooter/UserHomeFooter";

//styles
import { Wrapper } from "./SignedInUserHome.styles";

// context
import { SuggestionContext } from "../../Context/SuggestionContext";

const SignedInUserHome = () => {
  return (
    <>
      <Wrapper>
        <UserHomeGrid />
      </Wrapper>
      <UserHomeFooter />
    </>
  );
};

export default SignedInUserHome;
