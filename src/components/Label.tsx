import { useLabelsData } from 'helpers/useLabelsData'

import type { LabelType } from 'interfaces/index'

// TODO: check Type label here
export function Label({ label }: { label: string }) {
  const labelsQuery = useLabelsData()
  if (labelsQuery.isLoading)
    return null
  const labelObj = labelsQuery.data.find(
    (queryLabel: LabelType) => queryLabel.id === label,
  )
  if (!labelObj)
    return null
  return <span className={`label ${labelObj.color}`}>{labelObj.name}</span>
}
