export abstract class AbstDisp {

    protected abstract open(): void;
    protected abstract print(): void;
    protected abstract close(): void;

    public display() {
        this.open();
        for(let i = 1; i < 5; i ++) {
            this.print();
        }
        this.close();
    }
}