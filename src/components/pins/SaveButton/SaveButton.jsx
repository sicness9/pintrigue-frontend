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

  const savePin = () => {
    addSave({
      posted_by: props.posted_by.posted_by.user_id,
      user_id: currentUser.user_id,
      pin_id: props.pin_id,
    })
      .then(getAllSaves({ user_id: currentUser.user_id }))
      .then(props.setIsSaved(true));
  };

  return (
    <SaveButtonStyles onClick={savePin}>
      <div className="btn-text">Save</div>
    </SaveButtonStyles>
  );
};

export default SaveButton;
