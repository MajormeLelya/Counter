export const convertState = (state: string, num: number): string => {
  const newState = Number(state) + num;

  return String(newState);
};
