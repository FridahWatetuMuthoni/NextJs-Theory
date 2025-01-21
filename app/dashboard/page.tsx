import React from "react";

function page() {
  return (
    <div>
      <h1 className="text-3xl">Dashboard</h1>
      <ul>
        <li>
          <a href="/dashboard/users">users</a>
        </li>
        <li>
          <a href="/dashboard/analytics">analytics</a>
        </li>
      </ul>
    </div>
  );
}

export default page;
