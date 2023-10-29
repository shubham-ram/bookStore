import { useForm } from "react-hook-form";
import userData from "@/data/userData"
import { setCookie } from "@/packages/utils/cookie";
import { useRouter } from "next/router";

const useAuth = ({ isSignup }) => {
    const { push } = useRouter();

    const formhook = useForm();
    const { setError, clearErrors } = formhook

    const submitHandler = (data) => {

        const { email, password, confirm_password } = data || {};

        const registerdUser = userData.find((data) => data.email === email);

        if (isSignup) {
            if (password !== confirm_password) {
                setError('confirm_password', {
                    type: "custom",
                    message: "Password do not match"
                });

                return;
            }

            clearErrors('confirm_password');

            if (registerdUser) {
                setError('email', {
                    type: "custom",
                    message: "Email ID is already registered"
                });
                return;
            }

            clearErrors('email');
            setCookie({ cookieName: "user_id", cookieValue: email, cookieExpiryDays: 2 })
            push('/');
        }

        if(!registerdUser){
            setError('email', {
                type: "custom",
                message: "Email ID is not registered"
            });
            return;
        }

        clearErrors('email');

        if(registerdUser.password !== password){
            setError('password', {
                type: 'custom',
                message: "Incorrect Password"
            });
            return;
        }
        
        clearErrors('password');

        setCookie({ cookieName: "user_id", cookieValue: email, cookieExpiryDays: 2 })
        push('/');
    }

    return { formhook, submitHandler }
}

export default useAuth