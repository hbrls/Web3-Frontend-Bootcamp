import { useState } from 'react';


interface IProps {
  onSubmit : (value: string) => void
};


export default function AddTodo(props: IProps): JSX.Element {
  const [ value, setValue ] = useState('');

  const onSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value.trim() !== '') {
      props.onSubmit(value);
      setValue('');
    }
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form-control items-center">
        <div className="input-group w-auto">
          <input type="text" className="form-input input input-bordered" placeholder="Add a new Todo"
            value={value} onChange={(e) => setValue(e.target.value)}/>
          <button type="submit" className="btn">Add</button>
        </div>
      </div>
    </form>
  );
}
