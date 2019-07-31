zoid.create({
    tag: 'storage',
});

// simulate non-storage access api cookie setting, third party
document.cookie = 'child=true';
localStorage.setItem('child', 'true');
sessionStorage.setItem('child', 'true');

document.hasStorageAccess()
    .then(hasAccess => {
        console.log(`[DEBUG: child.js]: hasAccess=${hasAccess}`);
        if (!hasAccess) {
            console.log('[DEBUG: child.js]: does not have access, requesting storage access');
            return document.requestStorageAccess();
        }
    })
    .then(_ => {
        // Now we have first-party storage access!
        console.log('[DEBUG: child.js]: setting cookies now, this should be first-party');
        // Let's access some items from the first-party cookie jar
        document.cookie = "childstorageaccess=true;domain=127.0.0.1:8080;";
        document.cookie = "childaccess=true;";
        localStorage.setItem("username", "John");
    })
    .catch(error => {
        // error obtaining storage access.
        console.log('error requesting storage access', error);
    });