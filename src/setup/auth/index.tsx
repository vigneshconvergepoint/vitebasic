
// global
import { useMsal } from "@azure/msal-react";

function Authenticated() {
 const { instance } = useMsal();

 const handleLogin =()=> {
  let loginRequest = {
   scopes: ["api://be333d12-1978-4e29-8653-d6c6ca1772e0/access_as_user","user.read","directory.read.all"]
  };

   try{
      instance.loginRedirect(loginRequest).then((_) => {
        console.log(_,"loginsuccess");
      }).catch(e => {
      console.error(e,"loginerror");
      })
    }catch(err){
     console.error(err,"loginerror")
    }
 }


return (
  <div className="align-items-center d-flex h-100vh justify-content-center mt-4">
    <button className="cursor-pointer" onClick={handleLogin}>Sign Up</button>
  </div>
)
}

export default Authenticated;
