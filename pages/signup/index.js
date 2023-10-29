import Layout from "@/packages/page-components/Layout";
import LoginSignup from "@/packages/page-components/LoginSignup/component";


function SignupComponent() {
  return (
    <LoginSignup src='signup' />
  )
}

export default SignupComponent

SignupComponent.getLayout = function({children}){
    return  <Layout src='signup'>
        {children}
    </Layout>
}