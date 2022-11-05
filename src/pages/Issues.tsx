import { useState } from "react";

import IssuesList from "components/IssuesList";
import LabelList from "components/LabelList";
import { LabelType } from "interfaces/index";
import { StatusSelect } from "components/StatusSelect";

export default function Issues() {
  const [labels, setLabels] = useState<LabelType[]>([]);
  const [status, setStatus] = useState("");

  return (
    <div>
      <main>
        <section>
          <h1>Issues</h1>
          <IssuesList labels={labels} status={status} />
        </section>
        <aside>
          <LabelList
            selected={labels}
            toggle={(label: LabelType) =>
              setLabels((currentLabels) =>
                currentLabels.includes(label)
                  ? currentLabels.filter(
                      (currentLabel) => currentLabel !== label
                    )
                  : currentLabels.concat(label)
              )
            }
          />
          <h3>Status</h3>
          <StatusSelect
            value={status}
            onChange={(event) => setStatus(event.target.value)}
          />
        </aside>
      </main>
    </div>
  );
}