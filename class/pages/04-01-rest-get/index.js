import axios from 'axios'
import { useState } from 'react'

export default function RestGetPage(){
    const [data, setData] = useState("")

    const callRestApi = async () => {
        const result = await axios.get("https://koreanjson.com/posts/1")
        console.log(result)
        console.log(result.data.title)
        setData(result.data.title)
    }

    return (
        <div>
            <div>{data}</div>
            <button onClick={callRestApi}>REST-API 요청하기!!!</button>
        </div>
    )
}