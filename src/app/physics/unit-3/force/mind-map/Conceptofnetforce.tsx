import React from 'react';
import Cart from './Cart';
import Arrow from './Arrow';
import Label from './Label';

const ForcesDiagram: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4 my-10">
      <div className="space-y-8">
        <h1 className='text-xl font-bold'>Applied Force</h1>
        <div className="flex items-center gap-4">
          <Label text="(a)" />
          <Arrow direction="right" magnitude={10} />
          <Cart />
          <Arrow direction="right" magnitude={20} />
        </div>
        <div className="flex items-center gap-4">
          <Label text="(b)" />
          <Arrow direction="left" magnitude={20} />
          <Cart />
          <Arrow direction="right" magnitude={40} />
        </div>
        <div className="flex items-center gap-4">
          <Label text="(c)" />
          <Arrow direction="left" magnitude={25} />
          <Cart />
          <Arrow direction="right" magnitude={25} />
        </div>
      </div>
      <div className="space-y-8">
      <h1 className='text-xl font-bold'>Resultant (Net) Force</h1>

        <div className="flex items-center gap-4">
          <Cart />
          <Arrow direction="right" magnitude={30} />
        </div>
        <div className="flex items-center gap-4">
          <Cart />
          <Arrow direction="right" magnitude={20} />
        </div>
        <div className="flex items-center gap-4">
          <Cart />
          <Label text="zero resultant" />
        </div>
      </div>
    </div>
  );
};

export default ForcesDiagram;