import styles from '@/styles/ErrorPage.module.css'
export default function ErrorPage(){
    return (
        <div>
        <h1 className={styles.errorTitle}>Error 404</h1>
        <h2 className={styles.errorSubtitle}>Country not found!</h2>
        </div>
    )
}