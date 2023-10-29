import React from 'react'
import { useForm } from 'react-hook-form';
import getControls from '../configuration/controls';
import styles from './styles.module.css';
import Link from 'next/link';
import FormItem from '@/packages/common/FormItem';
import useAuth from '../hooks/useAuth';

function LoginSignup({ src = 'login' }) {

    const isSignup = src === 'signup';

    const controls = getControls({ isSignup });

    const { formhook, submitHandler } = useAuth({ isSignup })

    const { handleSubmit } = formhook

    return (
        <div className={styles.container}>
            <div className={styles.register_container}>
                <h2 className={styles.title}>{isSignup ? "Create Your account" : 'Hi, Welcome back'}</h2>

                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmit(submitHandler)();
                    }}
                >
                    <FormItem controls={controls} formhook={formhook} />

                    <button
                        type='submit'
                        className={styles.btn}
                    >
                        {isSignup ? "Sign Up ":'Log In'}
                    </button>

                </form>

                <p className={styles.footer_txt}>
                    {isSignup ? 
                        <>
                            Already have an Account?
                            <Link
                                href='login'
                                className={styles.redirect_cta}
                            >
                                    Log In
                            </Link>
                        </> 
                    :
                        <>
                            Not registered?
                            <Link 
                                href='/signup'
                                className={styles.redirect_cta}
                            >
                                Create New Account
                            </Link>
                        </>
                    }
                </p>
            </div>
        </div>
    )
}

export default LoginSignup;