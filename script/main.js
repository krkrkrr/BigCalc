/**
 * 読み込み時に実行
 * 
 */
window.addEventListener("load", event => {
    (new SelectLanguage())
        .onLoad(document.getElementById("language-select"))
    // キー入力イベントに紐付け
    document.getElementById("input_formula")
        .addEventListener("input", onInput)
    // ボタン操作
    document.getElementById("button_table")
        .addEventListener("click", onClick)
    // テストの実行
    // (new Test()).log();
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
 * 計算の実行と出力
 * @param {Event} event 
 */
function onInput(event) {
    const calc = new Calculator(event.target.value)
    calc.run()
}

/**
 * ボタン操作
 * 入力と計算の実行と出力
 * @param {Event} event 
 */
function onClick(event) {
    const val = event.target.textContent
    const input = document.getElementById("input_formula").value
    if(val.length == 1) {
        document.getElementById("input_formula").value += val    
    } else if(val == "Del") {
        document.getElementById("input_formula").value
            = input.slice(0, -1)
    }
    const calc = new Calculator(document.getElementById("input_formula").value)
    calc.run()
}