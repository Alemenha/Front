"use client"; 

import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; 

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    /* // usando router pra redirecionar automaticamente pra homepage  */
    router.push('/inicio');
  }, [router]);
}
