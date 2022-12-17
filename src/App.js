import {useState} from 'react';
import './App.css';
import Form from './components/Form';
import Watches from './components/Watches';

function App() {
    const [watches, setWatches] = useState([]);
    const [form, setForm] = useState({
        name: '',
        timeZone: ''
    })
    const handleChange = (evt) => {
        const name = evt.target.name;
        const value = evt.target.value;
        setForm((prevForm) => ({...prevForm, [name]: value}));
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (!form.name || !form.timeZone) return;
        const watch = {
            name: `${form.name}`,
            offset: Number(`${form.timeZone}`),
            id: `${Math.random()}`

        }
        setForm(({
            name: '',
            timeZone: ''
        }))

        setWatches(prevWatches => [
            ...prevWatches, watch
        ])
    }

    const handleDelete = (evt) => {
        const newWatches = watches.filter(el => el.id !== evt.target.parentNode.id);

        setWatches(newWatches);
    }

    return (
        <div className='container'>
            <Form form={form} onHandleChange={handleChange}
                  onHandleSubmit={handleSubmit}></Form>
            <Watches form={form} watches={watches}
                     onHandleDelete={handleDelete}></Watches>
        </div>
    );
}


export default App;