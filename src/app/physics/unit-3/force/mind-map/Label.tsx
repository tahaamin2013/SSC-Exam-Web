import React from 'react';

interface LabelProps {
  text: string;
}

const Label: React.FC<LabelProps> = ({ text }) => {
  return (
    <span className="text-sm font-bold mr-2">{text}</span>
  );
};

export default Label;