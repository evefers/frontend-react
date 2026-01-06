import { Link } from "react-router-dom";

export function Navbar({user, authLoading, authError, login, logout}) {

  const [emaik, setEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    e.preventDefault();
    setSubmitting(true)
    login({email, password})

    setSubmitting(false)

    if (ok) {
      setEmail("");
      SetPassword("");
    }
  };

  return (
    <nav>
      <ul className="flex justify-end px-10 items-center w-full bg-teal-500 h-14 border-b-2 border-black gap-x-6 text-2xl text-white ">
        <li>
          <Link to="/" className="hover:text-yellow-500">
            Home
          </Link>
        </li>
        <li>
          <Link to="/owner" className="hover:text-yellow-500">
            Owner
          </Link>
        </li>
      </ul>
      <div>
        {authLoading ? <span>Checking auth session...</span> : user ? <span>
        <span>Logged in as </span>{user.username}</span></span>
        <button>Logout</button>
        </> : 
         <form>
                <input 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  placeholder="email"
                  required
                  type="email"
                />
                <input 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  placeholder="password"
                  required
                  type="password"
                  minLength={8}
                />
              </form>
  )}
      </div>
    </nav>
  );
}
