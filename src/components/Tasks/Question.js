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
            <button className='modal__btn' onClick={() => {
                setIsShowAns(true)
            }}>
                Ответ
            </button>
            {isShowAns&&<p>{ans}</p>}
    </div>
}

export default Question;