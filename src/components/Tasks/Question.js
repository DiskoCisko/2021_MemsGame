import React, {useState} from "react";

const Question = ({title, text, ans, author}) => {
    const [isShowAns, setIsShowAns] = useState(false)
    const question = text.map((item, index) => {
        return <li key={index}>{item}</li>
    })
    return <div>       
            {title}
            <ul>
                {question}
            </ul>
            <div>
                <p><i>{author}</i></p>
            </div>
            <button onClick={() => {
                setIsShowAns(true)
            }}>
                Ответ
            </button>
            {isShowAns&&<span>{ans}</span>}
    </div>
}

export default Question;