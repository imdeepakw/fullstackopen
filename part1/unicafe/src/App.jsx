import { useState } from "react"

const App = () => {

  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button  onClick={handleGoodClick} buttonText='good'/>
      <Button onClick={handleNeutralClick} buttonText='neutral' />
      <Button onClick={handleBadClick} buttonText='bad'/>
      <Statistics good = {good} bad={bad} neutral={neutral}/>
    </div>
  )
}

const Statistics = ({good, bad, neutral}) => {
  const allPoints = good + bad + neutral
  const averagePoints = ((good * 1) + (neutral * 0) + (bad * -1))/allPoints
  const positivePercentage = (good / allPoints) * 100
  if(good >= 1 && bad >= 1 && neutral >= 1){
    return (
    <div>
      <h1>Statistics</h1>
      <StatisticLine text='good' value={good}/>
      <StatisticLine text='neutral' value={neutral}/>
      <StatisticLine text='bad' value={bad}/>
      <StatisticLine text='all' value={allPoints}/>
      <StatisticLine text='average' value={averagePoints}/>
      <StatisticLine text='positive' value={positivePercentage}/>
    </div>
  )
  }
  return (
    <p>No feedback given</p>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.buttonText}
    </button>
  )
}

const StatisticLine = ({value, text}) => {

  return (
    <table>
      <tbody>
        <tr>
          <td>{text} {value}</td>
        </tr>
      </tbody>
    </table>
  )

}

export default App