function Forgotpassword({ setLogindisplay }) {
  return (
    <div id="newusermain">
      <div id="forgotpassword">
        <p>
          <h2>
            Answer the following security questions to reset your password:
          </h2>
        </p>
        <br></br>
        <form>
          <label for="secquestion1">
            What is your paternal grandmother's first name?
          </label>
          <br />
          <input type="text" id="sequestion1" name="secquestion1" />
          <br />
          <br />

          <label for="secquestion2">What is your favorite movie?</label>
          <br />
          <input type="text" id="sequestion2" name="secquestion2" />
          <br />
          <br />

          <label for="secquestion3">What was the name of your first dog?</label>
          <br />
          <input type="text" id="sequestion3" name="secquestion3" />
          <br />
          <br />
          <input type="submit" />
        </form>
        <br />
        <br />
        <br />
        <br />
        <button
          type="submit"
          id="backtologin"
          name="backtologin"
          class="signup"
          onClick={() => setLogindisplay("login")}
        >
          Back To Login
        </button>
      </div>
    </div>
  );
}

export default Forgotpassword;

// <form>
//   <label for="resetpassword">
//     Reset Password **hide this section until successful submission of
//     above**
//   </label>
//   <br />
//   <input type="text" id="restpassword" name="resetpassword" />
//   <br />
//   <br />
//   <input type="submit" />
// </form>;
