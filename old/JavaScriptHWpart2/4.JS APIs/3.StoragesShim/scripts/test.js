function startTest() {
    consoleP.writeLine('before init');
    consoleP.writeLine("from local storage : {0}", LocalStorage.getItem('testLocalStorage') || 'undefined');
    consoleP.writeLine("from session storage : {0}", SessionStorage.getItem('testSessinStorage') || 'undefined');

    LocalStorage.setItem('testLocalStorage', 'fromLocalStorage');
    SessionStorage.setItem('testSessinStorage', 'fromSessionStorage');

    consoleP.writeLine('After init');
    consoleP.writeLine("from local storage : {0}", LocalStorage.getItem('testLocalStorage'));
    consoleP.writeLine("from session storage : {0}", SessionStorage.getItem('testSessinStorage'));
}