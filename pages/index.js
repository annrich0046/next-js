import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleName(e) {
    setName(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!email.includes("@")) {
      alert("Please enter a valid email address");
      return;
    }
    if (password.length < 8) {
      alert("Password must be at least 8 characters long");
      return;
    }
    alert("Form submitted successfully!");
    // You can add further logic here
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        Enter your name<br />
        <input type="text" value={name} onChange={handleName} /><br />
        Enter your email <br />
        <input type="text" value={email} onChange={handleEmail} /><br />
        Enter your password<br />
        <input type="password" value={password} onChange={handlePassword} /><br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
