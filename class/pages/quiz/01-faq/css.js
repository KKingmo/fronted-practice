import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
`;

export const Head = styled.div`
    width: 640px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #cacaca;
    margin-top: 32px;
`;

export const Search = styled.div`
    align-self: flex-end;
    padding: 0 50px;

    svg {
        width: 32px;
        height: 32px;
    }
`;

export const My = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    color: #1f1f1f;
    margin-top: 31px;
    padding: 0 50px;

    div:first-child > span {
        font-size: 40px;
    }

    div:nth-child(2) {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    div:nth-child(2) > div {
        width: 60px;
        height: 60px;
    }

    div:nth-child(2) > span {
        font-size: 24px;
        margin-left: 20px;
    }

    div:nth-child(2) > span:nth-of-type(2) {
        color: #d8d8d8;
    }
`;

export const HeadNav = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin: 60px 0px 50px 0px;
    padding: 0 50px;

    div {
        margin-right: 50px;
    }

    span {
        font-size: 30px;
        font-weight: bold;
        font-stretch: normal;
        line-height: 1.87;
        letter-spacing: normal;
        font-style: normal;
        color: #cacaca;
    }

    div:nth-child(3) {
        border-bottom: 2px solid #ff1b6d;
    }

    div:nth-child(3) > span {
        color: #ff1b6d;
    }
`;

export const Main = styled.div`
    width: 640px;
    padding-top: 29px;
    border-bottom: 1px solid #cacaca;
`;
export const ListItem = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 50px 50px 50px;

    div:first-child > div:first-child {
        padding-bottom: 14px;
    }

    div:first-child > div:first-child > span {
        color: #adadad;
        font-size: 18px;
    }

    div:first-child > div:nth-child(2) > span {
        color: var(--greyish-brown);
        font-size: 24px;
    }

    div:last-child > span {
        color: #adadad;
        font-size: 50px;
    }
`;

export const Footer = styled.div`
    width: 640px;
    padding: 20px 0px;

    & > div {
        width: 100%;
        color: #adadad;
    }

    span {
        font-size: 16px;
    }

    .Mui-selected {
        color: #ff1b6d;
    }
    svg {
        width: 58px;
        height: auto;
    }
`;
