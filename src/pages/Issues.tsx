import { useState } from 'react'

import IssuesList from 'components/IssuesList'
import LabelList from 'components/LabelList'
import { StatusSelect } from 'components/StatusSelect'

export default function Issues() {
  const [labels, setLabels] = useState<string[]>([])
  const [status, setStatus] = useState('')

  return (
    <div>
      <main>
        <section>
          <IssuesList labels={labels} status={status} />
        </section>
        <aside>
          <LabelList
            selected={labels}
            toggle={(label: string) =>
              setLabels(currentLabels =>
                currentLabels.includes(label)
                  ? currentLabels.filter(
                    currentLabel => currentLabel !== label,
                  )
                  : currentLabels.concat(label),
              )
            }
          />
          <h3>Status</h3>
          <StatusSelect
            value={status}
            onChange={event => setStatus(event.target.value)}
          />
        </aside>
      </main>
    </div>
  )
}
