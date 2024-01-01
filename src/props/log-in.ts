export interface LoginValues {
  // The Email For The Login Form
  email: string;

  // The Password For The Login Form
  password: string;

  // Should The User Be Remembered In Login Form
  remember: boolean;
}

export interface ResetPasswordValues {
  // The Email To Reset
  email: string;
}
