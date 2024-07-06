import React, { useState } from 'react'
import { QuizData } from '../data'
import QuizResult from './QuizResult'

export default function Quiz() {
    const [queNo ,setQueno] = useState(0)
    const [score ,setScore] = useState(0)
    const [click,setClick] = useState(0)
    const [showResult,setShow] = useState(false)

    function changeQuestion(){
        updateScore();
        if (queNo< QuizData.length-1) {
            setQueno(queNo +1)
            setClick(0)
        }
        else{
            setShow(true)
        }
    }

    const updateScore= ()=>{
        if (click === QuizData[queNo].answer) {
            setScore(score+1)
        }
    }

    const resetall = ()=>{
        setQueno(0);
        setScore(0)
        setShow(false)
        setClick(0)
    }

  return (
    <div>
        <h1 className='heading-txt'>Quiz App</h1>
        <div className="container">
            {showResult? 
            (
                <QuizResult score={score} totalscore={QuizData.length} tryagain={resetall}/>
            ):
            (
                <>
                
                <div className="question">
                    <span className="quetion-number"> {queNo+1}. </span>
                    <span className="quetion-txt">{QuizData[queNo].question}</span>
                </div>
    
                <div className="option-container">
                    {QuizData[queNo].options.map((option,i)=>{
                        return(
                            <button className={`option-btn ${click === i+1?"checked":null}`}
                             key={i} onClick={()=>{setClick(i+1)}}>
                                {option}
                            </button>
                        )
                    })}
                </div>
    
                <input type="button" value="Next" id='next-button' onClick={changeQuestion} />
                </>
            )}

        </div>
    </div>
  )
}
