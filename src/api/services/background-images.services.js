import requestor from '../client/requestor';

class BackgroundImageService {
  getBackgroundImages() {
    return requestor.get(`https://rolling-api.vercel.app/background-images/
`);
  }
}

const backgroundImageService = new BackgroundImageService();

export default backgroundImageService;
