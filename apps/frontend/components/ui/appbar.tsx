"use client";

import { type Metadata } from "next";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default function AppBar() {
  return (
    <>
      <div className="flex items-center justify-between py-10 px-20">
        <div className="text-2xl font-bold uppercase">Depin</div>
        <div className="flex gap-10">
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton />
            <SignUpButton />
          </SignedOut>
        </div>
      </div>
    </>
  );
}
