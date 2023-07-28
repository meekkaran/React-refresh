
const Student = (props) => {
    console.log(props);
    return(
        <div>
            <h1>{props.firstName}</h1>
            <h3>{props.age}</h3>
            <h3>{props.country}</h3>
        </div>   
)}

export default Student;