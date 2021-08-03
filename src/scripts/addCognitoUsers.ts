import Amplify, { Auth } from 'aws-amplify';
import awsmobile from '../aws-exports';

Amplify.configure(awsmobile);
async function signUp(username: string, password: string, role: string) {
  try {
    const { user } = await Auth.signUp({
      username,
      password,
      attributes: {
        'custom:role': 'role', // custom attribute, not standard
      },
    });
    console.log(user);
  } catch (error) {
    console.log('error signing up:', error);
  }
}

signUp('Trainer1', 'password', 'Trainer');
signUp('QC_Analyst1', 'password', 'QC_Analyst');
signUp('Admin1', 'password', 'Admin');
