import React from 'react';
import { AppBar, Toolbar, Link, styled } from '@mui/material';

export const NavBar = () => {
	return (
		<AppBar>
			<Toolbar>
				<NavLink href='/'>Home</NavLink>
				<NavLink href='/'>About us</NavLink>
				<NavLink href='/'>Shop</NavLink>
				<NavLink href='/'>Pages</NavLink>
				<NavLink href='/'>Blog</NavLink>
				<NavLink href='/'>Contact</NavLink>
			</Toolbar>
		</AppBar>
	);
};

const NavLink = styled(Link)(
	({ theme }) => `
    color: ${theme.palette.text.navlink}
`
);

export default NavBar;

/* const NavLink = styled(Link)`
    color: ${({ theme }) => theme.palette.text.navlink }
`; */
