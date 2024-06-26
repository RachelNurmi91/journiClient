import { useState } from "react";
import { connect } from "react-redux";
import {
  addNewHotelData,
  setActiveTrip,
  setLoggedInUserData,
} from "../../Redux/Actions/AccountActions";
import Button from "../../Shared/UI/Button";
import Input from "../../Shared/UI/Input";
import Header from "../../Shared/UI/Header";
import AccountRequests from "../../Requests/AccountRequests";
import Loading from "../../Shared/UI/Loading";

const DEFAULT_FORM_DATA = {
  firstName: null,
  lastName: null,
  username: null,
  password: null,
};

function Register({ ...props }) {
  const [formData, setFormData] = useState(DEFAULT_FORM_DATA);
  const [inputError, setInputError] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const accountRequest = new AccountRequests();

  const handleChange = (event) => {
    if (inputError) {
      if (inputError?.includes(event.target.name)) {
        let updateError = inputError.filter((err) => err !== event.target.name);
        console.error(updateError);
        setInputError(updateError);
      }
    }
    const targetKey = event.target.name;
    const newValue = event.target.value;

    setFormData((prevState) => ({ ...prevState, [targetKey]: newValue }));
  };

  const loginAfterRegister = async () => {
    await accountRequest
      .login(formData)
      .then((response) => {
        const token = response.data.token;

        // If there is no token don't attempt to fetch the account.
        if (!token) {
          console.error("Register failed: No token returned.");
          setError("Register unsuccessful.");
          setLoading(false);
          return;
        }

        localStorage.setItem("token", token);
        accountRequest
          .fetchAccountData(formData.username, token)
          .then((account) => {
            if (!account) {
              console.error("Login failed: No account found.");
              setError("Login unsuccessful.");
              setLoading(false);
              return;
            }

            //On a successful registration - log in automatically.

            const accountData = {
              id: account.data._id,
              firstName: account.data.firstName,
              lastName: account.data.lastName,
              username: account.data.username,
              password: null,
              trips: [],
            };

            props.setLoggedInUserData(accountData);
            setLoading(false);
            props.navigate("/");
          });
      })
      .catch((err) => {
        console.error(err);
        console.error("Login failed: Server login error.");
        setError("Login unsuccessful.");
        setLoading(false);
      });
  };

  const onRegister = async () => {
    setLoading(true);
    setError(null);

    let errors = [];

    // Account for all possible missing data error checks before attempting login.
    if (!formData.firstName) {
      console.error("Registration failed: First name missing.");
      errors.push("firstName");
      setLoading(false);
    }

    if (!formData.lastName) {
      console.error("Registration failed: Last name missing.");
      errors.push("lastName");
      setLoading(false);
    }
    if (!formData.username) {
      console.error("Registration failed: Username missing.");
      errors.push("username");
      setLoading(false);
    }

    if (!formData.password) {
      console.error("Registration failed: Password missing.");
      errors.push("password");
      setLoading(false);
    }

    if (errors.length) {
      setInputError(errors);
      return;
    }

    const registrationData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      username: formData.username,
      password: formData.password,
    };
    await accountRequest
      .registerAccount(registrationData)
      .then((response) => {
        loginAfterRegister();
      })
      .catch((err) => {
        console.error(err);
        if (err.response?.data?.err?.name === "UserExistsError") {
          setError("Username already exists.");
        } else {
          console.error(err);
          console.error("Register failed: Server login error.");
          setError("Register unsuccessful.");
        }

        setLoading(false);
      });

    // props.navigate("/");
  };

  return (
    <div className="content-body">
      <Header title="Register" />
      <div className="container">
        <div className="row">
          <div className="col">
            <Input
              name="firstName"
              onChange={handleChange}
              placeholder="First Name"
              label="First Name"
              value={formData.firstName}
              inputError={inputError}
            />
          </div>
          <div className="col">
            <Input
              name="lastName"
              onChange={handleChange}
              placeholder="Last Name"
              label="Last Name"
              value={formData.lastName}
              inputError={inputError}
            />
          </div>
          <div className="container">
            <div className="row">
              <Input
                name="username"
                onChange={handleChange}
                placeholder="Username"
                label="Username"
                value={formData.username}
                inputError={inputError}
              />
            </div>
            <div className="row">
              <Input
                name="password"
                onChange={handleChange}
                placeholder="Password"
                label="Password"
                type="password"
                value={formData.password}
                inputError={inputError}
              />
            </div>

            <div className="row mt-3">
              <Button label="Register" onClick={onRegister} />
            </div>
            {inputError.length ? (
              <div className="row">
                <div
                  className="b13-mon text-center error-color py-2 px-3"
                  style={{ fontWeight: "700" }}
                >
                  * Please fill out all required fields
                </div>
              </div>
            ) : null}

            {error ? (
              <div className="row">
                <div
                  className="b13-mon text-center error-color py-2 px-3 mt-3"
                  style={{ fontWeight: "700" }}
                >
                  {error}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <Loading loading={loading} />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    userData: state.account?.userAccount,
    tripList: state.account?.userAccount?.trips,
  };
}

const mapDispatchToProps = {
  addNewHotelData,
  setLoggedInUserData,
  setActiveTrip,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
