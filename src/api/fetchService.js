export const fetchService = async (id) => {
  const response = await fetch(`http://127.0.0.1:8000/api/services/${id}/`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};
