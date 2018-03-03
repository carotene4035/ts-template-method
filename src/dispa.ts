import { AbstDisp } from './abstdisp';

export class DispA extends AbstDisp {

    protected open() {
        console.log('--');
    }

    protected close() {
        console.log('--');
    }
    
    protected print() {
        console.log('keep out ');
    }

}