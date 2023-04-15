import styles from './checko.module.scss'

export default function CheckoPage1(){
    return (
        <main style={{
            backgroundImage:"url(https://i.pinimg.com/564x/96/ff/de/96ffde67a848bdef58e1721b7206c041.jpg)",
            backgroundSize:"100% 100%"
            }}>
            <div className={styles.mainTitle}>
                <p className={styles.mainHeading}>100%</p>
                <p className={styles.mainSubheading}>Secure<br/>Labels</p>
            </div>
        </main>
    )
}