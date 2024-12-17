import PropTypes from 'prop-types';
import { Upload, X } from 'lucide-react';

export default function ImageUploader({ image, setImage }) {
  const handleImageUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='border-4 border-dashed border-gray-200 rounded-lg p-4 text-center cursor-pointer hover:border-pink-400 transition-colors duration-300'>
      {image ? (
        <div className='relative'>
          <img
            src={image}
            alt='Uploaded'
            className='rounded-lg w-full h-auto'
          />
          <button
            className='absolute top-2 right-2 bg-white/80 hover:bg-white/90 backdrop-blur-sm rounded-full w-8 h-8 p-1.5'
            onClick={() => setImage(null)}
          >
            <X className='h-full w-full' />
          </button>
        </div>
      ) : (
        <label
          htmlFor='image-upload'
          className='h-64 flex items-center justify-center cursor-pointer'
        >
          <div>
            <Upload className='mx-auto h-12 w-12 text-gray-400' />
            <p className='mt-2 text-sm text-gray-500'>
              Click to upload an image
            </p>
          </div>
        </label>
      )}
      <input
        id='image-upload'
        type='file'
        accept='image/*'
        className='hidden'
        onChange={handleImageUpload}
      />
    </div>
  );
}

ImageUploader.propTypes = {
  image: PropTypes.string,
  setImage: PropTypes.func.isRequired,
};
