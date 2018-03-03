import { DispA } from './dispa';
import { DispB } from './dispb';
import { AbstDisp } from './abstdisp';

/* 
 * スパークラス型の変数に、
 * サブクラスのインスタンスのどれを代入しても正しく動作する 
 * -- リスコフ置換
 */
const dispA: AbstDisp = new DispA();
const dispB: AbstDisp = new DispB();

dispA.display();
dispB.display();