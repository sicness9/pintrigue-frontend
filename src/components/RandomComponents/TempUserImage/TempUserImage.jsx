import { ImageContainer } from "./TempUserImage.styles";

const TempUserImage = (props) => {
  return (
    <ImageContainer>
      <div className="user-image-shape-controller">
        <div className="user-image-space-controller">
          <svg
            width="100%"
            viewBox="-50 -50 100 100"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
          >
            <text
              className="user-initial"
              fontSize="40px"
              fill="#111"
              dy="0.35em"
              textAnchor="middle"
            >
              {props.user.username[0].toUpperCase()}
            </text>
          </svg>
        </div>
      </div>
    </ImageContainer>
  );
};

export default TempUserImage;
