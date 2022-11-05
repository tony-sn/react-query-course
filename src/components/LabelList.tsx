import { useLabelsData } from "helpers/useLabelsData";
import { LabelType, TODO_TYPEME } from "interfaces/index";

// FIXME: type for toggle function later
export default function LabelList({
  selected,
  toggle,
}: {
  selected: LabelType[];
  toggle: TODO_TYPEME;
}) {
  const labelsQuery = useLabelsData();

  return (
    <div className="labels">
      <h3>Labels</h3>;
      {labelsQuery.isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {labelsQuery.data.map((label: LabelType) => (
            <li key={label.id}>
              <button
                onClick={() => toggle(label.id)}
                className={`label ${
                  selected.includes((label as TODO_TYPEME).id) ? "selected " : ""
                }${label.color}`}
              >
                {label.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}