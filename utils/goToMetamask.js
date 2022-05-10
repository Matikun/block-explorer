import app from 'config/app';

const goToMetamask = () => window.open(app.METAMASK_INSTALL_URL, '_blank');

export default goToMetamask;
