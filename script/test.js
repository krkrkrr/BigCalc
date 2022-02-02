/**
 * 開発中のテスト用クラス
 * @classdesc テストケースの実行結果をコンソールに出力
 */
class Test {
    constructor() {
        this._cases = [
            "1+2-34*567/8=",
            "",
            "10 ** 2/0+(134+5)*2",
            "-100*-10+",
            "(10.10-0.89)*0.4",
            "(1+(1.2*3)+(1)-10)+90",
            "3*()+(3)+((4+3))",
            "((4+3))*3"
        ];
    }

    /**
     * テストケースの実行
     */
    log() {
        console.log("____start test____")
        this._cases.forEach(input => {
            console.log(input);
            console.log((new Calculator(input)).run());
        });
        console.log("____finish test____");
    }
}