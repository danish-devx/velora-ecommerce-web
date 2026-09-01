import { useState } from "react";
import { supabase } from "../../lib/supabase";
import "./Login.css";

function Login() {
  const [isSignup, setIsSignup] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({
    type: "",
    text: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage({
      type: "",
      text: "",
    });

    if (!email.trim() || !password.trim() || (isSignup && !name.trim())) {
      setMessage({
        type: "error",
        text: "Please complete all required fields.",
      });
      return;
    }

    if (password.length < 6) {
      setMessage({
        type: "error",
        text: "Password must be at least 6 characters.",
      });
      return;
    }

    setLoading(true);

    try {
      if (isSignup) {
        const { data, error } = await supabase.auth.signUp({
          email: email.trim(),
          password,
          options: {
            data: {
              first_name: name.trim(),
            },
          },
        });

        if (error) throw error;

        if (data.session) {
          setMessage({
            type: "success",
            text: "Account created successfully.",
          });
        } else {
          setMessage({
            type: "success",
            text: "Account created. Please check your email to verify your account.",
          });
        }

        setName("");
        setEmail("");
        setPassword("");
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email: email.trim(),
          password,
        });

        if (error) throw error;

        setMessage({
          type: "success",
          text: "Welcome back to Velora.",
        });
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: error.message || "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="login-page">
      <div className="login-grid"></div>
      <div className="login-glow"></div>

      <a href="/" className="login-brand">
        VELORA<span>.</span>
      </a>

      <section className="login-container">
        <div className="login-visual">
          <div className="visual-content">
            <span className="visual-label">VELORA / MEMBERS</span>

            <h1>
              Enter the
              <br />
              <span>experience.</span>
            </h1>

            <p>
              Access curated collections, exclusive drops, and the world of
              Velora.
            </p>
          </div>

          <div className="visual-mark">V</div>

          <div className="visual-status">
            <span></span>
            PREMIUM ACCESS
          </div>
        </div>

        <div className="login-card">
          <div className="login-header">
            <span className="login-eyebrow">
              {isSignup ? "CREATE ACCOUNT" : "WELCOME BACK"}
            </span>

            <h2>{isSignup ? "Join Velora." : "Sign in."}</h2>

            <p>
              {isSignup
                ? "Create your account and enter the Velora experience."
                : "Sign in to continue your journey with Velora."}
            </p>
          </div>

          {message.text && (
            <div className={`login-message ${message.type}`}>
              {message.text}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {isSignup && (
              <div className="input-group">
                <label htmlFor="name">FULL NAME</label>

                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="name"
                />
              </div>
            )}

            <div className="input-group">
              <label htmlFor="email">EMAIL ADDRESS</label>

              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">PASSWORD</label>

              <input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete={isSignup ? "new-password" : "current-password"}
              />
            </div>

            <button type="submit" className="login-submit" disabled={loading}>
              <span>
                {loading
                  ? "PLEASE WAIT..."
                  : isSignup
                    ? "CREATE ACCOUNT"
                    : "SIGN IN"}
              </span>

              {!loading && <span>↗</span>}
            </button>
          </form>

          <div className="login-switch">
            <span>
              {isSignup ? "Already have an account?" : "Don't have an account?"}
            </span>

            <button
              type="button"
              onClick={() => {
                setIsSignup(!isSignup);
                setMessage({
                  type: "",
                  text: "",
                });
              }}
            >
              {isSignup ? "Sign in" : "Create account"}
            </button>
          </div>
        </div>
      </section>

      <div className="login-footer">
        <span>© {new Date().getFullYear()} VELORA</span>
        <span>PREMIUM FASHION / DIGITAL EXPERIENCE</span>
      </div>
    </main>
  );
}

export default Login;
