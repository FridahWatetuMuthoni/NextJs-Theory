import Link from "next/link";
import React from "react";

function page() {
  return (
    <div>
      <h1 className="text-3xl">Dashboard</h1>
      <ul>
        <li>
          <Link href="/dashboard/users">users</Link>
        </li>
        <li>
          <Link href="/dashboard/analytics">analytics</Link>
        </li>
      </ul>
    </div>
  );
}

export default page;
