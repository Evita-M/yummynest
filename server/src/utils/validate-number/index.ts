export const validateNumber = (
  propertyName: string,
  num: number,
  min: number,
  max: number
) => {
  if (num < min) {
    throw new Error(`${propertyName} must be at least ${min}`);
  }
  if (num > max) {
    throw new Error(`${propertyName} must be at most ${max}`);
  }
  return num;
};
