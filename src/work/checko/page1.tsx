import styles from './checko.module.scss'

export default function CheckoPage1(){
    return (
        <main style={{
            backgroundImage:"url(https://i.pinimg.com/564x/63/3b/15/633b15b8f4a2e026b209616df2ced966.jpg)",
            backgroundSize:"100% 100%"
            }}>
            <div className={styles.mainTitle}>
                <p className={styles.mainHeading}>100%</p>
                <p className={styles.mainSubheading}>Secure<br/>Labels</p>
            </div>
        </main>
    )
}