import React, { useState, useEffect } from 'react';
import './styles/index.scss';
import Card from '@components/card';
import FormUsername from './fragments/formUsername';
import FormPassword from './fragments/formPassword';
import { FormData, LoginProps } from '@/types/app/login';
import { saveToken } from '@util/token';
import classNames from 'classnames';

function Login(props: LoginProps) {
  const { auth, authIsError, requestLoggedIn, authErrorMessage } = props;
  const [filledUsername, setFilledUsername] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>();
  const [isModalShow, setIsModalShow] = useState<boolean>(true);

  useEffect(() => {
    if (formData?.username) return setFilledUsername(true);
    return setFilledUsername(false);
  }, [formData]);

  useEffect(() => {
    if (Object.keys(auth).length !== 0 && !authIsError) {
      saveToken(auth.result);
      setIsModalShow(false);
    }
  }, [auth, authIsError]);

  return (
    <div
      className={classNames('modal', {
        'is-passive is-active': isModalShow,
      })}
    >
      <div className="modal-background"></div>
      <Card>
        <div className="is-flex align-items-center justify-content-center flex-column wrapper-card-content">
          <span className="h3 font-weight-500 line-height-2">Welcome back.</span>
          <span className="gap body-2 text-center line-height-1">
            Sign in to be able to write stories that I have done to share experiences with everyone
          </span>
          <div>
            {authIsError && <div className="gap notification is-danger">{authErrorMessage}</div>}
            {!filledUsername ? (
              <FormUsername formData={formData} setFormData={setFormData} />
            ) : (
              <FormPassword
                formData={formData}
                setFormData={setFormData}
                requestLoggedIn={requestLoggedIn}
              />
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}
export default Login;
