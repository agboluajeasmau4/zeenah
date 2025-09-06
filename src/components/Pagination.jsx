import React from "react";

export default function Pagination({ page, totalPages, onPage }) {
  const pages = [];
  for (let i=1;i<=totalPages;i++) pages.push(i);
  return (
    <div className="pagination">
      <button onClick={()=>onPage(page-1)} disabled={page===1}>Prev</button>
      {pages.map(p=>(
        <button key={p} className={p===page?"active":""} onClick={()=>onPage(p)}>{p}</button>
      ))}
      <button onClick={()=>onPage(page+1)} disabled={page===totalPages}>Next</button>
    </div>
  );
}
