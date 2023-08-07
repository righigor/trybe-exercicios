export const actionCreator = (number = 1) => ({
  type: 'INCREMENT_COUNTER',
  payload: number,
})