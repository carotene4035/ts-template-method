import { AbstDisp } from './abstdisp';

export class DispB extends AbstDisp {

    public open() {
        console.log('>>');
    }

    public close() {
        console.log('>>');
    }
    
    public print() {
        console.log('びっくりするほどユートピア');
    }
}