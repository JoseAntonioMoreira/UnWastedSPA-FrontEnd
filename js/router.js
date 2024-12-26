import { routes } from './routes.js';

function handlePopState({ state }) {
    const route = state || routes.home;

    setCurrentRoute(route);
    loadController(route.controller);
}

function addEventsToAnchors() {
    document.body.addEventListener("click", function (event) {
        const anchor = event.target.closest("a");

        if (anchor) {
            event.preventDefault();
            navigate(anchor.pathname);
        }
    })

}

async function loadController(controllerName) {

    try {
        const module = await import(`./controller/${controllerName}.js`);
        module.init();
    } catch (err) {
        console.error(err);
    }
}

function setCurrentRoute(route, params = {}) {
    const { path, controller } = route;

    routes.currentPath.path = path;
    routes.currentPath.controller = controller;
    routes.currentPath.params = params;
}

function navigate(path, firstLoad = false) {
    if (routes.currentPath.path === path) {
        return;
    }

    const route = matchRoute(path);

    setCurrentRoute(route);

    firstLoad
        ? history.replaceState(route, '', route.path)
        : history.pushState(route, '', route.params ? route.path.split(":")[0] + route.params.id : route.path);

    loadController(route.controller);

}

function matchRoute(path) {
    for (const key in routes) {
        const route = routes[key];
        
        // Skip non-dynamic routes like home, shop, etc.
        if (!route.path.includes(':')) {
            if (route.path === path) {
                return route;
            }
        } else {
            // Dynamic route matching (e.g., /shop/:id)
            const regex = new RegExp('^' + route.path.replace(':id', '(\\d+)') + '$');
            const match = path.match(regex);

            if (match) {
                const params = { id: match[1] };  // Extract the id from the URL
                return { ...route, params };
            }
        }
    }

    return routes.home; // Fallback to home if no route matches
}

function init() {
    console.log("I'm inside the router module and init function");

    const path = window.location.pathname;

    navigate(path, true);
    window.addEventListener('popstate', handlePopState);
    addEventsToAnchors();
}

export default { init };
