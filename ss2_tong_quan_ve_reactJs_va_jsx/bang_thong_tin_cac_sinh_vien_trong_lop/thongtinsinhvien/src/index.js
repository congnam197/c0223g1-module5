import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const students = [
  {
    company: 'CodeGym',
    contact: 'Pham Cong Nam',
    country: 'Nghe An'
  },
  {
    company: 'CodeGym',
    contact: 'Le Van Hung',
    country: 'Da Nang'
  },
  {
    company: 'CodeGym',
    contact: 'Mai  Phuoc Tai',
    country: 'Hue'
  },
  {
    company: 'CodeGym',
    contact: 'Helen Bennett',
    country: 'UK'
  },
  {
    company: 'CodeGym',
    contact: 'Do Thanh Nhan',
    country: 'Hue'
  },
  {
    company: 'CodeGym',
    contact: 'Truong Tan Hai',
    country: 'Quang Nam'
  }
];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <h1>Students Information</h1>
  <table>
    <thead>
      <tr>
        <th>Company</th>
        <th>Name</th>
        <th>Country</th>
      </tr>
      </thead>
      <tbody>
     { students.map(student =>(
        <tr>
          <td>{student.company}</td>
          <td>{student.contact}</td>
          <td>{student.country}</td>
        </tr>
      ))}
      </tbody>
  </table>
  </div>
);

