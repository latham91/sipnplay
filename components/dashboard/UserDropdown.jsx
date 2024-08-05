"use client";

import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import { LogOutIcon } from "lucide-react";

export default function UserDropdown({ user }) {
  return (
    <DropdownMenu>
      {/* AVATAR BUTTON */}
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Avatar>
            <AvatarImage src={user.picture.includes("?d=blank") ? "" : user.picture} />
            <AvatarFallback>
              {user.given_name.charAt(0)}
              {user.family_name?.charAt(0)}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>

      {/* CONTENT */}
      <DropdownMenuContent align="end" forceMount className="w-56">
        <DropdownMenuLabel>
          <p className="font-medium">
            {user.given_name} {user.family_name}
          </p>
          <p className="text-xs font-light text-muted-foreground">{user.email}</p>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <LogoutLink>
            <LogOutIcon className="w-4 h-4 mr-2" />
            Sign out
          </LogoutLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
