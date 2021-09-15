import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Oct 1st at 2:40pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at School',
      day: 'Oct 4st at 8:25am',
      reminder: true,
    },
    {
      id: 3,
      text: 'Grocery Shopping',
      day: 'Sept 31st at 12:30pm',
      reminder: false,
    },
  ]);

  //Delete Tasks
  const deleteTask = (id) => {
    console.log('Delete', id);
  };

  return (
    <div className='container'>
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
