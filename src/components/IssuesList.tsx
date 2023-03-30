import { useState } from 'react'
import { useQuery } from 'react-query'
import type { IssueItemProps } from 'interfaces/index'
import fetchWithError from 'helpers/fetchWithError'
import { IssueItem } from './IssueItem'
import Loader from './Loader'

interface FormProps extends HTMLFormControlsCollection {
  search: {
    value: HTMLInputElement | string
  }
}

interface SearchFormProps extends HTMLFormElement {
  readonly elements: FormProps
}

// TODO: learn about signal in React Query, query cancellation
export default function IssuesList({
  labels,
  status,
}: {
  labels: string[]
  status: string
}) {
  const issuesQuery = useQuery(['issues', { labels, status }], ({ signal }) => {
    const statusString = status ? `&status=${status}` : ''
    const labelsString = labels.map(label => `labels[]=${label}`).join('&')
    return fetchWithError(`/api/issues?${labelsString}${statusString}`, {
      signal,
    })
  })
  const [searchValue, setSearchValue] = useState<SearchFormProps | string>('')

  const searchQuery: Record<string, any> = useQuery(
    ['issues', 'search', searchValue],
    ({ signal }) =>
      fetch(`/api/search/issues?q=${searchValue}`, { signal }).then(res =>
        res.json(),
      ),
    {
      enabled: searchValue.length > 0,
    },
  )

  return (
    <div>
      <form
        onSubmit={(event: React.FormEvent<SearchFormProps>) => {
          event.preventDefault()

          setSearchValue(event.currentTarget.elements.search.value)
        }}
      >
        <label htmlFor="search">Search Issues</label>
        <input
          type="search"
          placeholder="Search"
          name="search"
          id="search"
          onChange={(event) => {
            if (event.target.value.length === 0)
              setSearchValue('')
          }}
        />
      </form>

      <h2>Issues List {issuesQuery.fetchStatus === 'fetching' ? <Loader /> : null}</h2>
      {issuesQuery.isLoading
        ? (
          <p>Loading...</p>
          )
        : issuesQuery.isError
          ? (<p>{issuesQuery.error.message}</p>)
          : searchQuery.fetchStatus === 'idle'
          && searchQuery.isLoading === true
            ? (
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
              )

            : (
            <>
              <h2>Search Results</h2>
              {searchQuery.isLoading
                ? (
                  <p>Loading...</p>
                  )
                : (
                  <>
                    <p>{searchQuery.data?.count} Results</p>
                    <ul className="issues-list">
                      {searchQuery.data?.items.map((issue: IssueItemProps) => (
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
                  </>
                  )}
            </>
              )}
    </div>
  )
}
