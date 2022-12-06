
const fs = require("fs");
const path = require("path");
const { Nuclia } = require('@nuclia/core');
require("localstorage-polyfill");
require("isomorphic-unfetch");
const nuclia = new Nuclia({
  backend: "https://europe-1.nuclia.cloud/api/v1/kb/dd0578fe-9a0e-4cea-a859-483759617d97",
  zone: "europe-1",
  knowledgeBox: "dd0578fe-9a0e-4cea-a859-483759617d97",
  apiKey: "95a54f19-09d9-444b-9a82-26ab812af50c",
})

const repositoryGather = (kb) => {
  const repDir = path.join(process.cwd(),'repository');
  const repositories = fs.readdirSync(repDir);

  repositories
  .filter((repository) => repository.endsWith(".md"))
  .forEach((repository) => {
    const repositoryPath = path.join(repDir, repository);
    const repContent = fs.readFileSync(repositoryPath, "utf8");
    const repTitle = repContent.split("\n")[0].replace("#","");
    const repSlug = repository.replace(".md","");

    const resource = {
      title: repTitle,
      slug: repSlug,
      texts: {
        text: {
          format: "MARKDOWN",
          body: repContent,
        },
      },
    };
    kb.createResource(resource).subscribe({
      next: () => console.log(`yeah ${repSlug} at dere`),
      error: (err) => console.error(`Error with ${repSlug}`, err),
    });
  });
};

nuclia.db.getKnowledgeBox().subscribe((kb) => repositoryGather(kb));

export{}