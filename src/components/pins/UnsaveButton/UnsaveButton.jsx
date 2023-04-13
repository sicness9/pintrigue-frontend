// mutations
import {
  useRemoveSaveMutation,
  useGetAllSavesMutation,
} from "../../../slices/saveApiSlice";

// styles
import { UnsaveButtonStyles } from "./UnsaveButton.styles";

const UnsaveButton = () => {
  return (
    <UnsaveButtonStyles>
      <div className="btn-text">Saved</div>
    </UnsaveButtonStyles>
  );
};

export default UnsaveButton;
