import MaterialTable from "material-table";

const data = [
  { id: 1, collaborator: "Doug Case" },
  { id: 2, collaborator: "Moe Elias" },
  { id: 3, collaborator: "Anitya Gupta" },
  { id: 4, collaborator: "Aaron Alemi" },
  { id: 5, collaborator: "Doris Sanchez Velasquez" },
  { id: 6, collaborator: "Katherin Jimenez" },
];

const columns = [
  { title: "Id", field: "id", hidden: true },
  { title: "Collaborator", field: "collaborator" },
];

export const TicketsPageCollaboratorsTable = () => {
  return <MaterialTable title="Collaborators" columns={columns} data={data} />;
};
