import { Workbox } from 'workbox-window';

const register = () => {
  if (import.meta.env.NODE_ENV !== 'production') return;
  if (navigator?.serviceWorker) {
    const wb = new Workbox(`${import.meta.env.PUBLIC_URL}/service-worker.js`);

    const checkForUpdate = () => {
      const isUpdate = window.confirm('New Update Available. Click OK to update');
      if (isUpdate) {
        wb.messageSkipWaiting();
      }
    };

    wb.addEventListener('waiting', checkForUpdate);
    wb.register();
  }
};

export default register;
