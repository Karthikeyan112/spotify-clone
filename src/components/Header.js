import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import { useDataLayerValue } from '../DataLayer';

const Header = ({ spotify }) => {
  const [{ user }, dispatch] = useDataLayerValue();

  return (
    <header className="header">
      <div className="header__left">
        <SearchIcon />
        <input
          type="test"
          placeholder="Search by Artists, Songs, " />
      </div>
      <div className="header__right">
        <Avatar src={user ?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </header>
  )
}

export default Header;