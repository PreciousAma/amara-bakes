import React from 'react';
import { AppBar as MuiAppBar, Toolbar, Link, styled } from '@mui/material';
import { Search } from '@mui/icons-material';
import logo from '../assets/pancakes_bg.png';

export const NavBar = () => {
	return (
		<AppBar elevation='0'>
			<Toolbar>
				<NavLink href='/'>Home</NavLink>
				<NavLink href='/'>About us</NavLink>
				<NavLink href='/'>Shop</NavLink>
				<NavLink href='/'>
					<img src={logo} alt='Amara Bakes' className='logo' />
				</NavLink>
				<NavLink href='/'>Pages</NavLink>
				<NavLink href='/'>Blog</NavLink>
				<NavLink href='/'>Contact</NavLink>
				<Search fontSize='100px' />
			</Toolbar>
		</AppBar>
	);
};

const AppBar = styled(MuiAppBar)(
	({ theme }) => `
	display: flex;
	justify-content: space-around;
	background-color: ${theme.palette.background.paper};

	& .MuiToolbar-root {
		display: flex;
		justify-content: center;
	}
`
);

const NavLink = styled(Link)(
	({ theme }) => `
    color: ${theme.palette.text.navlink};
    padding: 30px;
	padding-bottom: 10px;
    font-size: 16px;
    text-decoration: none;
	align-items: center;

	& .logo {
		width: 90px;
	}

	:hover {
		border-bottom: 2px solid ${theme.palette.primary.main};
	}
`
);

export default NavBar;

/* const NavLink = styled(Link)`
    color: ${({ theme }) => theme.palette.text.navlink }
`; */
