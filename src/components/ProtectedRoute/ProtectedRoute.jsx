import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { verifyToken } from "../../utilities/tokenVerification";

function ProtectedRoute({ component }) {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const authenticate = async () => {
      const authenticated = await verifyToken();
      if (!authenticated) {
        navigate("/");
      }
      setAuth(authenticated);
    };
    authenticate();
  }, [navigate]);

  if (auth == null) {
    return <h1>Please wait signing in...</h1>;
  }
  if (auth) {
    return component;
  }
  return null;
}

export default ProtectedRoute;
