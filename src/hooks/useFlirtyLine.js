import { useState } from 'react';

export default function useFlirtyLine() {
  const [flirtyLine, setFlirtyLine] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendImageToBackend = async (image) => {
    if (!image) return;

    setLoading(true);
    setError(null);
    setFlirtyLine(null);

    try {
      const formData = new FormData();
      const blob = await fetch(image).then((res) => res.blob());
      formData.append('file', blob, 'uploaded-image.jpg');

      const response = await fetch(
        'https://snapflirt.onrender.com/generate-flirt/',
        {
          method: 'POST',
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch flirty line.');
      }

      const data = await response.json();
      setFlirtyLine(
        data.flirty_comment || 'Something went wrong! Please try again later!'
      );
    } catch (err) {
      console.error('Error fetching flirty line:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const clearFlirtyLine = () => setFlirtyLine(null);

  return { flirtyLine, loading, error, sendImageToBackend, clearFlirtyLine };
}
