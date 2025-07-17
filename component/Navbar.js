'use client';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className={styles.navbar}>
      <Link href="/">Home</Link>
      {session ? (
        <button className={styles.primary} onClick={() => signOut()}>Sign Out</button>
      ) : (
        <div className={styles.ctas}>
          <button className={styles.primary} onClick={() => signIn()}>Sign In</button>
          <button className={styles.secondary} onClick={() => signIn()}>Sign Up</button>
        </div>
      )}
    </nav>
  );
}