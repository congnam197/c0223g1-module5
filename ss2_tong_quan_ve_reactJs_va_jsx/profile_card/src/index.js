import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div class="card-container">
	<span class="pro">Codegym</span>
	<img class="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
	<h3>Phạm Công Nam</h3>
	<h6>CodeGym</h6>
	<p>User interface designer and <br/> front-end developer</p>
	<div class="buttons">
		<a href='#'><button class="primary">
			Message
		</button></a>
		<button class="primary ghost">
			Following
		</button>
	</div>
	<div class="skills">
		<h6>Skills</h6>
		<ul>
			<li>UI / UX</li>
			<li>Front End Development</li>
      <li>Java</li>
			<li>HTML</li>
			<li>CSS</li>
			<li>JavaScript</li>
			<li>React</li>
			
		</ul>
	</div>
</div>
)
