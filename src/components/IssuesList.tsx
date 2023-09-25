import { useQuery } from "@tanstack/react-query";
import type { IssueItemProps, LabelType } from "interfaces/index";
import { IssueItem } from "./IssueItem";

export default function IssuesList({
  labels,
  status,
}: {
  labels: LabelType[];
  status: string;
}) {
  const issuesQuery = useQuery(["issues", { labels, status }], () => {
    const statusString = status ? `&status=${status}` : "";
    const labelsString = labels.map((label) => `labels[]=${label}`).join("&");
    return fetch(`/api/issues?${labelsString}${statusString}`).then((res) =>
      res.json(),
    );
  });
  return (
    <div>
      <h1>Issues List</h1>
      {issuesQuery.isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul className="issues-list">
          {issuesQuery.data.map((issue: IssueItemProps) => (
            <IssueItem
              key={issue.id}
              title={issue.title}
              number={issue.number}
              assignee={issue.assignee}
              commentCount={issue?.comments?.length}
              createdBy={issue.createdBy}
              createdDate={issue.createdDate}
              labels={issue.labels}
              status={issue.status}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
