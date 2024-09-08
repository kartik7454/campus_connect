'use client'

import Accounttypcon from "../../../components/accounttypecomponent.js"
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
      <Accounttypcon />
    </SessionProvider>
    </>
  );
};

export default Home