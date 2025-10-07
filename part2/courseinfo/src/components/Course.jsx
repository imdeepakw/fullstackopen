const Header = (props) => <h1>{props.course}</h1>

const Content = ({parts}) => {
  // console.log(parts)

  return (
    <div>
      {parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises}/>)}
    </div>
)}

const Part = ({name, exercises}) => {
  return(
    <p>
      {name} {exercises}
    </p>
  )
}

const Total = ({totalExercises}) => {
  return (
    <p>total of {totalExercises.reduce((accum, current) => accum + current.exercises, 0)} exercises</p>
  )
}

const Course = ({course}) => {
  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total totalExercises={course.parts}/>
    </div>
  )
}

export default Course