/**
 * @classdesc cookieの読み書き削除
 * @author krkrkrrn
 */
class Cookie{
    /**
     * Cookieの有効期限を設定
     * @param {int} expire_date 指定日後に削除
     * @param {int} expire_hour 指定時間後に削除
     * @param {int} expire_min 指定分後に削除
     */
    constructor(expire_date = 7, expire_hour = 0, expire_min = 0) {
        const date = new Date()
        date.setDate(date.getDate()+expire_date)
        date.setHours(date.getHours()+expire_hour)
        date.setMinutes(date.getMinutes()+expire_min)
        this._expire = date
    }

    /**
     * 任意のキーの値を取得
     * @param {string} key cookieで取得したい値のキー
     * @returns {string, boolean} 値 or false
     */
    get(key) {
        const res = document.cookie
            .split(/;\s?/)
            .find(row => row.startsWith(key+"="))
        return res
            ? res.split('=')[1]
            : false
    }

    /**
     * cookieにキーと値を追加
     * @param {string} key 追加するキー
     * @param {string} value 追加する値
     */
    set(key, value) {
        document.cookie = key+"="+encodeURIComponent(value)+"; "
            +"expires="+this._expire.toUTCString()
    }

    /**
     * キーと値を削除
     * @param {string} key 削除する値のキー
     */
    delete(key) {
        document.cookie = key+"=; expires="+(new Date(0)).toUTCString()
    }
}