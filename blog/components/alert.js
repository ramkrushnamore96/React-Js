import styles from './alert.module.css'
import { clsx } from 'clsx'

export default function Alert({ children, type }) {
    return(
        <section
            className={clsx({
                [styles.success]: type === 'success',
                [styles.error]: type === 'error'
            })}
        >
            {children}
        </section>
    )
}