import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
	let isActiveLink = () => {
		return ({isActive}) => isActive ? s.link + " " + s.active : s.link;
	};
	return (
		<header>
			<div className={s.nav}>
				<NavLink to="/" className={isActiveLink()}>/</NavLink>
				<NavLink to="/about" className={isActiveLink()}>about</NavLink>
			</div>
			<div>{props.title}</div>
		</header>
	);
}

export default Header;