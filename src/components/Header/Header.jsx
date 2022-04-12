import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
	return (
		<header>
			<div className={s.nav}>
				<NavLink to="/" className={s.link}>/</NavLink>
				<NavLink to="/about" className={s.link}>about</NavLink>
			</div>
			<div>{props.title}</div>
		</header>
	);
}

export default Header;