async function getProjects() {
  const res = await fetch(`/Users/amrit/Documents/Files/Construction Materia/Lots of Text/html/pAda-index_sa-dharma.htm`, { cache: 'no-store' });
  const projects = await res.json();

  return projects;
}

export default async function Dashboard() {
  const projects = await getProjects();

  return projects.map((project) => <div>{project.name}</div>);
}
