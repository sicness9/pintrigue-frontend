import { useState } from "react";

// components
import UserHomeGrid from "../UserHomeGrid/UserHomeGrid";
import AuthedHeader from "../AuthedHeader/AuthedHeader";

//styles
import { Wrapper } from "./SignedInUserHome.styles";

const SignedInUserHome = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <AuthedHeader />
      <Wrapper>
        <UserHomeGrid />
      </Wrapper>
    </>
  );
};

export default SignedInUserHome;
