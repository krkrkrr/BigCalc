/**
 * 言語の設定
 * @author krkrkrrn
 */

/**
 * 言語設定のクラス
 * ブラウザの言語設定か、cookieに書き込んだ設定を参照
 * @author krkrkrrn
 */
class SelectLanguage {
    /**
     * 言語設定の読み込み
     */
    constructor() {
        this.lang = this.cookie
            || (window.navigator.languages && window.navigator.languages[0]) 
            || window.navigator.language 
            || window.navigator.userLanguage 
            || window.navigator.browserLanguage
    }

    /**
     * ページ読み込み時にプルダウンに指定してある言語設定を適用
     * プルダウン変更時の関数設定
     * @param {htmlElement} selectElement 言語選択のselect要素 
     */
    onLoad(selectElement) {
        for(const i in selectElement.options) {
            if(selectElement.options[i].value == this.lang) {
                selectElement.selectedIndex = i
                break
            }
        }
        // アロー演算子で、定義時のthisの値を拘束
        selectElement.addEventListener("change", () => {this.onChange(selectElement)})
    }

    /**
     * プルダウン変更時にcookieへ設定保存
     * @param {HtmlElement} selectElement 言語選択のselect要素 
     */
    onChange(selectElement) {
        const changed_value = selectElement
            .options[selectElement.selectedIndex].value
        if(changed_value != this.lang) {
            this.cookie = changed_value
            this.lang = changed_value
        }
        // 表示のリフレッシュ
        (new Calculator(document.getElementById("input_formula").value))
            .run()
    }

    /**
     * cookieから保存した言語設定を取得
     * @returns {string} en-US or jp
     */
    get cookie() {
        return (new Cookie()).get("lang")
    }

    /**
     * cookieに言語設定を保存
     */
    set cookie(arg) {
        (new Cookie()).set("lang", arg)
    }

    get message_empty() {
        if(this.lang == "ja") {
            return "数式を入力してください。"
        } else {
            return "Please enter the formula."
        }
    }

    get message_unknown_symbol() {
        if(this.lang == "ja") {
            return "使えない記号が含まれています。"
        } else {
            return "Contains unknown symbols."
        }
    }
}