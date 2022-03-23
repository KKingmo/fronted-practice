// 4일차 Quiz : REST-API 요청하기
import axios from "axios";

const QuizDay4APage = () => {
    const callRestApi = async () => {
        const result = await axios.get("https://koreanjson.com/users");
        console.log(result.data);
    };

    return (
        <div>
            <button onClick={callRestApi}>REST-API 요청하기</button>
        </div>
    );
};

export default QuizDay4APage;
