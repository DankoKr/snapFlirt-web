import { useState } from 'react';
import ImageUploader from '../components/imageUploader';
import LineGenerator from '../components/lineGenerator';

export default function SnapFlirt() {
  const [image, setImage] = useState(null);
  const [flirtyLine, setFlirtyLine] = useState(null);

  const generateFlirtyLine = () => {
    const lines = [
      'Are you a camera? Because every time I look at you, I smile!',
      "Is your name Google? Because you've got everything I've been searching for!",
      'Are you a magician? Because whenever I look at you, everyone else disappears!',
      'Do you have a map? I just keep getting lost in your eyes!',
      "Is your name Wi-Fi? Because I'm really feeling a connection!",
    ];
    setFlirtyLine(lines[Math.floor(Math.random() * lines.length)]);
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400 flex items-center justify-center p-4'>
      <div className='bg-white rounded-xl shadow-2xl p-8 max-w-md w-full space-y-6'>
        <h1 className='text-3xl font-bold text-center text-gray-800'>
          SnapFlirt 📸💕
        </h1>
        <ImageUploader image={image} setImage={setImage} />
        <LineGenerator
          flirtyLine={flirtyLine}
          generateFlirtyLine={generateFlirtyLine}
          isDisabled={!image}
        />
      </div>
    </div>
  );
}
