import { useState } from 'react';
import ImageUploader from '../components/imageUploader';

export default function SnapFlirt() {
  const [image, setImage] = useState(null);
  const [flirtyLine, setFlirtyLine] = useState(null);
  const [loading, setLoading] = useState(false);

  const sendImageToBackend = async () => {
    if (!image) return;

    setLoading(true);
    setFlirtyLine(null);

    try {
      const formData = new FormData();
      const blob = await fetch(image).then((res) => res.blob());
      formData.append('file', blob, 'uploaded-image.jpg');

      const response = await fetch('http://127.0.0.1:8000/generate-flirt/', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to fetch flirty comment.');
      }

      const data = await response.json();
      setFlirtyLine(data.flirty_comment || 'No flirty line generated.');
    } catch (error) {
      console.error('Error:', error);
      setFlirtyLine('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400 flex items-center justify-center p-4'>
      <div className='bg-white rounded-xl shadow-2xl p-8 max-w-md w-full space-y-6'>
        <h1 className='text-3xl font-bold text-center text-gray-800'>
          SnapFlirt 📸💕
        </h1>
        <ImageUploader image={image} setImage={setImage} />
        <button
          onClick={sendImageToBackend}
          className='w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-3 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center'
          disabled={!image || loading}
        >
          {loading ? 'Generating Flirty Line...' : 'Generate Flirty Line'}
        </button>

        {flirtyLine && (
          <div className='bg-gray-100 rounded-lg p-4 mt-4 text-center animate-fade-in'>
            <p className='text-lg font-medium text-gray-800'>{flirtyLine}</p>
          </div>
        )}
      </div>
    </div>
  );
}
