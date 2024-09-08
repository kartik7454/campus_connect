'use client'

import Prefrencediv from "../../../../components/prefrencediv.js"
import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth'

interface Props {
  session: Session | null |never
}

const Home: React.FC<Props> = ({ session } ) => {
  return (
    <div>
    
    <SessionProvider session={session}>
      <Prefrencediv />
    </SessionProvider>
    </div>
  );
};

export default Home