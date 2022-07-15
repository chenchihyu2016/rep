const baseURL = 'https://jsonplaceholder.typicode.com';
const defaultConfig = { headers: { contentType: 'application/json' } };

class Api {
    get(url, params, config) {
        return this.requestHandle('GET', url, params, config);
    }

    post(url, data, config) {
        return this.requestHandle('POST', url, data, config);
    }

    put(url, data, config) {
        return this.requestHandle('PUT', url, data, config);
    }

    delete(url, data, config) {
        return this.requestHandle('DELETE', url, data, config);
    }

    async requestHandle(method, url, data, config = defaultConfig) {
        if (method === 'GET') {
            if (data) {
                const keys = Object.keys(data);
                url += '?';

                keys.forEach((key, index) => {
                    const ampersand = index === keys.length - 1 ? '' : '&';
                    const current = `${key}=${data[key]}${ampersand}`;

                    url += current;
                });
            }
        } else {
            config.body = JSON.stringify(data);
        }

        try {
            const completeURI = baseURL + url;
            const response = await fetch(completeURI, config);
            const json = await response.json();

            return json;
        } catch (error) {
            const { status } = error;

            switch (status) {
                case 401:
                case 403:
                    // $alertify.error('權限不足');
                    break;
                case 500:
                    // $alertify.error('伺服器出錯');
                    break;
            }
        }
    }
}

export default new Api();
