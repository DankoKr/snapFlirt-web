import { useState } from 'react';
import ImageUploader from '../components/imageUploader';
import useFlirtyComment from '../hooks/useFlirtyLine';

export default function SnapFlirt() {
  const [image, setImage] = useState(null);
  const { flirtyLine, loading, error, sendImageToBackend } = useFlirtyComment();

  const handleGenerateFlirt = () => {
    sendImageToBackend(image);
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400 flex items-center justify-center p-4'>
      <div className='bg-white rounded-xl shadow-2xl p-8 max-w-md w-full space-y-6'>
        <h1 className='text-3xl font-bold text-center text-gray-800'>
          SnapFlirt 📸💕
        </h1>

        <ImageUploader image={image} setImage={setImage} />

        <button
          onClick={handleGenerateFlirt}
          className={`w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-3 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center ${
            (!image || loading) && 'opacity-50 cursor-not-allowed'
          }`}
          disabled={!image || loading}
        >
          {loading ? 'Generating Flirty Line...' : 'Generate Flirty Line'}
        </button>

        {error && (
          <div className='bg-red-100 text-red-600 rounded-lg p-4 mt-4 text-center'>
            <p>{error}</p>
          </div>
        )}

        {flirtyLine && (
          <div className='bg-gray-100 rounded-lg p-4 mt-4 text-center animate-fade-scale'>
            <p className='text-lg font-medium text-gray-800'>{flirtyLine}</p>
          </div>
        )}
      </div>
    </div>
  );
}
