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
const[name,setName]=useState("")
const[email,setEmail]=useState("")
const[pass,setPass]=useState("")
function handleName(e){
  setName(e.target.value);
}
function  handleEmail(e){
  setEmail(e.target.value);
}
function handlePassword(e){
  setPassword(e.target.value);
}
function handlesubmit(){
  if (!email.includes("@")){
    alert("Please enter a valid email address");
  
  }
   
 if(password.length < 8){
  alert("password must be atleast 8 characters long");
 }

}
export default function Home() {
  return (
    <>
      Enter your name<br/>
      <input type="text" onChange={handleName}/><br/>
      Enter your email <br/>
      <input type="text" onChange={handleEmail}/><br/>
    
      Enter your password<br/>
      <input type="text" onChange={handlePassword}/><br/>

      <input type="submit" onClick={handlesubmit}/>
    

    </>
  );
}
