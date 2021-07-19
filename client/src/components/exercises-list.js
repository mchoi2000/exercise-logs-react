import { useState, useEffect } from "react";
import axios from "axios";
import Exercise from "./exercise";
import { Link } from "react-router-dom";

const ExercisesList = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/exercises")
      .then((res) => {
        setExercises(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const onDeleteExercise = (id) => {
    axios
      .delete("http://localhost:5000/exercises/" + id)
      .then((res) => console.log(res.data));

    setExercises(exercises.filter((e) => e._id !== id));
  };

  const exerciseList = () =>
    exercises.map((e) => (
      <Exercise exercise={e} deleteExercise={onDeleteExercise} key={e._id} />
    ));

  return (
    <div>
      <h3>Exercises</h3>
      <table className='table'>
        <thead className='thead-light'>
          <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{exerciseList()}</tbody>
      </table>
      <Link to='/create' className='btn btn-primary'>
        Add Exercise
      </Link>
    </div>
  );
};

export default ExercisesList;
