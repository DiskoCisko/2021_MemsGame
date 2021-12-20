import React, {useState} from "react";

const Question = ({title, text, ans}) => {
    const [isShowAns, setIsShowAns] = useState(false)
    const question = text.map((item, index) => {
        return <li key={index}>{item}</li>
    })
    return <div>       
            {title}
            <ul>
                {question}
            </ul>
            <button onClick={() => {
                setIsShowAns(true)
            }}>
                Ответ
            </button>
            {isShowAns&&<span>{ans}</span>}
    </div>
}

export default Question;