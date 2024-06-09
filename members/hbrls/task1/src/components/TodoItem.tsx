import { Todo } from '../typings';


interface IProps {
  item: Todo;
  onToggle: (id: number) => void,
  onDel: (id: number) => void
}


export default function TodoItem({ item, onToggle, onDel }: IProps): JSX.Element {
  return (
    <div className="form-control flex flex-row">
      <label className="label justify-start cursor-pointer basis-3/4">
        <input type="checkbox" className="checkbox mr-4" checked={item.completed} onChange={() => { onToggle(item.id) }} />
        <span className={`label-text text-lg ${item.completed ? 'line-through' : ''}`}>{item.content}</span>
      </label>
      <div className="basis-1/4 flex items-center justify-end">
        <button className="btn btn-sm btn-outline btn-warning" onClick={() => { onDel(item.id) }}>del</button>
      </div>
    </div>
  );
}
