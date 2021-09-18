import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";

function Navigation_bar() {
    return (
      
        
        <div className="sticky top-0 z-50 flex items-center px-4 py-2 shadow-md bg-white"> 

            <h1>hi</h1>
            <Button 
                            color="black"
                            buttonType="outline"
                            rounded={true}
                            iconOnly={true}
                            ripple="dark"
                            className="md:inline-flex h-20 w-20 border-0"           
            >
                <Icon name="menu" size="3xl" />
            </Button>

            <Icon name="description" size="5xl" color="black" />


            <h1 className="ml-2 text-black-700 trext-2xl">appname</h1>

            <div className="ml-5 md:ml-20 flex flex-grow items-center px-5 py-2 bg-gray-100 text-gray-600 rounded-lg focus-within:text-gray-600 focus-within:shadow-md">
                <Icon name="search" size="3xl" color="black" />
                <input type="text" placeholder="Search" className="flex-grow px-5 text-base bg-transparent outline-none"/>
            </div>

            <Button 
                            color="black"
                            buttonType="outline"
                            rounded={true}
                            iconOnly={true}
                            ripple="dark"
                            className="ml-5 md:ml-20 h-20 w-20 border-0"     
            >
                <Icon name="apps" size="3xl" color="black"/>
            </Button>

            <img
                loading="lazy"
                className="cursor-pointer h-12 w-12 rounded-full ml-2"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Dwayne_Johnson_2%2C_2013.jpg/800px-Dwayne_Johnson_2%2C_2013.jpg"
                alt=""
            ></img>
        </div>
    )
}

export default Navigation_bar
