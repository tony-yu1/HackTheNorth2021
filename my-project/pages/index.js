import Head from 'next/head';
import Navigation_bar from '../components/navigation_bar.js';
import Icon from "@material-tailwind/react/Icon";
import Button from "@material-tailwind/react/Button";

export default function Home() {
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
            <h2 className="text-lg">Start a new file</h2>
          
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

          </div>
        </div>
      </section>

    </div>
  )
}
