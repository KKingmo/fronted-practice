import styled from "@emotion/styled";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";

export const AttachPhoto = styled.div`
  width: 180px;
  height: 180px;
  background: #fafafa;
  border: 1px dashed #e5e5e5;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  margin-right: 10px;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const PlusIcon = styled(AddCircleOutlineOutlinedIcon)`
  && {
    color: #999999;
    font-size: 20px;
  }
`;
