import { useLabelsData } from 'helpers/useLabelsData'
import type { LabelType } from 'interfaces/index'

interface LabelListProps {
  selected: LabelType[] | string[]
  toggle: (id: string) => void
}

export default function LabelList({
  selected,
  toggle,
}: LabelListProps) {
  const labelsQuery = useLabelsData()

  return (
    <div className="labels">
      <h3>Labels</h3>
      {labelsQuery.isLoading
        ? (
          <p>Loading...</p>
          )
        : (
          <ul>

            {
              labelsQuery.data.map((label: LabelType) => (
                <li key={label.id}>
                  <button
                    onClick={() => toggle(label.id)}
                    // @ts-expect-error label.id is a string
                    className={`label ${selected.includes(label!.id) ? 'selected ' : ''
                      }${label.color}`}
                  >
                    {label.name}
                  </button>
                </li>
              ))}
          </ul>
          )}
    </div>
  )
}
