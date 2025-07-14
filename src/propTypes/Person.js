
import PropTypes from "prop-types";

export const Person = (props) => {
    return (
        <div className="App">
            <h2>Name : {props.name}</h2>
            <h2>Email : {props.email}</h2>
            <h2>Age : {props.age}</h2>
            <h2>Married : {props.isMarried ? "Yes" : "No"}</h2>
            <h2>Courses : </h2>
            {props.courses.map(course => {
                return (
                    <h2 key={course}>{course}</h2>
                )
            })}
        </div>
    )
}
Person.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    age: PropTypes.number,
    isMarried: PropTypes.bool,
    courses: PropTypes.arrayOf(PropTypes.string)
}