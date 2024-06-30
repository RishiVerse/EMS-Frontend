import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateTeam() {
  const navigate = useNavigate();
  const [teamName, setTeamName] = useState("");
  const [description, setDescription] = useState("");
  const [members, setMembers] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally handle the form submission, e.g., send data to a server
    // For this example, we'll just log the team details and navigate to a new route
    const teamDetails = {
      teamName,
      description,
      members: members.split(",").map((member) => member.trim()),
    };
    console.log("Team Created:", teamDetails);
    // Navigate to the team details page
    navigate("/team-details", { state: { team: teamDetails } });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-start">
        <div className="col-md-6">
          <h1 style={{ paddingTop: "30px" }}>Create a New Team</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="teamName" className="form-label">
                Team Name
              </label>
              <input
                type="text"
                className="form-control"
                id="teamName"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                required
              />
              <label htmlFor="teamName" className="form-label">
                Team Name
              </label>
              <input
                type="text"
                className="form-control"
                id="teamName"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                required
              />
              <label htmlFor="teamName" className="form-label">
                Team Name
              </label>
              <input
                type="text"
                className="form-control"
                id="teamName"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                className="form-control"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="members" className="form-label">
                Members (comma separated)
              </label>
              <input
                type="text"
                className="form-control"
                id="members"
                value={members}
                onChange={(e) => setMembers(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Create Team
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateTeam;
