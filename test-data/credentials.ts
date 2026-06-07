export const users = {
  validUser: {
    username: 'standard_user',
    password: 'secret_sauce'
  },

  invalidUser: {
    username: 'wrong_user',
    password: 'wrong_password'
  }
};

export const loginData = [
  {
    username: 'standard_user',
    password: 'secret_sauce',
    expected: 'success'
  },
  {
    username: 'locked_out_user',
    password: 'secret_sauce',
    expected: 'error'
  },
  {
    username: 'wrong_user',
    password: 'wrong_password',
    expected: 'error'
  }
];