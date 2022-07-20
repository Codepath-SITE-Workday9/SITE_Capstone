import "./TeamView.css";
import TeamModal from "../TeamModal/TeamModal";
export default function TeamView({ setModal }) {
  const fakeData = [
    {
      name: "Live chat feature",
      description: "Lorem ipsum dolor sit amet, sectetur adipiscing elit",
      status: "in progress",
      developers: ["", "", ""],
      priority: "low",
    },
    {
      name: "Activity cards are not colorblind accessible",
      description: "Lorem ipsum dolor sit amet, sectetur adipiscing elit",
      status: "submitted",
      developers: ["", "", ""],
      priority: "extreme",
    },
    {
      name: "Adding nutrition does not render on screen",
      description: "Lorem ipsum dolor sit amet, sectetur adipiscing elit",
      status: "not started",
      developers: ["", "", ""],
      priority: "low",
    },
    {
      name: "Total calories are not calculated correctly",
      description: "Lorem ipsum dolor sit amet, sectetur adipiscing elit",
      status: "in progress",
      developers: ["", "", ""],
      priority: "high",
    },
  ];
  return (
    <div className="team-view">
      <div className="team-header">
        <h1>Lifetracker </h1>
        <button className="new-team-btn" onClick={() => setModal(true)}>
          New Team
        </button>
      </div>
      <div className="team-description">
        <p>
          Lorem ipsum dolor sit amet, sectetur adipiscing elit, sed do eiusmod
          tempor consecr adipiscing elit ipsum dolor sit amet, sectetur
          adipiscing elit, sed do eiusmod tempor consecr adipiscing elit
        </p>
      </div>

      <div className="table">
        <table
          role="table"
          className="table table-striped table-bordered table-hover"
        >
          <thead>
            <tr role="row">
              <th colSpan="5" role="columnheader">
                Tickets
              </th>
            </tr>
            <tr role="row">
              <th colSpan="1" role="columnheader">
                Ticket Name
              </th>
              <th colSpan="1" role="columnheader">
                Description
              </th>
              <th colSpan="1" role="columnheader">
                Status
              </th>
              <th colSpan="1" role="columnheader">
                Developers
              </th>
              <th colSpan="1" role="columnheader">
                Priority
              </th>
            </tr>
          </thead>
          <tbody role="rowgroup">
            {fakeData.map((ticket) => (
              <TicketsTableRow
                name={ticket.name}
                description={ticket.description}
                status={ticket.status}
                devs={ticket.developers}
                priority={ticket.priority}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function TicketsTableRow({
  name,
  description,
  status,
  developers,
  priority,
}) {
  return (
    <tr role="row" className="row">
      <td role="cell">{name}</td>
      <td role="cell">{description}</td>
      <td role="cell">{status}</td>
      <td role="cell">{developers}</td>
      <td role="cell">{priority}</td>
    </tr>
  );
}
