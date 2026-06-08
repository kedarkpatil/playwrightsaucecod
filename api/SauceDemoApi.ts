import { APIRequestContext } from '@playwright/test';

export class SauceDemoApi {

    request: APIRequestContext;

    constructor(request: APIRequestContext) {
        this.request = request;
    }

    async getApplication() {
        return await this.request.get(
            'https://www.saucedemo.com'
        );
    }
}