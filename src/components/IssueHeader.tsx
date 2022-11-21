import { GoIssueClosed, GoIssueOpened } from 'react-icons/go'
import { possibleStatus } from 'helpers/defaultData'
import { useUserData } from 'helpers/useUserData'
import { relativeDate } from 'helpers/relativeDate'
import type { CommentProps } from 'interfaces/index'

export const IssueHeader = ({
  title,
  number,
  status = 'todo',
  createdBy,
  createdDate,
  comments,
}: {
  title: string
  number: string | number
  status: 'done' | 'cancelled' | 'todo'
  createdBy: Date | string | undefined
  createdDate: Date | string | undefined
  comments: CommentProps[]
}) => {
  const statusObject = possibleStatus.find(
    (pstatus: { id: string }) => pstatus.id === status,
  )

  const createdUser = useUserData(createdBy)
  return (
    <header>
      <h2>
        {title} <span>#{number}</span>
      </h2>
      <div>
        <span
          className={
            status === 'done' || status === 'cancelled' ? 'closed' : 'open'
          }
        >
          {status === 'done' || status === 'cancelled'
            ? (
              <GoIssueClosed />
              )
            : (
              <GoIssueOpened />
              )}
          {statusObject.label}
        </span>
        <span className="created-by">
          {createdUser.isLoading ? '...' : createdUser.data?.name}
        </span>{' '}
        opened this issue {relativeDate(createdDate)} · {comments.length}{' '}
        comments
      </div>
    </header>
  )
}
