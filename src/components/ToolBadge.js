import React from "react";

function ToolBadge({ tool, name }) {
  return (
    <div>
      { tool }
      <p>{ name }</p>
    </div>
  );
}

export default ToolBadge;
