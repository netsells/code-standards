# JavaScript

We use the latest specification of ECMAScript on greenfield projects with a build pipeline (gulp/webpack), making for concise code that compiles for compatability in older browsers.

## Linting

We make use of an automated approach of enforcing JavaScript code standards. These standards are constantly evolving to ensure we are making use of the best methods, and in order to catch more edge cases ensuring our code is consistent across the board.

See [netsells/eslint-config-netsells](https://github.com/netsells/eslint-config-netsells)

## UI Framework

Our JavaScript framework of choice is [Vue.js](https://vuejs.org/v2/guide/). Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.

For Vue standards, check the [Vue Section](./vue.html).

## Asynchronous Requests

### Accessing Application Routes

It's generally bad practice to hardcode paths in our code, so we avoid it by referencing routes by their unique name in the backend, much like you would do in Laravel. For more information, see [laroute](https://github.com/samturrell/laroute) and [vue-laroute](https://github.com/samturrell/vue-laroute).

### Repositories

We aim to make all asynchronous requests reusable throughout the application, and make the code as DRY as possible. To do so we make use of a "Repository" pattern. A repository is a JavaScript class that represents an "Entity", e.g. User, Booking. These classes are made up of methods that allow you to interact with this entity in some way.

#### BaseRepository

Each repository will extend a "BaseRepository" that provides things such as application routes, a http client and basic request helpers (e.g. `get`, `post`). This file will look something like this:

<spoiler>

```javascript
import routes from '../../../../public/js/laroute'; // Load our routes
import axios from '../modules/axios'; // Pull in our ajax client

class BaseRepository {
    /**
     * Construct the repository
     * We provide axios, all routes and the route helper
     * to the global repository context here
     */
    constructor() {
        this.routes = routes;
        this.route = routes.route;
        this.axios = axios;
    }

    /**
     * Standard get request
     *
     * @param {String} url
     * @param {Object} data
     *
     * @return {Promise}
     */
    get(url, data) {
        return this.request('get', url, data);
    }

    /**
     * Standard patch request
     *
     * @param {String} url
     * @param {Object} data
     *
     * @return {Promise}
     */
    patch(url, data) {
        return this.request('patch', url, data);
    }


    /**
     * Standard post request
     *
     * @param {String} url
     * @param {Object} data
     *
     * @return {Promise}
     */
    post(url, data) {
        return this.request('post', url, data);
    }


    /**
     * Standard delete request
     *
     * @param {String} url
     * @param {Object} data
     *
     * @return {Promise}
     */
    delete(url, data) {
        return this.request('delete', url, data);
    }


    /**
     * Standard request handler
     *
     * @param {String} method
     * @param {String} url
     * @param {Object} data
     *
     * @return {Promise}
     */
    request(method, url, data) {
        return this.axios[method](url, data)
            .then(this.normaliseResponse)
    }

    /**
     * Normalise the response and return just the data
     *
     * @param {*} response
     */
    normaliseResponse({ data }) {
        return data;
    }
}

export default BaseRepository;
```

</spoiler>

#### Example Repository

Imagine the system has the concept of bookings. We'll use "Booking" as our entity to contruct our data respository.

<spoiler>

```javascript
import BaseRepository from './BaseRepository';

class BookingRepository extends BaseRepository {
    /**
     * List users bookings
     *
     * @param {Number} id
     * @param {Object} data
     *
     * @returns {Promise}
     */
    all() {
        return super.get(this.routes.route('bookings'), data)
            .then(this.normaliseReponse);
    }

    /**
     * Get a single booking
     *
     * @param {Number} id
     *
     * @returns {Promise}
     */
    find(id) {
        return super.get(this.routes.route('bookings.booking', { id ), data)
            .then(this.normaliseReponse);
    }

    /**
     * Update a booking
     *
     * @param {Number} id
     * @param {Object} data
     *
     * @returns {Promise}
     */
    update(id, data = {}) {
        return super.patch(this.routes.route('bookings.booking', { id }), data)
            .then(this.normaliseReponse);
    }

    /**
     * Cancel a booking
     *
     * @param {Number} id
     * @param {Object} data
     *
     * @returns {Promise}
     */
    cancel(id, data = {}) {
        return super.delete(this.routes.route('bookings.booking', { id }), data)
            .then(this.normaliseReponse);
    }
}

export default new BookingRepository;
```

</spoiler>

This class then be imported in multiple places and used like so
```javascript
BookingRepository.find(123)
    .then(({ data } => { ... });
```

## Documentation

We use several methods of maintaining documentation during the development process.

### Method and function names

Class methods and static functions have meaningful names that describe the action or output of the logic therein.

### JSDoc

All methods and functions must have a JSDoc block associated with it. This provides additonal intellisense and autocompletion to IDEs and code editors by defining what the function does and the input and output values. This also gives us the ability to automatically generate code API documentation via the JSDoc CLI tool.

## jQuery Usage

We like to keep jQuery usage to a minimum, other than for plugins. It should NOT be used to manipulate the dom. This should instead be encapsulated in a Vue component or directive.

