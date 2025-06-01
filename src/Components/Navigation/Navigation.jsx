import React from "react";
import { navigationMenu } from "./NavigationMenu";
import { useNavigate } from "react-router-dom";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Store/Auth/Action";

const Navigation = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();
  const handleLogout = () => {
    handleClose();
    dispatch(logout());
  };
  return (
    <div className="h-screen sticky top-0">
      <div>
        <div className="py-5">
          <img
            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/x-social-media-black-icon.png"
            alt="x_icons"
            width={30}
            height={30}
          />
          <div className="space-y-6 mt-5">
            {navigationMenu.map((item) => (
              <div
                className="cursor-pointer flex space-x-3"
                onClick={() =>
                  item.title === "Profile"
                    ? navigate(`/profile/${5}`)
                    : navigate(item.path)
                }>
                {item.icon}
                <p className="text-x1">{item.title}</p>
              </div>
            ))}
          </div>
          <div className="py-10">
            <Button
              sx={{
                width: "100%",
                borderRadius: "29px",
                py: "15px",
                bgcolor: "#1e88e5",
              }}
              variant="contained">
              Tweet
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Avatar
              alt="username"
              src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
            />
            <div>
              <span>{auth.user?.fullName}</span>
              <br />
              <span className="opacity-70">@{auth.user?.email}</span>
            </div>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}>
              <MoreHorizIcon />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
