import Layout from "@/packages/page-components/Layout";
import LoginSignup from "@/packages/page-components/LoginSignup/component";


function LoginComponent() {
  return (
    <LoginSignup src='login' />
  )
}

export default LoginComponent

LoginComponent.getLayout = function({children}){
    return  <Layout src='login'>
        {children}
    </Layout>
}