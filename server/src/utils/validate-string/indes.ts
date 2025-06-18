export const validateString = (
  propertyName: string,
  str: string,
  minLength: number,
  maxLength: number
) => {
  if (str.length < minLength) {
    throw new Error(
      `${propertyName} must be at least ${minLength} characters long`
    );
  }
  if (str.length > maxLength) {
    throw new Error(
      `${propertyName} must be at most ${maxLength} characters long`
    );
  }
  return str;
};
