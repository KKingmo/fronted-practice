/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import styled from "@emotion/styled";

export const Flex = styled.div`
  display: flex;
`;
export const FlexRow = styled(Flex)`
  flex-direction: row;
`;
export const FlexColumn = styled(Flex)`
  flex-direction: column;
`;
export const Wrapper = styled(FlexColumn)`
  width: 996px;
  margin: 0 auto;
  .userIcon {
    color: #bdbdbd;
    width: 46px;
    height: auto;
  }
  .yellowIcon {
    color: #ffd600;
  }
  .cursorPointer {
    cursor: pointer;
  }
`;
export const Container = styled(FlexColumn)`
  padding: 80px 102px;
  justify-content: center;
  align-items: flex-start;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;

// BoardHead ----- start
export const BoardHead = styled(FlexRow)`
  padding-bottom: 20px;
  justify-content: space-between;
  position: relative;
  width: 100%;
  border-bottom: 1px solid #bdbdbd;
`;
export const BoardHeadLeft = styled(FlexRow)`
  justify-content: flex-start;
  align-items: center;
  & > div:first-of-type {
    padding-right: 16px;
  }
`;
export const Writer = styled.div`
  font-size: 24px;
  font-weight: 500;
`;
export const CreatedAt = styled.div`
  color: #828282;
`;
export const BoardHeadRight = styled(FlexRow)`
  justify-content: flex-end;
  align-items: flex-start;
  position: relative;
  & > div:first-of-type {
    padding-right: 30px;
  }
`;
// BoardHead ----- end

// BoardBody ----- start
export const BoardBody = styled(FlexColumn)`
  width: 100%;
`;
export const BoardBodyTitle = styled.div`
  padding: 80px 0px 40px 0px;
  text-align: left;
  font-weight: 700;
  font-size: 36px;
  color: #000000;
`;
export const VideoContainer = styled.div`
  .player-wrapper {
    width: auto; // Reset width
    height: auto; // Reset height
  }
  .react-player {
    padding-top: 56.25%; // Percentage ratio for 16:9
    position: relative; // Set to relative
  }

  .react-player > div {
    position: absolute; // Scaling will occur since parent is relative now
  }
`;
export const BoardBodyContents = styled(FlexColumn)`
  justify-content: flex-start;
  align-items: center;
  & > img {
    width: 100%;
    height: auto;
  }
  & > div:first-of-type {
    padding: 40px 0px 120px 0px;
  }
  & > div:nth-of-type(2) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    max-width: 900px;
    margin: 30px auto;
    padding: 20px;
    filter: drop-shadow(0px 5px 20px rgba(0, 0, 0, 0.2));
  }
`;
export const LocationToolTip = styled(FlexColumn.withComponent("span"))`
  display: none;
  justify-content: flex-start;
  align-items: flex-end;
  position: absolute;
  top: 0px;
  right: 10px;
  padding: 8px 16px;
  margin-top: -90%;
  background: #000000;
  opacity: 0.55;
  color: #ffffff;
  & > span {
    width: max-content;
    text-align: right;
  }
  & > span:last-of-type {
    position: absolute;
    display: block;
    width: 0px;
    height: 0px;
    right: 0;
    bottom: -8px;
    border-left: 12px solid #000000;
    border-top: 8px solid transparent;
    transform: rotate(180deg);
  }
`;
export const LocationInfo = styled.span`
  &:hover > ${LocationToolTip} {
    display: flex;
  }
`;
export const BoardBodyReaction = styled(FlexRow)`
  padding-top: 162px;
  justify-content: center;
  align-items: center;
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  & > div:first-of-type {
    padding-right: 40px;
  }
`;
// BoardBody ----- end

// BoardFooter ----- start
export const BoardFooter = styled(FlexRow)`
  padding: 101px 0px 87px 0px;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
`;
export const BoardFooterButton = styled.button`
  width: 179px;
  height: 45px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  font-weight: 500;
  text-align: center;
  margin: 0 12px;
  cursor: pointer;
`;
// BoardFooter ----- end
