import styles from './nonceblox.module.scss'

export default function NoncebloxPage1(){
    return (
        <main className={styles.main}>
            <div className={styles.mainLeft}><p>Web3<br/>Infrastructure<br/>and<br/>Blockchain<br/>Bridges</p></div>
            <div className={styles.mainRight}>
                <div style={{backgroundColor:"#047857"}}></div>
                <div style={{backgroundColor:"#E5E7EB"}}></div>
                <div style={{backgroundColor:"#3F3F46"}}></div>
            </div>
        </main>
    )
}