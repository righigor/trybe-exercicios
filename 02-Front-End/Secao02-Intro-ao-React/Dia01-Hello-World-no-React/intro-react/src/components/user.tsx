const user = {
  name: 'Igor',
  lastName: 'Righi',
};

function User () {
  return <span>{`${user.name} ${user.lastName}`}</span>
}

export default User