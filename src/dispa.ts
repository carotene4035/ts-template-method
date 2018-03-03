import { AbstDisp } from './abstdisp';

export class DispA extends AbstDisp {

    public open() {
        console.log('--');
    }

    public close() {
        console.log('--');
    }
    
    public print() {
        console.log('keep out ');
    }

}