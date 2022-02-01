# Angular / Laravel Sanctum #
Basic template with authentication services and routes to get started faster with **Angular** and **Laravel Sanctum** SPA authentiction.
Improvements are welcome.

---
## How to use it
Simply clone this repo, make the changes accordingly to your needs:
1. Change the API url inside `enviroments.ts`
2. Run `ng serve --host SUB_DOMAIN_LARAVEL` if you don't want to use `localhost`. You must run the application within the same domain as the Laravel backend is running in order for the Sanctum SPA Authencication works.

> In order to authenticate, your SPA and API must share the same top-level domain. However, they may be placed on different subdomains.

Reference: [https://laravel.com/docs/8.x/sanctum#spa-authentication](https://laravel.com/docs/8.x/sanctum#spa-authentication)

---

If you want to improve this repo, you're welcome to do so.
