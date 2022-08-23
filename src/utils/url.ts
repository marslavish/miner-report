
// 获取链接参数
export function getQueryString(key: string) {
    const query = window.location.search.substring(1);
    const pairs = query.split("&");
    for (let i = 0; i < pairs.length; i++) {
        const pair = pairs[i].split("=");
        if (pair[0] == key) return decodeURI(pair[1]);
    }
    return false;
}
