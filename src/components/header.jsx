import { useState } from "react"
export function Header({score}){
      const [bestScore, setBestScore] = useState(0) 
      if (score > bestScore){
        setBestScore(score)
      }
    return (
        <div className="header">
            <div>
                <p>Pokemon Memory Game</p>
                <p>Get points by clicking an image but don't click on any more than once</p>
            </div>
            <div>
                <p>Score: {score}</p>
                <p>Best Score: {bestScore}</p>
            </div>
        </div>
    )
}