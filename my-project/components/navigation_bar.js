import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";

function Navigation_bar() {
    return (
      
        
        <div className="flex items-center"> 

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

            <Icon name="description" size="5xl" color="blue" />



        </div>
    )
}

export default Navigation_bar
