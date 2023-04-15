import styles from './homeground.module.scss'

export default function HomegroundPage1(){
    return (
        <main className={styles.main}>
            <div className={styles.mainGraphic}>
                <div></div>
                <div className={styles.graphicCircle}></div>
            </div>
            <div className={styles.mainTitle}>
                <div></div>
                <div>
                    <p>3D inferencing<br/>for Cricketers</p>
                </div>
            </div>
        </main>
    )
}