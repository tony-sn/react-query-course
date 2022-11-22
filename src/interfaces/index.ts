export type TODO_TYPEME = any

export interface LabelType {
  id: string
  name: string
  color: string
}
export type CreatedDate = string | number | Date | undefined

export interface CommentProps {
  comment?: {
    id: string
  }
  comments?: string[]
  commentCount?: number | unknown
  createdBy: string
  createdDate: CreatedDate
}
export interface IssueItemProps extends CommentProps {
  id?: string
  title: string
  number: number
  status: string
  assignee: string
  labels: LabelType[]
}
