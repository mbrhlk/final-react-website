import React from 'react'
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text
} from './SigninElements';

const SignIn = () => {
  return (
    <>
    <Container>
      <FormWrap>
        <Icon to="/">phonia.</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor= 'for'>Email</FormLabel>
              <FormInput type='password'required />
              <FormButton type='submit'>Continue</FormButton>
              <Text> Forgot password</Text>
          </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default SignIn;
