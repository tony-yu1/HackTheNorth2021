import Head from 'next/head';
import Navigation_bar from '../components/navigation_bar.js';
import Icon from "@material-tailwind/react/Icon";
import Button from "@material-tailwind/react/Button";
import Image from "next/image";
import { getSession, useSession } from "next-auth/client"
import Login from "../components/Login"


export default function Home() {
  const [session] = useSession();

  if(!session) return <Login />

  return (
    <div >
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation_bar />

      <section className='bg-[#f7f7f7] pb-10 px-10'>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between py-6">
            <h2 className="text-lg">Start a new project</h2>
          
            <Button 
                            color="black"
                            buttonType="outline"
                            rounded={true}
                            iconOnly={true}
                            ripple="dark"
                            className="border-0"           
            >
                <Icon name="more_vert" size="3xl" />
            </Button>
          
          </div>

          <div>
            <div className="relative h-52 w-40 border-2 cursor-pointer hover:border-black">
            <Image
              src='https://links.papareact.com/pju' layout="fill" />
  
            </div>

            <p className="ml-2 mt-2 font-semibold text-sm text-gray-700">Blank</p>
          </div>

        </div>
      </section>

      <section className="bg-white px-10 md:px=2 text-sm">
        <div className="max-w-3xl mx-auto py-8">
          <div className="flex items-center justify-between pb-5">
            <h2 className="font-medium flex-grow">My Projects</h2>
            <p className="mr-6">Date Created</p>
            <Icon name="folder" size="3xl" />

          </div>
        </div>
      </section>

    </div>
  )
}
