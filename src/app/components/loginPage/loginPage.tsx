'use client';
import { LoginPageContainer, FormContainer } from './loginPage.styled';
import { Text, Input } from '../common';

export default function LoginPage() {
  return (
    <LoginPageContainer>
      <FormContainer>
        <Input type={'number'} onChange={(e) => ''} placeHolder={''} />
      </FormContainer>
    </LoginPageContainer>
  );
}
