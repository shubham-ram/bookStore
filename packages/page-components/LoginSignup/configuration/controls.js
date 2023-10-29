const getControls =({ isSignup=false })=> [
    {
        name:"email",
        label:"Email",
        placeholder: "Enter Email Id",
        type:'text',
        rules: {
            required: "Email Id is Required",
            pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message:"Please enter a valid email address"
            }
        }
    },
    {
        name:"password",
        label:"Password",
        placeholder:"Enter Password",
        type:'password',
        rules: {
            required: "Password is Required"
        }
    },
    {
        name:"confirm_password",
        label:"Confirm Password",
        placeholder:"Re enter password",
        type:"password",
        rules: {
            required: "Password is Required"
        },
        showEle : isSignup
    }
];

export default getControls;