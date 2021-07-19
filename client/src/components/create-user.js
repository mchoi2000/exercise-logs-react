import { useState } from "react";
import axios from "axios";

const CreateUser = () => {
  const [username, setUsername] = useState("");

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const user = {
      username: username,
    };

    console.log(user);

    axios
      .post("http://localhost:5000/users/add", user)
      .then((res) => console.log(res.data));

    window.location = "/";
  };

  return (
    <div>
      <h3>Create New User</h3>
      <form onSubmit={onSubmit}>
        <div className='mb-3'>
          <label className='form-label'>Username: </label>
          <input
            type='text'
            required
            className='form-control'
            value={username}
            onChange={onChangeUsername}
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Create User
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
