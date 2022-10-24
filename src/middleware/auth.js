export default function auth({next, router}) {
    if (!localStorage.getItem('role')) {
        return router.push({name: 'HomeGuest'});
    }
    return next();
}