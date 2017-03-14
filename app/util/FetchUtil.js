/**
 * Created by ljunb on 16/5/27.
 */
let FetchUtil = {
    /*
     * fetch简单封装
     * url: 请求的URL
     * successCallback: 请求成功回调
     * failCallback: 请求失败回调
     * 
     * */
    get: (url, params, headers, successCallback, failCallback) => {
        if (params) {
            let paramsArray = [];
            //encodeURIComponent
            Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
            if (url.search(/\?/) === -1) {
                url += '?' + paramsArray.join('&')
            } else {
                url += '&' + paramsArray.join('&')
            }
        }
        fetch(url)
            .then((response) => response.text())
            .then((responseText) => {
                successCallback(JSON.parse(responseText));
            })
            .catch((err) => {
                failCallback(err);
            });
    },
    post: (url, formData, successCallback, failCallback, headers) => {
        fetch(url, {
                method: 'POST',
                headers: headers,
                body: formData,
            }).then((response) => response.json())
            .then((responseData) => {
                successCallback(responseData);
            })
            .catch((err) => {
                failCallback(err);
            })
    },
    gets: (url, successCallback, failCallback) => {
        var request = new XMLHttpRequest();
        request.onreadystatechange = (e) => {
            if (request.readyState !== 4) {
                return;
            }

            if (request.status === 200) {
                successCallback(JSON.parse(request.responseText))

            } else {
                // console.warn('error');
            }
        };

        request.open('GET', url);
        request.send();
    },
}

export default FetchUtil;