import React from "react";

function SignUp() {
  return (
    <div>
      <h1>SignUp</h1>
      <form>
        <div>
          <input type="text" name="username" placeholder="Username" />
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
        </div>
        <div>
          <input type="password" name="password" placeholder="ReType Password" />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default SignUp;