import _ from 'lodash'
export default function myPrint() {
    // console.log('iiiI get called from print.js 123halo')
    console.log(_.join(['iiiI get called from print.js 123', ' repeat'], '--'))
}