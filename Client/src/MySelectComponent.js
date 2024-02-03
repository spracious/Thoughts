import React from 'react';
import { Form, Button, InputGroup, FormControl } from 'react-bootstrap';

function CustomForm({ option }) {
  return (
    <Form className='account-form' onSubmit={(evt) => evt.preventDefault()}>
      <div className={'account-form-fields ' + (option === 1 ? 'sign-in' : (option === 2 ? 'sign-up' : 'forgot'))}>
        <InputGroup className="mb-3">
          <FormControl id='email' name='email' type='email' placeholder='E-mail' required />
        </InputGroup>
        <InputGroup className="mb-3">
          <FormControl
            id='password'
            name='password'
            type='password'
            placeholder='Password'
            required={option === 1 || option === 2 ? true : false}
            disabled={option === 3 ? true : false}
          />
        </InputGroup>
        {option === 2 && (
          <InputGroup className="mb-3">
            <FormControl
              id='repeat-password'
              name='repeat-password'
              type='password'
              placeholder='Repeat password'
              required={option === 2 ? true : false}
              disabled={option === 1 || option === 3 ? true : false}
            />
          </InputGroup>
        )}
      </div>
      <Button className='btn-submit-form' type='submit'>
        {option === 1 ? 'Sign in' : option === 2 ? 'Sign up' : 'Reset password'}
      </Button>
    </Form>
  );
}

function App() {
  const [option, setOption] = React.useState(1);

  return (
    <div className='container'>
      <header>
        <div className={'header-headings ' + (option === 1 ? 'sign-in' : (option === 2 ? 'sign-up' : 'forgot'))}>
          <span>Sign in to your account</span>
          <span>Create an account</span>
          <span>Reset your password</span>
        </div>
      </header>
      <ul className='options'>
        <li className={option === 1 ? 'active' : ''} onClick={() => setOption(1)}>
          Sign in
        </li>
        <li className={option === 2 ? 'active' : ''} onClick={() => setOption(2)}>
          Sign up
        </li>
        <li className={option === 3 ? 'active' : ''} onClick={() => setOption(3)}>
          Forgot
        </li>
      </ul>
      <CustomForm option={option} />
      <footer>
        <a href='https://dribbble.com/shots/5041581-Zenbu-Sign-in-up-forgot-page' target='_blank'>
          Original design with animations by Zenbu
        </a>
      </footer>
    </div>
  );
}

