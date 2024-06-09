import { Todo } from '../typings';
import TodoItem from './TodoItem';


interface IProps {
  dataSource: Array<Todo>,
  onToggle: (id: number) => void,
  onDel: (id: number) => void,
}


export default function TodoList({ dataSource, onToggle, onDel }: IProps): JSX.Element {
  return (
    <div className="form mt-8 pl-8 pr-8">
      {dataSource.map((item) => <TodoItem item={item} key={item.id} onToggle={onToggle} onDel={onDel}  />)}
    </div>
  );
}
