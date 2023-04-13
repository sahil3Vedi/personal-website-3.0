import WorkStyles from '../styles/work.module.scss'
// work imports
import PolygonPage1 from '@/work/polygon/page1'
import NoncebloxPage1 from '@/work/nonceblox/page1'
import CheckoPage1 from '@/work/checko/page1'
import HomegroundPage1 from '@/work/homeground/page1'
// notes imports
import Bitcoin01Page1 from '@/notes/bitcoin_01/page1'
import MatrixMult01Page1 from '@/notes/matrix_multiplication_01/page1'
import NeuralNets01Page1 from '@/notes/neural_network_01/page1'

export default function Work(){
    return (
        <main className={WorkStyles.main}>
          <div className={WorkStyles.container}>
            <p className={WorkStyles.title}>Work</p>
            <div className={WorkStyles.work}>
                <div className={WorkStyles.workTile}>
                    <PolygonPage1/>
                </div>
                <div className={WorkStyles.workTile}>
                    <NoncebloxPage1/>
                </div>
                <div className={WorkStyles.workTile}>
                    <CheckoPage1/>
                </div>
                <div className={WorkStyles.workTile}>
                    <HomegroundPage1/>
                </div>
            </div>
            <p className={WorkStyles.title}>Notes</p>
            <div className={WorkStyles.work}>
                <div className={WorkStyles.workTile}>
                    <Bitcoin01Page1/>
                </div>
                <div className={WorkStyles.workTile}>
                    <MatrixMult01Page1/>
                </div>
                <div className={WorkStyles.workTile}>
                    <NeuralNets01Page1/>
                </div>
            </div>
          </div>
        </main>
    )
}