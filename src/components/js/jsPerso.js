import * as bootstrap from 'bootstrap';
window.bootstrap = bootstrap;
export const showToast = () => {
    const toastLiveExample = document.getElementById('liveToast')
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastBootstrap.show()
}
