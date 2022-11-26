async function fetchData() {
  const res = await fetch(`/Users/amrit/Project Syn/verszeroth/storage/dhatu.json`);
  const data = await res.json();

  return data;
}

export default async function Index() {
  const data = await fetchData();

  return 
  
  <div>{data}</div>;
}
