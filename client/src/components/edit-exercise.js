import { useState, useEffect, useRef } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EditExercise = (props) => {
  const [exercise, setExercise] = useState({
    username: "",
    description: "",
    duration: 0,
    date: new Date(),
    users: [],
  });

  const [users, setUsers] = useState([]);
  // const [username, setUsername] = useState("");
  const userInput = useRef();

  const onChangeUsername = (e) => {
    setExercise({ ...exercise, username: e.target.value });
  };

  const onChangeDescription = (e) => {
    setExercise({ ...exercise, description: e.target.value });
  };

  const onChangeDuration = (e) => {
    setExercise({ ...exercise, duration: e.target.value });
  };

  const onChangeDate = (date) => {
    setExercise({ ...exercise, date: date });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(exercise);

    axios
      .post(
        "http://localhost:5000/exercises/update/" + props.match.params.id,
        exercise
      )
      .then((res) => console.log(res.data));

    window.location = "/";
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/exercises/" + props.match.params.id)
      .then((res) => {
        setExercise({
          username: res.data.username,
          description: res.data.description,
          duration: res.data.duration,
          date: new Date(res.data.date),
        });
      })
      .catch((err) => {
        console.log(err);
      });

    axios.get("http://localhost:5000/users").then((res) => {
      if (res.data.length > 0) {
        setUsers(res.data.map((user) => user.username));
      }
    });
  }, []);

  return (
    <div>
      <h3>Edit Exercise Log</h3>
      <form onSubmit={onSubmit}>
        <div className='mb-3'>
          <label className='form-label'>Username: </label>
          <select
            ref={userInput}
            required
            className='form-control'
            value={exercise.username}
            onChange={onChangeUsername}
          >
            {users.map((user) => (
              <option key={user} value={user}>
                {user}
              </option>
            ))}
          </select>
        </div>
        <div className='mb-3'>
          <label className='form-label'>Description: </label>
          <input
            type='text'
            required
            className='form-control'
            value={exercise.description}
            onChange={onChangeDescription}
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Duration (in minutes): </label>
          <input
            type='text'
            className='form-control'
            value={exercise.duration}
            onChange={onChangeDuration}
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Date: </label>
          <div>
            <DatePicker selected={exercise.date} onChange={onChangeDate} />
          </div>
        </div>
        <button type='submit' className='btn btn-primary'>
          Edit Exercise
        </button>
      </form>
    </div>
  );
};

export default EditExercise;
