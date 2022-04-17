import styled from "@emotion/styled";
import CreateIcon from "@mui/icons-material/Create";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";

export const Wrapper = styled.div`
  width: 1200px;
`;

export const BoardsBestTitle = styled.div`
  padding-bottom: 40px;
  font-weight: 700;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;

export const BoardsBestList = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 80px;
  align-items: center;
  width: 100%;
`;

export const BoardsBestItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  cursor: pointer;
`;

export const BoardsBestItemTop = styled.div`
  width: 282px;
  height: 120px;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px 20px 0px 0px;
  }
`;

export const BoardsBestItemTitle = styled.div`
  font-weight: 500;
  font-size: 18px;
  padding: 20px;
  width: 282px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const BoardsBestItemBottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 20px 20px 20px;
  width: 100%;
`;

export const BoardsBestItemBottomContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > div {
    display: flex;
    align-items: center;
  }

  & > div > span {
    padding-top: 4px;
    font-size: 12px;
    color: #828282;
  }
`;

export const BoardsBestItemUserIcon = styled(AccountCircleIcon)`
  && {
    color: #bdbdbd;
    font-size: 20px;
    margin-right: 6px;
  }
`;

export const LikeBoardIcon = styled(ThumbUpAltOutlinedIcon)`
  && {
    color: #ffd600;
    font-size: 20px;
  }
`;

export const TableTop = styled.div`
  border-top: 2px solid gray;
  margin-top: 20px;
`;

export const TableBottom = styled.div`
  border-bottom: 2px solid gray;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid gray;

  :hover {
    color: blue;
  }
`;

export const ColumnHeaderBasic = styled.div`
  width: 10%;
  text-align: center;
`;

export const ColumnHeaderTitle = styled.div`
  width: 70%;
  text-align: center;
`;

export const ColumnBasic = styled.div`
  width: 10%;
  text-align: center;
`;

export const ColumnTitle = styled.div`
  width: 70%;
  text-align: center;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  :hover {
    color: blue;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 50px;
`;

export const PencilIcon = styled(CreateIcon)``;

export const Button = styled.button`
  margin-left: 50px;
  width: 171px;
  height: 52px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: #f5f2fc;
  }
`;
