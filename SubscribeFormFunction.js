import axios from "axios";
import { useState } from "react";

const SubscribeFormFunction = () => {
  const [username, setUsername] = useState("");
  const [useremail, setUserEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [checkMessage, setCheckMessage] = useState("");

  //   const [userData, setUserData] = useState({
  //     username: "",
  //     useremail: "",
  //     isChecked: false,
  //     isSubscribed: false,
  //   });

  const storeData = (e) => {
    e.preventDefault();
    console.log("Data stored!");

    if (isChecked == false) {
      setCheckMessage("Please check the box to proceed");
    } else {
      axios.post(
        "https://crudcrud.com/api/804a4ffe3db74b93bd90cd40d38e9435/users",
        { name: username, email: useremail }
      );

      setUserEmail("");
      setUsername("");
      setIsChecked(false);
      setIsSubscribed(false);
      setCheckMessage("");
    }
  };

  return (
    <>
      <h1>
        {isSubscribed
          ? setIsSubscribed("You are now subscribed!")
          : setIsSubscribed("")}
      </h1>
      <form
        action="#"
        method="POST"
        onSubmit={(e) => {
          storeData(e);
        }}
      >
        <div>
          <label htmlFor="username">Name : </label>
          <input
            type="text"
            placeholder="Your name"
            id="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="useremail">Email : </label>
          <input
            type="email"
            placeholder="Your email"
            id="useremail"
            value={useremail}
            onChange={(e) => {
              setUserEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <p>
            {isChecked ? (
              <input
                type="checkbox"
                checked
                onClick={() => {
                  setIsChecked(false);
                }}
              />
            ) : (
              <input
                type="checkbox"
                onClick={() => {
                  setIsChecked(true);
                }}
              />
            )}
            I agree to the terms and conditions
          </p>
          <p>{checkMessage}</p>
        </div>
        <input type="submit" />
      </form>
    </>
  );
};

export default SubscribeFormFunction;
