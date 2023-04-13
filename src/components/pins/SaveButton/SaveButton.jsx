import { useSelector } from "react-redux";

// styles
import { SaveButtonStyles } from "./SaveButton.styles";

// mutations
import {
  useAddSaveMutation,
  useGetAllSavesMutation,
} from "../../../slices/saveApiSlice";

const SaveButton = (props) => {
  const [addSave] = useAddSaveMutation();
  const [getAllSaves] = useGetAllSavesMutation();
  const currentUser = useSelector((state) => state.user.value);
  return (
    <SaveButtonStyles>
      <div className="btn-text">Save</div>
    </SaveButtonStyles>
  );
};

export default SaveButton;
