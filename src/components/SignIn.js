// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './SignIn.css';

// const SignIn = ({ setIsLoggedIn }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(null);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     setSuccess(null);

//     try {
//       const response = await axios.post('http://localhost:5000/signin', { email, password });
//       setSuccess(response.data.message);
//       setIsLoggedIn(true);
//       navigate('/main'); // Redirect to the main page
//     } catch (error) {
//       if (error.response) {
//         setError(error.response.data.message);
//       } else {
//         setError("An error occurred. Please try again.");
//       }
//     }
//   };

//   return (
//     <div className="sign-in-container">
//       <h2>Sign In</h2>
//       <form onSubmit={handleSubmit}>
//         {error && <p className="error-message">{error}</p>}
//         {success && <p className="success-message">{success}</p>}
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input 
//             type="email" 
//             id="email" 
//             value={email} 
//             onChange={(e) => setEmail(e.target.value)} 
//             required 
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password:</label>
//           <input 
//             type="password" 
//             id="password" 
//             value={password} 
//             onChange={(e) => setPassword(e.target.value)} 
//             required 
//           />
//         </div>
//         <button type="submit" className="sign-in-button">Sign In</button>
//       </form>
//       <p className="sign-up-link">
//         Don't have an account? <Link to="/signup">Sign Up</Link>
//       </p>
//     </div>
//   );
// };

// export default SignIn;












// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './SignIn.css';

// const SignIn = ({ setIsLoggedIn }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(null);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     setSuccess(null);

//     try {
//       const response = await axios.post('http://localhost:5000/signin', { email, password });
//       setSuccess(response.data.message);
//       setIsLoggedIn(true);
//       navigate('/book-ticket'); // Redirect to the Book Ticket page
//     } catch (error) {
//       if (error.response) {
//         setError(error.response.data.message);
//       } else {
//         setError("An error occurred. Please try again.");
//       }
//     }
//   };

//   return (
//     <div className="sign-in-container">
//       <h2>Sign In</h2>
//       <form onSubmit={handleSubmit}>
//         {error && <p className="error-message">{error}</p>}
//         {success && <p className="success-message">{success}</p>}
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input 
//             type="email" 
//             id="email" 
//             value={email} 
//             onChange={(e) => setEmail(e.target.value)} 
//             required 
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password:</label>
//           <input 
//             type="password" 
//             id="password" 
//             value={password} 
//             onChange={(e) => setPassword(e.target.value)} 
//             required 
//           />
//         </div>
//         <button type="submit" className="sign-in-button">Sign In</button>
//       </form>
//       <p className="sign-up-link">
//         Don't have an account? <Link to="/signup">Sign Up</Link>
//       </p>
//     </div>
//   );
// };

// export default SignIn;


// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const SignIn = ({ setIsLoggedIn }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(null);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     setSuccess(null);

//     try {
//       const response = await axios.post('http://localhost:5000/signin', { email, password });
//       setSuccess(response.data.message);
//       setIsLoggedIn(true);
//       navigate('/book-ticket'); // Redirect to MainPage
//     } catch (err) {
//       if (err.response) {
//         setError(err.response.data.message);
//       } else {
//         setError('An error occurred. Please try again.');
//       }
//     }
//   };

//   return (
//     <div
//       style={{
//         maxWidth: '400px',
//         margin: '50px auto',
//         textAlign: 'center',
//         padding: '20px',
//         border: '1px solid #ccc',
//         borderRadius: '10px',
//         backgroundColor: '#f9f9f9',
//         boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//       }}
//     >
//       <h2 style={{ marginBottom: '20px' }}>Sign In</h2>
//       <form onSubmit={handleSubmit}>
//         {error && <p style={{ color: 'red', fontSize: '14px' }}>{error}</p>}
//         {success && <p style={{ color: 'green', fontSize: '14px' }}>{success}</p>}
//         <div style={{ marginBottom: '15px', textAlign: 'left' }}>
//           <label htmlFor="email" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>
//             Email:
//           </label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             style={{
//               width: '100%',
//               padding: '8px',
//               border: '1px solid #ccc',
//               borderRadius: '5px',
//             }}
//           />
//         </div>
//         <div style={{ marginBottom: '15px', textAlign: 'left' }}>
//           <label htmlFor="password" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>
//             Password:
//           </label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             style={{
//               width: '100%',
//               padding: '8px',
//               border: '1px solid #ccc',
//               borderRadius: '5px',
//             }}
//           />
//         </div>
//         <button
//           type="submit"
//           style={{
//             backgroundColor: '#007bff',
//             color: 'white',
//             padding: '10px 20px',
//             border: 'none',
//             borderRadius: '5px',
//             cursor: 'pointer',
//             width: '100%',
//           }}
//         >
//           Sign In
//         </button>
//       </form>
//       <p style={{ marginTop: '15px' }}>
//         Don't have an account?{' '}
//         <Link to="/signup" style={{ color: '#007bff', textDecoration: 'none' }}>
//           Sign Up
//         </Link>
//       </p>
//     </div>
//   );
// };

// export default SignIn;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignIn = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.post('http://localhost:5000/signin', { email, password });
      setSuccess(response.data.message);
      setIsLoggedIn(true);
      navigate('/main'); // Redirect to MainPage
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message);
      } else {
        setError('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div
      style={{
        maxWidth: '400px',
        margin: '50px auto',
        textAlign: 'center',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h2 style={{ marginBottom: '20px' }}>Sign In</h2>
      <form onSubmit={handleSubmit}>
        {error && <p style={{ color: 'red', fontSize: '14px' }}>{error}</p>}
        {success && <p style={{ color: 'green', fontSize: '14px' }}>{success}</p>}
        <div style={{ marginBottom: '15px', textAlign: 'left' }}>
          <label htmlFor="email" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }}
          />
        </div>
        <div style={{ marginBottom: '15px', textAlign: 'left' }}>
          <label htmlFor="password" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            width: '100%',
          }}
        >
          Sign In
        </button>
      </form>
      <p style={{ marginTop: '15px' }}>
        Don't have an account?{' '}
        <Link to="/signup" style={{ color: '#007bff', textDecoration: 'none' }}>
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
