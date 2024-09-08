'use client'

import Prefrencediv from "../../../../components/prefrencediv.js"
import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth'

interface Props {
  session: Session | null
}

const Home: React.FC<Props> = ({ session } ) => {
  return (
    <>
    {/* SessionProvider ile sarmallarız ki tüm route lara erişebilelim diye / yukarıda "use client" tanımlamayı unutma! */}
    <SessionProvider session={session}>
      <Prefrencediv />
    </SessionProvider>
    </>
  );
};

export default Home