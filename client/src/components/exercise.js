import { Link } from "react-router-dom";

const Exercise = ({ exercise: e, deleteExercise }) => (
  <tr>
    <td>{e.username}</td>
    <td>{e.description}</td>
    <td>{e.duration}</td>
    <td>{e.date.substring(0, 10)}</td>
    <td>
      <Link className='link-text' to={"/edit/" + e._id}>
        edit
      </Link>{" "}
      |{" "}
      <a
        className='link-text'
        href='/exercises/edit'
        onClick={() => deleteExercise(e._id)}
      >
        delete
      </a>
    </td>
  </tr>
);

export default Exercise;
