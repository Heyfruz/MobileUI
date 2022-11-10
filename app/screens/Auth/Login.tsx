import { useRef, useState } from 'react';
import { TextInput } from 'react-native';

import {
  Button,
  Container,
  Divider,
  Footer,
  Form,
  FormField,
  Header,
  Submit,
} from 'components';
import { setAuthenticated, useDispatch } from 'store';
import { loginValidationSchema as validationSchema } from 'utils';

export default function Login(): JSX.Element {
  const [secure, setSecure] = useState(true);
  const dispatch = useDispatch();

  const passwordRef = useRef<TextInput>(null);

  return (
    <>
      <Header title="Login" />
      <Container>
        <Form
          {...{ validationSchema }}
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={values => {
            console.log(values);
            dispatch(setAuthenticated(true));
          }}>
          <Divider />
          <FormField
            placeholder="Email"
            name="email"
            keyboardType="email-address"
            autoCorrect={false}
            returnKeyLabel="Next"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current?.focus()}
          />
          <FormField
            ref={passwordRef}
            placeholder="Password"
            name="password"
            secureTextEntry={secure}
            returnKeyLabel="Done"
            returnKeyType="done"
            rightLabel={secure ? 'Show' : 'Hide'}
            onRightLabelPress={() => {
              setSecure(sec => !sec);
            }}
          />
          <Footer>
            <Submit label="Login" />
            <Divider space="t" />
            <Button variant="transparent" label="Forgot your password?" />
          </Footer>
        </Form>
      </Container>
    </>
  );
}
