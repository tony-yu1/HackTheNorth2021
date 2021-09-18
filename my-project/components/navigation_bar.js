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

            <div className="flex flex-grow ">
                <icon name="search" size="3xl" color="black" />
                <input type="text" placeholder="Search" />
            </div>
        </div>
    )
}

export default Navigation_bar
