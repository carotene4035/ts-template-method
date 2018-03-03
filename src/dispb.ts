import { AbstDisp } from './abstdisp';

export class DispB extends AbstDisp {

    protected open() {
        console.log('>>');
    }

    protected close() {
        console.log('>>');
    }
    
    protected print() {
        console.log('びっくりするほどユートピア');
    }
}