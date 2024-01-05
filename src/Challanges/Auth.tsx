import {
  FormEvent,
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";
import Dashboard from "./Dashboard";
import "./common.css";

const authContext = createContext({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <authContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </authContext.Provider>
  );
};

function LoginForm() {
  const { login } = useContext(authContext);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const username = formData.get("username");
    const password = formData.get("password");
    login();
  };

  return (
    <form onSubmit={handleSubmit} className="formGrid">
      <h2>Log In</h2>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          required
          type="text"
          id="username"
          name="username"
          placeholder="Enter your username"
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          required
          id="password"
          type="password"
          name="password"
          placeholder="Enter your password"
        />
      </div>
      <button className="primary" type="submit">
        Login
      </button>
    </form>
  );
}

function NavBar() {
  const { logout, isAuthenticated } = useContext(authContext);

  return (
    <nav>
      <span role="img" aria-label="Money bags emoji">
        💰
      </span>
      {isAuthenticated && (
        <button className="link" onClick={logout}>
          Logout
        </button>
      )}
    </nav>
  );
}

function Main() {
  const { isAuthenticated } = useContext(authContext);
  return <main>{isAuthenticated ? <Dashboard /> : <LoginForm />}</main>;
}

const Auth = () => {
  return (
    <AuthProvider>
      <NavBar /> <Main />
    </AuthProvider>
  );
};

export default Auth;
