import "./Organization.css";

function Organization({ orgs, currentOrg, currentOrgData, setCurrentOrg }) {
  function handleNext() {
    let nextOrg = orgs[orgs.indexOf(currentOrg) + 1];
    if (!nextOrg) {
      nextOrg = orgs[0];
    }
    setCurrentOrg(nextOrg);
  }

  return (
    <div className="org">
      <button onClick={handleNext}>Next</button>

      <h2>{currentOrgData.name}</h2>
      <img src={currentOrgData.avatar_url} alt="" />
      <p>{currentOrgData.description}</p>
      <p>
        {currentOrgData.location} {currentOrgData.followers} followers
      </p>
      <ul></ul>
    </div>
  );
}

export default Organization;
