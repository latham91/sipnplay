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
import { Avatar, AvatarFallback } from "../ui/avatar";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import { LogOutIcon } from "lucide-react";

export default function UserDropdown() {
  return (
    <DropdownMenu>
      {/* AVATAR BUTTON */}
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Avatar>
            <AvatarFallback>Te</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>

      {/* CONTENT */}
      <DropdownMenuContent align="end" forceMound className="w-56">
        <DropdownMenuLabel>
          <p className="font-medium">Test Account</p>
          <p className="text-xs font-light text-muted-foreground">testaccount@email.com</p>
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
