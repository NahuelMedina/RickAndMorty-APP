import { useState } from "react";
import styleForm from "./form.module.css";
import { bttonSearch } from "/src/components/search-bar/SearchBar.module.css";
import validation from "../../utils/validation";
export default function Form(props) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "Ingrese su email",
    password: "Ingrese su password",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
    setErrors(validation({ ...userData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(userData);
  };

  return (
    <div className={styleForm.divForm}>
      <div className={styleForm.cardForm}>
        <form onSubmit={handleSubmit}>
          <img src="/src/assets/login-logo.png" alt="logo-login" />
          <div>
            <label>Email:</label>
            <input
              value={userData.email}
              key="email"
              type="email"
              name="email"
              onChange={handleChange}
            />
          </div>
          <p>{errors.email && errors.email}</p>
          <div>
            <label>Password:</label>
            <input
              value={userData.password}
              key="password"
              type="password"
              name="password"
              onChange={handleChange}
            />
          </div>
          <p>{errors.password && errors.password}</p>
          <button
            disabled={errors.email || errors.password}
            className={bttonSearch}
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
