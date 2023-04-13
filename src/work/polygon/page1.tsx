import styles from './polygon.module.scss'

export default function PolygonPage1(){
    return (
        <main className={styles.main}>
            <div style={{
                backgroundColor:"#A78BFA",
                width:"82%",
                paddingTop:"82%",
                position:"relative",
                display:"block",
                borderBottomRightRadius:"200%",
                marginBottom:"-82%"
            }}></div>
            <img src={"https://seeklogo.com/images/P/polygon-matic-logo-1DFDA3A3A8-seeklogo.com.png"} style={{
                width:"27%",
                paddingTop:"27%",
                position:"relative",
                display:"block",
                marginBottom:"-27%",
                marginLeft:"56%"
            }}/>
            <div className={styles.titleTextDiv}>
                <p className={styles.titleTop}>The next chapter in</p>
                <p className={styles.title}>Ethereum<br/>Scaling</p>
            </div>
        </main>
    )
}