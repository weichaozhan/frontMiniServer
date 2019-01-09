export const TEST_DO = 'TEST_DO';

export const dotest = (text) => {
  return {
    type: TEST_DO,
    text,
  };
};