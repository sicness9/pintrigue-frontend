// components
import UserHomeGrid from "../UserHomeGrid/UserHomeGrid";
import UserHomeFooter from "../../../UI/footer/UserHomeFooter/UserHomeFooter";

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
