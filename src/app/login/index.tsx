import React from 'react';
import './styles/index.scss';
import Card from '@components/card';
import Input from '@components/form/input';

function Login() {
  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <Card>
        <div className="is-flex align-items-center justify-content-center flex-column wrapper-card-content">
          <span className="h3 font-weight-500 line-height-2">Welcome back.</span>
          <span className="gap body-2 text-center line-height-1">
            Sign in to be able to write stories that I have done to share experiences with everyone
          </span>
          <form className="gap">
            <Input type="text" name="email" id="text" label="Your email" />
            <Input type="submit" name="submit" id="submit" label="Continue" />
          </form>
        </div>
      </Card>
    </div>
  );
}
export default Login;
