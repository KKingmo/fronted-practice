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
      font-size: 1.3rem;
      letter-spacing: 0.05rem;
      &.isActive {
        color: #ff2900;
      }
    }
  }

  li:last-of-type {
    margin-right: 0;
  }
`;
