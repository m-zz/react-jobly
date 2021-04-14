import Form from "./Form";
import JoblyApi from './api';

function Login({ updateUser }) {

  async function login(data) {
    const { token } = await JoblyApi.login(data);
    updateUser(token);
  }

  return (
    <div className="Login">
      <h2 className="Header">Login</h2>
      <Form updateData={login} formElements={['username', 'password']} />
    </div>
  );
}
export default Login;