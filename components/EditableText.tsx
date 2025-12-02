
import React from 'react';
import { useImageContext } from '../contexts/ImageContext';

interface EditableTextProps {
  id: string;
  defaultText: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
}

const EditableText: React.FC<EditableTextProps> = ({ id, defaultText, className = "", as: Tag = 'span' }) => {
  const { texts, updateText, isEditing } = useImageContext();
  const text = texts[id] !== undefined ? texts[id] : defaultText;

  if (!isEditing) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag
      contentEditable
      suppressContentEditableWarning
      onBlur={(e: React.FocusEvent<HTMLElement>) => {
        // Prevent saving if the text hasn't changed to avoid unnecessary state updates
        if (e.currentTarget.textContent !== text) {
             updateText(id, e.currentTarget.textContent || "");
        }
      }}
      className={`${className} cursor-text outline-dashed outline-2 outline-yellow-500/50 hover:outline-yellow-500 rounded px-1 bg-white/5 min-w-[1em] inline-block transition-all`}
    >
      {text}
    </Tag>
  );
};

export default EditableText;
