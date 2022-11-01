// components
import UserHomeGrid from "../UserHomeGrid/UserHomeGrid";
import UserHomeFooter from "../../footers/UserHomeFooter/UserHomeFooter";

//styles
import { Wrapper } from "./SignedInUserHome.styles";

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
