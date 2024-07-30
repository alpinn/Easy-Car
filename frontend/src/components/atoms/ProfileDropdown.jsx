import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import { Button } from "../ui/button.jsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

import { FaUser, FaUserCircle } from "react-icons/fa";
import { FaKey } from "react-icons/fa6";
import { PiCarProfileFill } from "react-icons/pi";
import { MdLogout } from "react-icons/md";

import { LogOut, reset } from "../../features/auth-slice.js";

import UpdateProfile from "../../pages/UpdateProfile.jsx";
import ChangePassword from "../../pages/ChangePassword.jsx";

const ProfileDropdown = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  if (user) {
    return (
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="w-full"
            >
              <FaUserCircle
                className="text-blue-500"
                size={20}
              />
              <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <FaUser className="mr-2 h-4 w-4" />
                <Link to="/update-profile/:id">
                  <span>Update Profile</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <FaKey className="mr-2 h-4 w-4" />
                <Link to="/change-password/:id">
                  <span>Ubah Password</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <PiCarProfileFill className="mr-2 h-4 w-4" />
                <span>Riwayat Booking</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={logout}
              className="cursor-pointer"
            >
              <MdLogout className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  }
};

export default ProfileDropdown;
