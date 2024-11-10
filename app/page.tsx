import LandingPage from "@/components/landing-page-2";
import Head from "next/head";

export const metadata = {
  title: 'openXploit',
  description: 'openXploit - Perform Vulnerability Assessment and Penetration Testing',
}

export default function Home() {
  return (
    <div>
      <LandingPage />
    </div>
    
  );
}
