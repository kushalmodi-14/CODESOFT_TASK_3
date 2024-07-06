import React from 'react'

function QuizResult(props) {
  return (
    <>
    <div className='show-score'>
        Your Score :- {props.score}<br/>
        Total Score :- {props.totalscore}<br/>
    </div>
    <button id="next-button" onClick={props.tryagain}>Try Again</button>
    </>
  )
}

export default QuizResult