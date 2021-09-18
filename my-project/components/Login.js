import Button from "@material-tailwind/react/Button";
import Image from "next/image";
import { signIn } from "next-auth/client"

function Login() {
    return (
        <div>
             <Image 
                src="https://links.papareact.com/lui"
                height="300"
                width="550"
                objectFit="contain"
             />
        </div>
    )
}

export default Login
