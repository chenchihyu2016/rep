const baseURL = 'https://0f33-180-177-37-95.jp.ngrok.io';

async function requestHandle(url, resources, config, method) {
    const token = localStorage.getItem('token');
    const requestConfig = {
        method,
        headers: {
            'Content-Type': config?.contentType ?? 'application/json',
            Authorization: `Bearer ${token}`
        }
    };

    if (method === 'GET' && resources) {
        const keys = Object.keys(resources);

        url += '?';

        keys.forEach((key, index) => {
            const ampersand = index === keys.length - 1 ? '' : '&';
            const current = `${key}=${resources[key]}${ampersand}`;

            url += current;
        });
    } else if (method !== 'GET' && resources) {
        requestConfig.body = JSON.stringify(resources);
    }

    try {
        const completeURI = baseURL + url;
        const response = await fetch(completeURI, requestConfig);

        if (response.status > 399) throw response;

        const responseJSON = await response.json();

        return responseJSON;
    } catch (error) {
        const { status } = error;

        switch (status) {
            case 401:
                // $alertfify.error("權限不足");
                break;
            case 500:
                // $alertfify.error("伺服器出錯");
                break;
            default:
        }

        return status;
    }
}

export async function get(url, resources, config) {
    try {
        return await requestHandle(url, resources, config, 'GET');
    } catch (error) {
        throw error.response;
    }
}
export async function post(url, resources, config) {
    try {
        return await requestHandle(url, resources, config, 'POST');
    } catch (error) {
        throw error.response;
    }
}
export async function put(url, resources, config) {
    try {
        return await requestHandle(url, resources, config, 'PUT');
    } catch (error) {
        throw error.response;
    }
}
export async function del(url, resources, config) {
    try {
        return await requestHandle(url, resources, config, 'DELETE');
    } catch (error) {
        throw error.response;
    }
}
