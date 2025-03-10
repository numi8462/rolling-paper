import requestor from '../client/requestor';

class ProfileImageService {
  getProfileImages() {
    return requestor.get(`https://rolling-api.vercel.app/profile-images/
`);
  }
}

const profileImageService = new ProfileImageService();

export default profileImageService;
