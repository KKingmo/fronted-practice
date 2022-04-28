import styled from "@emotion/styled";

export const ImagesWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Form = styled.form`
  width: 100%;
`;

export const ReactQuillWrapper = styled.div`
  .ql-toolbar:first-of-type {
    display: none;
  }
`;

export const HashTag = styled.div`
  background: #017045;
  color: #fcd91f;
  border-radius: 1rem;
  margin-bottom: 0.875rem;
  margin-left: 0.875rem;
  font-weight: 500;
  align-items: center;
  display: inline-block;
  padding: 2px 5px;
  cursor: pointer;

  &:hover {
    background: #ff2900;
  }
`;

export const DeleteTag = styled.button`
  display: none;
`;
