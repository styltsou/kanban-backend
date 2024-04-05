export const generateSlug = (value: string): string => {
  return value
    .toLowerCase() // Convert the input string to lowercase
    .replace(/[^\w\s-]/g, '') // Remove non-word characters except dashes and spaces
    .trim() // Trim leading and trailing spaces
    .replace(/\s+/g, '-') // Replace spaces with dashes
    .replace(/-+/g, '-'); // Replace multiple dashes with a single dash
};
