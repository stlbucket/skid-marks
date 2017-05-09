const mutation = `(
  $foundByUserId: ID!
  $name: String!
) {
  createSkidMark(
    foundByUserId: $foundByUserId
    name: $name
  ) {
    id
    name
  }
}`;

module.exports = mutation;