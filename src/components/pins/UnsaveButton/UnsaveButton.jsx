// mutations
import {
  useRemoveSaveMutation,
  useGetAllSavesMutation,
} from "../../../slices/saveApiSlice";

// styles
import { UnsaveButtonStyles } from "./UnsaveButton.styles";

const UnsaveButton = (props) => {
  const [getAllSaves] = useGetAllSavesMutation();
  const [removeSave] = useRemoveSaveMutation();

  const unSavePin = () => {
    removeSave({ save_id: props.saveId, user_id: props.currentUser })
      .unwrap()
      .then(getAllSaves({ user_id: props.currentUser }))
      .then(props.setIsSaved(false));
  };

  return (
    <UnsaveButtonStyles onClick={unSavePin}>
      <div className="btn-text">Saved</div>
    </UnsaveButtonStyles>
  );
};

export default UnsaveButton;
