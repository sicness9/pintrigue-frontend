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

  return (
    <UnsaveButtonStyles>
      <div className="btn-text">Saved</div>
    </UnsaveButtonStyles>
  );
};

export default UnsaveButton;
