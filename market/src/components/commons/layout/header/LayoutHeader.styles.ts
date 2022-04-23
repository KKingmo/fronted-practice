import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  background: #f6f4f4;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 100%;
`;

export const Logo = styled.img`
  height: 100%;
  width: auto;
  padding: 10px 0;
  cursor: pointer;
`;

export const Navigation = styled.ul`
  display: flex;
  li {
    margin-right: 1rem;
    cursor: pointer;
    span {
      font-family: "Gompyo", sans-serif;
      padding: 5px 15px;
      font-size: 1.3rem;
      letter-spacing: 0.05rem;
      transition: all 0.3s;

      &.isActive {
        color: #3c96ff;
      }

      &:hover {
        background: #3c96ff;
        color: #ffffff;
      }
    }
  }

  li:last-of-type {
    margin-right: 0;
  }
`;

export const Login = styled.button`
  font-family: "Gompyo", sans-serif;
  padding: 5px 20px 2px 20px;
  font-size: 1.2rem;
  letter-spacing: 0.06rem;
  background: #19783c;
  color: #ffffff;
  border-radius: 20px;
  border: none;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    background: #f5da4f;
    color: #19783c;
  }
`;

export const UserInfo = styled.div`
  padding: 5px 20px 2px 20px;
  font-size: 1.2rem;
  letter-spacing: 0.06rem;
  background: #3c96ff;
  color: #ffffff;
  border-radius: 20px;
  border: none;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    background: #f5da4f;
    color: #3c96ff;
  }
`;
