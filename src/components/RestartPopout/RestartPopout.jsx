// styles
import { Wrapper, Content } from "./RestartPopout.styles";

const RestartPopout = () => {
  return (
    <Wrapper>
      <Content>
        <div className="delete-button-container-menu">
          <button className="delete-button-menu">
            <div className="button-text">Restart</div>
          </button>
        </div>
      </Content>
    </Wrapper>
  );
};

export default RestartPopout;
