import WorkStyles from '../styles/work.module.scss'

export default function Work(){
    return (
        <main className={WorkStyles.main}>
          <div className={WorkStyles.container}>
            <p className={WorkStyles.title}>Work</p>
            <div className={WorkStyles.work}>
                <div className={WorkStyles.workTile}></div>
                <div className={WorkStyles.workTile}></div>
                <div className={WorkStyles.workTile}></div>
                <div className={WorkStyles.workTile}></div>
            </div>
            <p className={WorkStyles.title}>Notes</p>
            <div className={WorkStyles.work}>
                <div className={WorkStyles.workTile}></div>
                <div className={WorkStyles.workTile}></div>
                <div className={WorkStyles.workTile}></div>
            </div>
          </div>
        </main>
    )
}