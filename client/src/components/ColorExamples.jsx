import React from 'react';

const ColorExamples = () => {
  return (
    <div className="p-4">
      <h2 className="mb-4">Text Color Examples</h2>

      <p style={{ color: 'var(--color-brown)' }} className="mb-2">
        This text uses the brown color
      </p>

      <p style={{ color: 'var(--color-blue)' }} className="mb-2">
        This text uses the blue color
      </p>

      <p style={{ color: 'var(--color-black)' }} className="mb-2">
        This text uses the black color
      </p>

      <p style={{ color: 'var(--color-yellow)' }} className="mb-2">
        This text uses the yellow color
      </p>
    </div>
  );
};

export default ColorExamples;
