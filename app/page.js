'use client';
import styles from "./page.module.css";
import {signIn, useSession, signOut} from "next-auth/react"
import './globals.css'

export default function Home() {
  const{data:session}=useSession();
  console.log(session);
  if(session){
   return(
    <>
    <p>You are not signed in as a user{session.user.email}</p>
   
    <button onClick={()=>signOut()}>Sign Out</button>
    </>
   )
  }
  return (
    <div className={styles.page}>
      <Navbar/>
      <p>You are not signed in.</p>
       <button onClick={()=>signIn()}>Sign In</button>
    </div>
  );
}