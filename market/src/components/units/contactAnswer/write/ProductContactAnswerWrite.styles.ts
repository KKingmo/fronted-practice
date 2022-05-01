import styled from "@emotion/styled";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0px auto;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
`;

export const CommentIcon = styled(RateReviewOutlinedIcon)`
  && {
    color: #ffd600;
    font-size: 22px;
    margin-right: 14px;
  }
`;

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #bdbdbd;
`;

export const ContentsTextarea = styled.textarea`
  width: 100%;
  min-height: 108px;
  padding: 20px;
  border: none;
  border-bottom: 1px solid #f2f2f2;
  font-size: 16px;
  font-weight: 500;
`;
export const ContentsBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const ContentsBottomLength = styled.div`
  color: #bdbdbd;
  padding: 14px 20px;
`;
export const ContentsBottomButton = styled.button`
  padding: 14px 26px;
  background: #ffd600;
  color: #000000;
  font-size: 16px;
  text-align: center;
  border: none;
  cursor: pointer;
`;

export const CancelButton = styled.button`
  padding: 14px 26px;
  background: #bdbdbd;
  color: #ffffff;
  font-size: 16px;
  text-align: center;
  border: none;
  cursor: pointer;
`;
