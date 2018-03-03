export abstract class AbstDisp {

    public abstract open(): void;
    public abstract print(): void;
    public abstract close(): void;

    public display() {
        this.open();
        for(let i = 1; i < 5; i ++) {
            this.print();
        }
        this.close();
    }
}