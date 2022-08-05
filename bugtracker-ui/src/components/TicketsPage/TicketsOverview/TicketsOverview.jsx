import "./TicketsOverview.css";
import { useEffect, useState } from "react";
import TicketCard from "../TicketCard/TicketCard";
import { useTicketContext } from "../../../contexts/ticket";
import { useProjectContext } from "../../../contexts/project";
import apiClient from "../../../services/apiClient";
// overview of all Tickets a user is apart of
export default function TicketsOverview({
  tickets,
  handleOnTicketClick,
  isLoading,
  selectedProject,
  setSelectedProject,
  handleOnProjectChange,
  selectedProjectTickets,
}) {
  // ticket search term
  const [searchTerm, setSearchTerm] = useState("");
  // modal variable to display modal
  const { setTicketModal } = useTicketContext();
  // all projects a user is apart of
  const { projects } = useProjectContext();

  // the projects dropown categories
  const projectCategories = [{ name: "All projects", id: -1 }];

  // map through the projects to add each project's name and id as an object to the dropdown category.
  projects.map((p) => {
    let projObj = { name: p.name, id: p.id };
    projectCategories.push(projObj);
  });

  // handler function to set ticket search term as a user types
  const handleOnSearchChange = (change) => {
    setSearchTerm(change.target.value);
  };

  // handler function to clear search term if close button is clicked
  const handleOnClickSearchBtn = () => {
    setSearchTerm("");
  };

  // update ticketsToShow array depending on searchTerm
  let ticketsToShow = [];
  if (selectedProjectTickets) {
    ticketsToShow = selectedProjectTickets.filter((t) =>
      t.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  useEffect(() => {}, [selectedProject]);

  return (
    <div className="tickets-overview">
      {/* tickets overview header  */}
      <div className="header">
        <h1>Tickets</h1>
        <button className="new-btn" onClick={() => setTicketModal(true)}>
          + New Ticket
        </button>
      </div>
      <div className="top">
        {/* sort by component to sort the ticket results */}
        <div className="sort-by">
          <div className="sort-by-dropdown">
            <label> Select Project:</label>
            <select
              name="selectList"
              id="selectList"
              onChange={handleOnProjectChange}
              value={selectedProject}
            >
              {projectCategories?.map((c) => (
                <option value={c.id} key={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <SearchForTickets
        handleOnSearchChange={handleOnSearchChange}
        handleOnClickSearchBtn={handleOnClickSearchBtn}
        searchTerm={searchTerm}
      />

      <Filters
        handleOnProjectChange={handleOnProjectChange}
        selectedProject={selectedProject}
        projectCategories={projectCategories}
      />
      {/* container that will hold ticket cards */}
      {isLoading ? (
        <div>Loding ...</div>
      ) : (
        <div className="ticket-card-container">
          {/* conditionally display ticket cards if ticketsToShow is not empty, otherwise "No tickets available" */}
          {ticketsToShow.length > 0 ? (
            <>
              {ticketsToShow?.map((ticket) => (
                <TicketCard
                  ticket={ticket}
                  handleOnClick={handleOnTicketClick}
                  key={ticket.id}
                />
              ))}{" "}
            </>
          ) : (
            <div className="nothing-available-label">No tickets available</div>
          )}
        </div>
      )}
    </div>
  );
}

export function SearchForTickets({
  handleOnSearchChange,
  handleOnClickSearchBtn,
  searchTerm,
}) {
  return (
    <div className="ticket-search">
      <input
        className="search-input"
        type="text"
        name="search"
        placeholder="search for a ticket"
        value={searchTerm}
        onChange={handleOnSearchChange}
      />
      <button className="search-btn" onClick={handleOnClickSearchBtn}>
        <i className="material-icons">
          {/* conditionally render search or close icon depending on search terms */}
          {searchTerm == "" ? "search" : "close"}
        </i>
      </button>
    </div>
  );
}

export function Filters({}) {
  const priorityCategories = [
    "All priorities",
    "Low",
    "Medium",
    "High",
    "Critical",
  ];
  const statusCategories = [
    "All statuses",
    "Unassigned",
    "Not Started",
    "In Progress",
    "Resolved",
  ];
  const categoryCategories = ["All categories", "Bug", "New Feature"];

  return (
    <div className="ticket-filters-container">
      <div className="bottom">
        {/* sort by component to sort the ticket results */}
        <div className="sort-by">
          <div className="sort-by-dropdown">
            <select
              name="selectList"
              id="selectList"
              // onChange={handleOnProjectChange}
              // value={selectedProject}
            >
              {priorityCategories?.map((c) => (
                <option value={c} key={c.id}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* sort by component to sort the ticket results */}
        <div className="sort-by">
          <div className="sort-by-dropdown">
            <select
              name="selectList"
              id="selectList"
              // onChange={handleOnProjectChange}
              // value={selectedProject}
            >
              {statusCategories?.map((c) => (
                <option value={c} key={c.id}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* sort by component to sort the ticket results */}
        <div className="sort-by">
          <div className="sort-by-dropdown">
            <select
              name="selectList"
              id="selectList"
              // onChange={handleOnProjectChange}
              // value={selectedProject}
            >
              {categoryCategories?.map((c) => (
                <option value={c} key={c.id}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
