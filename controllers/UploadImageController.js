import UploadImage from '../models/UploadImage.js'
class UploadImageController {
    async post (req, res) {
        try {
          const { name, file, contentType } = req.body;
          const buffer = Buffer.from(file, 'base64');
      
          await UploadImage.save({
            name: name,
            data: buffer,
            contentType: contentType,
          });
      
          res.status(201).json({ message: 'File saved successfully!', imageId: newImage._id });
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Error saving file' });
        }
      };
}

export default  new UploadImageController ();