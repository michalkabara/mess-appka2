export const fetchData = async (fetchUrl) => {
  const r = await fetch(fetchUrl);
  const data = await r.json();
  return data;
};
