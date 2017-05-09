const mutation = `CreateUser($email: String!, $password: String!){
  createUser ( authProvider: {
    email: {
      email: $email
      password: $password
    }
  }) {
    id
  }
}`

module.exports = mutation;