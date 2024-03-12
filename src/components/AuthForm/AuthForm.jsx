import './AuthForm.css';
import { useEffect, useState, useRef } from 'react';
import { FaTimes, FaCheck } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const AuthForm = ({isSignUp}) => {

    const emailRef = useRef();
    const errRef = useRef();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);

    const [matchPassword, setMatchPassword] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMessage, setErrMessage] = useState('');

    const [cookies, setCookie, removeCookie] = useCookies('user');

    useEffect(() => {
        emailRef.current.focus();
    }, [])

    const handleSubmit = async e => {
        e.preventDefault();
        try {
          if (isSignUp && (password !== matchPassword)) {
            setErrMessage('Passwords need to match!');
            return
          }
          const response = await axios.post(`http://localhost:8000/api/auth/${isSignUp ? 'register' : 'sign-in'}`, { email, password });
          setCookie('Email', response.data.userWithoutPassword.email);
          setCookie('userId', response.data.userWithoutPassword._id);
          setCookie('AuthToken', response.data.token);
          const success = response.status === 201 || 200;
          if (success && isSignUp) {
            navigate('/onboarding');
          } else if (success && !isSignUp) {
              navigate('/dashboard');
          }
        } catch (error) {
          const code = error.response.status;
          if (code === 401) {
            setErrMessage('Invalid Credentials');
          } else if (code === 409) {
            setErrMessage('Email in use. Please sign in.');
          } else if (code === 500) {
            setErrMessage('Oops! Something went wrong...');
          }
        }
    }

    useEffect(()=> {
      const result = EMAIL_REGEX.test(email);
      setValidEmail(result);
    }, [email])

    useEffect(() => {
        const result = PWD_REGEX.test(password);
        setValidPassword(result);
        const match = password === matchPassword;
        setValidMatch(match);
    }, [password, matchPassword])

    useEffect(() => {
        setErrMessage('');
    }, [email, password, matchPassword])

  return (
    <form className='auth-form' onSubmit={handleSubmit}>
        { isSignUp &&
          <label className='label'>
            <span className={validEmail ? "valid" : "hide"}>
                <FaCheck />
            </span>
            <span className={validEmail || !email ? "hide" : "invalid"}>
                <FaTimes />
            </span>
          </label>
        }
        <input 
          type='email'
          id='email'
          name='email'
          ref={emailRef}
          placeholder='your-email@example.com'
          required
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setEmailFocus(true)}
          onBlur={() => setEmailFocus(false)}
        />
        { isSignUp &&
          <p className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}>
              Must be a valid email address.
          </p>
        }
        { isSignUp &&
        <label className='label'>
          <span className={validPassword ? "valid" : "hide"}>
              <FaCheck />
          </span>
          <span className={validPassword || !password ? "hide" : "invalid"}>
              <FaTimes />
          </span>
        </label>
        }
        <input 
          type='password'
          id='password'
          name='password'
          placeholder='your-password'
          required
          onChange={(e) => setPassword(e.target.value)}
          onFocus={() => setPasswordFocus(true)}
          onBlur={() => setPasswordFocus(false)}
        />
        { isSignUp &&
          <p className={passwordFocus && !validPassword ? "instructions" : "offscreen"}>
              8 to 24 characters.
              Must include uppercase and lowercase letters, a number and a special character.
              Allowed special characters: !, @, #, $, %
          </p>
        }
        { isSignUp &&
          <label className='label'>
            <span className={validMatch && matchPassword ? "valid" : "hide"}>
                <FaCheck />
            </span>
            <span className={validMatch || !matchPassword ? "hide" : "invalid"}>
                <FaTimes />
            </span>
          </label>
        }
        { isSignUp && (
          <input 
            type='password'
            id='confirm_password'
            name='confirm_password'
            placeholder='confirm-password'
            required
            onChange={(e) => setMatchPassword(e.target.value)}
            onFocus={() => setMatchFocus(true)}
            onBlur={() => setMatchFocus(false)}
          />
        )}
        { isSignUp && (
          <p className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
              Must match the first password input field.
          </p>
        )}
        <input className='submit-button' type="submit" />
        <p ref={errRef} className={errMessage ? 'error' : 'offscreen'}>{errMessage}</p>
    </form>
  )
}

export default AuthForm