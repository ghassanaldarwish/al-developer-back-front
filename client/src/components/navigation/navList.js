import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import HomeIcon from "@material-ui/icons/Home";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CreatePost from "@material-ui/icons/Create";

import { Link } from "react-router-dom";

export const mainListItems = (
  <div>
    <Link to="/">
      <ListItem button>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
    </Link>
  </div>
);

export const mainListItemsAuth = (
  <div>
    <Link to="/">
      <ListItem button>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
    </Link>
    <Link to="/dashboard">
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </Link>
    <Link to="/profile">
      <ListItem button>
        <ListItemIcon>
          <AccountCircleIcon />
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItem>
    </Link>
    <Link to="/post">
      <ListItem button>
        <ListItemIcon>
          <CreatePost />
        </ListItemIcon>
        <ListItemText primary="Create Post" />
      </ListItem>
    </Link>

    <a href="/api/user/logout">
      <ListItem button>
        <ListItemIcon>
          <i class="fas fa-sign-out-alt fa-lg" />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItem>
    </a>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Sosiale Media</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <i className="fab fa-facebook-square fa-lg" />
      </ListItemIcon>
      <ListItemText primary="Facebook" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <i className="fab fa-github fa-lg" />
      </ListItemIcon>
      <ListItemText primary="Github" />
    </ListItem>
  </div>
);
