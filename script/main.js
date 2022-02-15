/**
 * 読み込み時に実行
 * 
 */
window.addEventListener("load", event => {
    // キー入力イベントに紐付け
    document.getElementById("input_formula")
        .addEventListener("input", onInput);
    // テストの実行
    (new Test()).log();
}, checkEventListenerOption() ? {passive: true} : false);

/**
 * passiveオプションに対応しているか検出
 * https://developer.mozilla.org/ja/docs/Web/API/EventTarget/addEventListener#safely_detecting_option_support
 * @returns {boolean} passiveオプションに対応していればture
 */
function checkEventListenerOption() {
    let is_passive_supported = false
    try {
        const options = {
            get passive() {
                is_passive_supported = true
                return false
            }
        }
        window.addEventListener("test", null, options)
        window.removeEventListener("test", null, options)
    } catch(err) {
        is_passive_supported = false
    }
    return is_passive_supported
}

/**
 * キー入力時の実行関数
 * @param {Event} event 
 */
function onInput(event) {
    // 入力したキーを取得
    // console.log(event.data);
    // 入力されている文字列を取得
    // console.log(event.target.value);
    // debug(event.target.value);
    const calc = new Calculator(event.target.value)
    calc.run()
}
