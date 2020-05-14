import React, { useState, useEffect } from 'react';
import './styles/index.scss';
import Card from '@components/card';
import FormEmail from './fragments/formEmail';
import FormPassword from './fragments/formPassword';
import { FormData } from '@/types/app/login';

function Login() {
  const [filledEmail, setFilledEmail] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>();

  useEffect(() => {
    if (formData?.email) return setFilledEmail(true);
    return setFilledEmail(false);
  }, [formData]);

  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <Card>
        <div className="is-flex align-items-center justify-content-center flex-column wrapper-card-content">
          <span className="h3 font-weight-500 line-height-2">Welcome back.</span>
          <span className="gap body-2 text-center line-height-1">
            Sign in to be able to write stories that I have done to share experiences with everyone
          </span>
          <div>
            {!filledEmail ? (
              <FormEmail formData={formData} setFormData={setFormData} />
            ) : (
              <FormPassword formData={formData} setFormData={setFormData} />
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}
export default Login;
