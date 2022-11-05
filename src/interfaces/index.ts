export type TODO_TYPEME = any;

export type LabelType = {
  id: string;
  name: string;
  color: string;
};

export interface CommentProps {
  comments?: string[];
  commentCount?: number | unknown;
  createdBy: string;
  createdDate: Date;

}

export interface IssueItemProps extends CommentProps {
  id?: string;
  title: string;
  number: number;
  status: string;
  assignee: string;
  labels: LabelType[];
}