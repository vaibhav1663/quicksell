import './App.css';
import Card from './Components/Card';
import ColumnTitle from './Components/ColumnTitle';
import Navbar from './Components/Navbar';
import { useEffect, useState } from 'react';
import axios from 'axios';

const priorityMap = {
  4: "Urgent",
  3: "High",
  2: "Medium",
  1: "Low",
  0: "No priority"
}

function App() {

  const [res, setRes] = useState({});
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    if (res) {
      setTickets(res.tickets);
      setUsers(res.users)
      console.log(users)
    }
  }, [res])

  const [openSettings, setOpenSettings] = useState(true);

  const [group, setGroup] = useState('state');
  const [order, setOrder] = useState('title');
  const [data, setData] = useState({});
  useEffect(() => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://api.quicksell.co/v1/internal/frontend-assignment',
      headers: {}
    };

    axios.request(config)
      .then((response) => {
        setRes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [])
  useEffect(() => {
    if (order == "priority") {
      console.log(tickets)
      setTickets(tickets.sort((a, b) => a.priority > b.priority ? 1 : -1))
      console.log(tickets)
    }
    if (order == "title") {
      console.log(tickets)
      setTickets(tickets.sort((a, b) => a.title > b.title ? 1 : -1))
      console.log(tickets)
    }
    if (group == 'state') {
      setData(Object.groupBy(tickets, ({ status }) => status));
    }
    else if (group == 'user') {
      setData(Object.groupBy(tickets, ({ userId }) => userId));
    } else if (group == 'priority') {
      setData(Object.groupBy(tickets, ({ priority }) => priority));
    }
  }, [group, order, tickets])

  const findNameById = (userId) => {
    const user = users.find(u => u.id === userId);
    return user ? user.name : "null";
  }
  const sections = Object.keys(data).sort();

  return (
    <>
      <header style={{"backgroundColor":"#ffffff"}}>
        <nav style={{"display":"flex","padding":"1.5rem","justifyContent":"space-between","alignItems":"center","@media (min-width: 1024px)":{"paddingLeft":"2rem","paddingRight":"2rem"}}} aria-label="Global">
          <div style={{"display":"flex","columnGap":"3rem"}}>
            <div style={{"position":"relative"}}>
              <button onClick={() => { setOpenSettings(!openSettings) }} type="button" style={{"display":"flex","columnGap":"0.25rem","alignItems":"center","fontSize":"0.875rem","lineHeight":["1.25rem","1.5rem"],"fontWeight":600,"color":"#111827"}} aria-expanded="false">
                Display
                <svg class="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </button>
              <div style={{ display: `${openSettings ? "none" : "block"}`,"overflow":"hidden","position":"absolute","top":"100%","zIndex":10,"padding":"1rem","marginTop":"0.75rem","borderRadius":"0.75rem","width":"100vw","maxWidth":"24rem","backgroundColor":"#ffffff"}}>
                <div style={{"display":"flex","alignItems":"center"}}>
                  <label htmlFor="group" style={{"display":"block","marginRight":"0.5rem","marginBottom":"0.5rem","fontSize":"0.875rem","lineHeight":"1.25rem","fontWeight":500,"color":"#111827"}}>Grouping</label>
                  <select id="group" onChange={(e) => { setGroup(e.target.selectedOptions[0].value) }} style={{"display":"block","padding":"0.5rem","borderRadius":"0.5rem","borderWidth":"1px","borderColor":"#D1D5DB","width":"100%","fontSize":"0.875rem","lineHeight":"1.25rem","color":"#111827","backgroundColor":"#F9FAFB"}}>
                    <option value="state" selected>State</option>
                    <option value="user">User</option>
                    <option value="priority">Priority</option>
                  </select>
                </div>
                <div className='flex items-center mt-4'>
                  <label htmlFor="order" style={{"display":"block","marginRight":"0.5rem","marginBottom":"0.5rem","fontSize":"0.875rem","lineHeight":"1.25rem","fontWeight":500,"color":"#111827"}}>Ordering</label>
                  <select id="order" disabled={group === "priority" ? true : false} onChange={(e) => { setOrder(e.target.selectedOptions[0].value) }} style={{"display":"block","padding":"0.5rem","borderRadius":"0.5rem","borderWidth":"1px","borderColor":"#D1D5DB","width":"100%","fontSize":"0.875rem","lineHeight":"1.25rem","color":"#111827","backgroundColor":"#F9FAFB"}}>
                    <option value="title" selected>Title</option>
                    <option value="priority">Priority</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div style={{"display":"flex","overflow":"auto","paddingLeft":"0.75rem","paddingTop":"1rem","backgroundColor":"#F3F4F6", height: 'calc(100vh - 60px)' }}>

        {sections.map((section) => (
          <div style={{"display":"flex",width: "20%",minWidth: "250px", flexDirection:"column" ,"paddingLeft":"0.75rem","paddingTop":"1.5rem","backgroundColor":"#F3F4F6"}} key={section}>
            <ColumnTitle group={group}  title={group == "user" ? findNameById(section) : (group == "priority" ? priorityMap[section] : section)} length={data[section].length} />
            {data[section].map((task) => (
              <Card group={group} status={task.status} priority={task.priority} tags={task.tag} id={task.id} title={task.title}></Card>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
