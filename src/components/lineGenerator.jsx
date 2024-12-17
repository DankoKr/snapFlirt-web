import PropTypes from 'prop-types';
import { Sparkles, RefreshCw } from 'lucide-react';

export default function LineGenerator({
  flirtyLine,
  generateFlirtyLine,
  isDisabled,
}) {
  return (
    <>
      <button
        onClick={generateFlirtyLine}
        className='w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-3 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center'
        disabled={isDisabled}
      >
        {flirtyLine ? (
          <>
            <RefreshCw className='mr-2 h-5 w-5' />
            Generate New Flirty Line
          </>
        ) : (
          <>
            <Sparkles className='mr-2 h-5 w-5' />
            Generate Flirty Line
          </>
        )}
      </button>

      {flirtyLine && (
        <div className='bg-gray-100 rounded-lg p-4 mt-4 text-center animate-fade-in'>
          <p className='text-lg font-medium text-gray-800'>{flirtyLine}</p>
        </div>
      )}
    </>
  );
}

LineGenerator.propTypes = {
  flirtyLine: PropTypes.string,
  generateFlirtyLine: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};
