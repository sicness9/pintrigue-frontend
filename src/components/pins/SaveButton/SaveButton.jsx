import { useSelector } from "react-redux";

// styles
import { SaveButtonStyles } from "./SaveButton.styles";

  const currentUser = useSelector((state) => state.user.value);
  return (
    <SaveButtonStyles>
      <div className="btn-text">Save</div>
    </SaveButtonStyles>
  );
};

export default SaveButton;
