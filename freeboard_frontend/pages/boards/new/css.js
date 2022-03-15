import styled from "@emotion/styled";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
`;

export const Container = styled.div`
    width: 1200px;
    padding: 60px 100px 100px 100px;

    input,
    textarea {
        border: 1px solid #bdbdbd;
    }
`;

export const Title = styled.div`
    font-size: 36px;
    font-weight: 700;
    text-align: center;
    padding-bottom: 80px;
`;

export const Yellow = styled.span`
    color: #ffd600;
`;

export const Div1 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;

export const Div2 = styled.div`
    width: 50%;
    &:first-child {
        padding-right: 24px;
    }
`;

export const Div3 = styled.div`
    width: 100%;
    padding-top: 40px;
`;

export const Div4 = styled.div`
    width: 100%;
    padding-top: 40px;

    textarea {
        width: 100%;
        height: 480px;
        margin-top: 16px;
        padding: 14px;
    }
`;

export const Div5 = styled.div`
    width: 100%;
    padding-top: 16px;

    & > div {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }

    span:first-child {
        margin-bottom: 16px;
    }

    input:first-child {
        width: 77px;
        height: 52px;
        appearance: none;
        border: 1px solid #bdbdbd;
        margin-right: 16px;
        padding: 14px;
    }

    input:nth-child(n + 2) {
        margin-top: 30px;
    }
`;

export const Span = styled.span`
    width: 100%;
    font-size: 16px;
    line-height: 24px;
    display: block;
`;

export const Input = styled.input`
    width: 100%;
    height: 52px;
    margin-top: 16px;
    padding: 14px;
`;

export const Search = styled.span`
    font-size: 16px;
    color: #ffffff;
    background: #000000;
    line-height: 52px;
    padding: 0 14px;
`;

export const AttachPhoto = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;

    & > span {
        margin: 40px 0px 16px 0px;
        display: block;
        width: 100%;
    }
`;

export const Div6 = styled.div`
    width: 78px;
    height: 78px;
    background: #bdbdbd;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 24px;

    span:first-child {
        font-size: 18px;
    }

    span {
        text-align: center;
        font-size: 12px;
        color: #4f4f4f;
    }
`;

export const DivRadio = styled.div`
    span {
        padding-bottom: 16px;
    }

    input {
        margin: 0px 14px 0px 22px;
    }

    input:first-child {
        margin-left: 0px;
    }
`;

export const Register = styled.div`
    background: #ffd600;
    width: 179px;
    height: 52px;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 80px auto;
`;
