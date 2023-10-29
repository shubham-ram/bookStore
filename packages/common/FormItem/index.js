import styles from './styles.module.css'

function FormItem({ controls, formhook }) {

    const { register, formState: { errors } } = formhook;

    return (
        <div className={styles.form_container}>
            {controls.map((config) => {
                const { name, label, rules, showEle=true } = config;

                if(!showEle) return null;

                return (
                    <div key={name} className={styles.field}>

                        <p className={styles.label}>{label}</p>
                        <input
                            className={styles.input_box}
                            {...config}
                            {...register(name, rules)}
                        />
                        
                        <p className={styles.error}>{errors?.[name]?.message}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default FormItem